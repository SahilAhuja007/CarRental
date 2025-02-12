const User = require('../User/models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Driver = require('../driver/models/driver.model'); // Import driver model

// Signup
exports.signup = async (req, res) => {
    try {
        const { name, email, phone, password, role, licenseNumber } = req.body;

        if (!name || !email || !phone || !password || !role || (role === "driver" && !licenseNumber)) {
            return res.status(400).json({
                success: false,
                message: "Required fields: name, email, phone, password, role, and licenseNumber (if role is driver)"
            });
        }

        // Check if user already exists
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role
        });

        // If role is driver, create a driver record
        if (role === "driver") {
            const driver = await Driver.create({
                userId: user._id,
                licenseNumber,  // Ensure licenseNumber is passed and used
                isAvailable: true // Assuming drivers are available when created
            });
            console.log("Driver created: ", driver);
            return res.status(200).json({ driver:driver ,
                message :"driver create successfully",
                user : user,
            });
        }

        return res.status(201).json({
            success: true,
            data: user,
            message: "User created successfully"
        });

    } catch (error) {
        console.error("Error in signup:", error);
        return res.status(500).json({
            success: false,
            message: "Issue while creating user",
            error: error.message
        });
    }
};


// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Required fields: email, password"
            });
        }

        const exist = await User.findOne({ email });
        if (!exist) {
            return res.status(404).json({
                success: false,
                message: "User not registered"
            });
        }

        // Compare passwords
        const passwordverify = await bcrypt.compare(password, exist.password);
        if (!passwordverify) {
            return res.status(401).json({
                success: false,
                message: "Password incorrect"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: exist._id, role: exist.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        if (!token) {
            return res.status(500).json({
                success: false,
                message: "Issue while creating token"
            });
        }

        console.log("Generated token:", token);

        return res.status(200).json({
            success: true,
            data: { token, user: exist },
            message: "Login successful"
        });

    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({
            success: false,
            message: "Issue while logging in",
            error: error.message
        });
    }
};

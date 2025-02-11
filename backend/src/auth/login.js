const User = require('../User/models/user.model');
const bcrypt = require('bcrypt');
const user = require('../User/routes/route');
const jwt=require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { name, email, phone, password, role } = req.body;

        if (!name || !email || !phone || !password || !role) {
            return res.status(401).json({
                success: false,
                message: "Required fields: name, email, phone, password, role"
            });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(401).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name, 
            email, 
            phone, 
            password: hashedPassword, 
            role
        });

        return res.status(200).json({
            success: true,
            data: user,
            message: "User created successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Issue while creating user",
            error: error.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const {email,password} = req.body;

        if (!email ||  !password ) {
            return res.status(401).json({
                success: false,
                message: "Required fields: email,password"
            });
        }

        const exist = await User.findOne({ email });
        if (!exist) {
            return res.status(401).json({
                success: false,
                message: "User not registered"
            });
        }

        const passwordverify=await bcrypt.compare(password,exist.password);
        if(!passwordverify){
            return res.status(401)
            .json({
                success:false,
                message:"password incorrect"
            })
        }
        const token=jwt.sign({
            id : exist._id,
            role : exist.role
        },process.env.JWT_SECRET,
        { expiresIn: '1d' });
        if(!token){
            return res.status(401)
            .json({
                success:false,
                message:"issue while creatiing token"
            })
        }
        console.log(token);
        return res.status(200).json({
            success: true,
            data: token,
            message: "login successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Issue while creating user",
            error: error.message
        });
    }
};
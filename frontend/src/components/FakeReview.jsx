import React, { useState, useEffect } from 'react';

const reviews = [
    { text: "This car rental service is amazing! The process was smooth, and the customer service was top-notch. Highly recommend!", name: "John Doe" },
    { text: "Great experience with the car rental! The cars were in great condition, and the prices were very reasonable.", name: "Jane Smith" },
    { text: "Fast and reliable service! I was able to book and drive away in just minutes. Will definitely use this service again.", name: "Alex Johnson" },
    { text: "Best car rental experience I've ever had. Friendly staff and clean vehicles.", name: "Chris Brown" },
    { text: "Super convenient and affordable. The staff was very helpful too!", name: "Kelly Green" },
    { text: "Outstanding service! The team was extremely helpful and went out of their way to ensure my satisfaction.", name: "Arjun Reddy" },
    { text: "Impressed by the quality of the vehicle! Everything was easy and straightforward.", name: "Anjali Gupta" },
    { text: "Excellent customer support. They addressed all my concerns promptly.", name: "Michael Thompson" },
    { text: "A hassle-free experience! I will definitely recommend it to others.", name: "Pooja Nair" },
    { text: "The car was very comfortable, and the rates were quite reasonable.", name: "Oliver Martin" },
    { text: "Amazing service! The staff was courteous and the vehicle was in great shape.", name: "Sneha Iyer" },
    { text: "Had a great time with the rental! Will surely come back for more.", name: "James Anderson" },
    { text: "Very professional service. The process was seamless from start to finish.", name: "Nikhil Sharma" },
    { text: "The staff was friendly and the car selection was fantastic!", name: "Emma Davis" },
    { text: "Efficient and reliable service. My go-to car rental from now on!", name: "Rahul Kapoor" }
  ];
  

const FakeReview = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    // Update review every 5 seconds
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="fixed bottom-24 right-5 p-4 w-64  shadow-lg transition-opacity duration-500 ease-in-out bg-transparent">
      <h3 className="text-lg font-bold text-white">Happy Customer's Review 😊</h3>
      <p className="mt-2 text-white">"{currentReview.text}"</p>
      <p className="mt-4 text-right font-semibold text-white">- {currentReview.name}</p>
    </div>
  );
};

export default FakeReview;

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
          About Our E-Commerce Store
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to our online store! We are dedicated to providing you with
          high-quality products and excellent customer service.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to make shopping convenient, enjoyable, and affordable
          for you. We believe in delivering the best value to our customers
          while maintaining the highest quality standards.
        </p>
        <p className="text-gray-700 mb-6">
          Since our establishment in [Year], we have grown into a leading
          e-commerce platform, serving customers from all around the world. Your
          satisfaction is our top priority, and we are committed to exceeding
          your expectations.
        </p>
      </div>
    </div>
  );
};

export default About;

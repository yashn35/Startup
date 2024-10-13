"use client";

'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <img 
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-WIIAATSFb9KMvLpyYknX23mp.png?st=2024-10-12T22%3A59%3A16Z&se=2024-10-13T00%3A59%3A16Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T14%3A28%3A04Z&ske=2024-10-13T14%3A28%3A04Z&sks=b&skv=2024-08-04&sig=FJYwSOGmTKIuECwlSCztj1VAZUWelWHrRmNww9hf/XM%3D"
          alt="AdmitEdge Cover"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">AdmitEdge</h1>
          <h2 className="text-xl mt-4">Your AI-Based College Admissions Coach</h2>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          Empowering students to achieve their academic dreams, AdmitEdge leverages cutting-edge AI technology to create personalized college admissions strategies that highlight individuality, optimize strengths, and enhance acceptance chances at top-tier universities.
        </p>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-6">
            Welcome to DormConnect, where we transform the college living experience into a connected, hassle-free lifestyle. Founded by Luke Bousfield, DormConnect aims to bridge the gap between students and their campus communities through innovative technology and seamless services. Our platform offers personalized solutions designed to simplify dorm life, from managing room essentials to connecting you with fellow students for local events and activities. At DormConnect, we are committed to enhancing the way students live, learn, and grow, creating a supportive network that extends beyond the classroom. Join us in revolutionizing the future of student living.
          </p>
        </div>
        <div className="mt-8">
          <img 
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-ZsuFAOrcrHhKhH56Zwrm2KE5.png?st=2024-10-12T22%3A59%3A24Z&se=2024-10-13T00%3A59%3A24Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A15%3A12Z&ske=2024-10-13T23%3A15%3A12Z&sks=b&skv=2024-08-04&sig=FCvS6BpELAB/ClDii8NV2YebH19eklxH/ZrYw72nzOk%3D"
            alt="Co-founder Luke Bousfield"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-900 text-white text-center">
        <p>© 2023 AdmitEdge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

'use client'

import React from 'react'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">STEMerse</h1>
            <p className="text-xl text-gray-700">
              AI-Powered Smart Textbooks: Interactive digital textbooks enhanced with AI that provide personalized feedback, quizzes, and reading suggestions based on the learner's interaction and comprehension level.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-ciEX2ofRrjYhGrLD49h5A6bk.png?st=2024-10-12T23%3A54%3A17Z&se=2024-10-13T01%3A54%3A17Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A29%3A12Z&ske=2024-10-13T23%3A29%3A12Z&sks=b&skv=2024-08-04&sig=eeUvvNo5932w2r3ThWdvajM2bGpkEvIzRM4R%2BktDRMQ%3D"
              alt="STEMerse Cover"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            “Our mission is to empower STEM educators with AI-powered smart textbooks that transform traditional learning into engaging, personalized educational experiences. By leveraging advanced algorithms, we provide tailored feedback, adaptive quizzes, and customized learning resources, enabling teachers to enhance their methodologies and students to achieve deeper understanding and success in STEM subjects.”
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-700 text-lg">
              <strong>About Us</strong>
              <br /><br />
              DormConnect is a pioneering platform dedicated to enhancing the college living experience by seamlessly connecting dorm residents. Founded by Luke Bousfield, our mission is to foster community, streamline communication, and provide valuable resources for students navigating dorm life. At DormConnect, we believe that a connected community leads to a more fulfilling and supportive living environment. Our innovative solutions leverage technology to bring students together, facilitate meaningful interactions, and ensure that every member feels at home. Join us in revolutionizing dorm life and building lasting connections.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-yba9aEgjMgHhhFwwfVSG61dx.png?st=2024-10-12T23%3A54%3A33Z&se=2024-10-13T01%3A54%3A33Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A51%3A44Z&ske=2024-10-13T23%3A51%3A44Z&sks=b&skv=2024-08-04&sig=kX8sH4%2B%2BmAPt3SCu4j4%2B0nbSFzu19btZbsLvQ7DCPDM%3D"
              alt="Luke Bousfield"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-white">&copy; {new Date().getFullYear()} STEMerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

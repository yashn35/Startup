"use client";

import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gray-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Airbnb for Dorms</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover comfortable and inspiring dorm stay experiences worldwide
        </p>
        <div className="w-full max-w-3xl">
          <Image
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-OG3MqIebEMRBgpmDDUP2pTn4.png?st=2024-10-12T22%3A50%3A42Z&se=2024-10-13T00%3A50%3A42Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A50%3A42Z&ske=2024-10-13T23%3A50%3A42Z&sks=b&skv=2024-08-04&sig=12pyCL97R3I6XhNUr24KBeNI/3U/zU08KpxvEdJ9X/Y%3D"
            alt="Dorm Hero Image"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Connecting students worldwide through unique and flexible dorm stay
            experiences, fostering a global community of learners while providing
            affordable, convenient, and inspiring accommodations.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-8">
            DormConnect was founded with a vision to transform student living experiences by creating a seamless connection between students and their dormitories. Co-founder John Doe, an innovator with a passion for technology and community-building, leads our efforts to streamline and enhance the way students interact with their living spaces.
          </p>
          <p className="text-gray-600 mb-8">
            At DormConnect, we understand the unique challenges that come with dorm life, from managing room preferences to organizing community events. Our platform integrates smart technology and user-friendly features to ensure students find dorm living both comfortable and engaging. We're committed to fostering a sense of community and providing the tools necessary for students to thrive academically and socially.
          </p>
          <p className="text-gray-600">
            Join DormConnect as we redefine what it means to live and learn in a student-centered environment.
          </p>
          <div className="mt-8">
            <Image
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-7cbIE8RbMAMVcCpZXWCzIrsJ.png?st=2024-10-12T22%3A50%3A53Z&se=2024-10-13T00%3A50%3A53Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A29%3A39Z&ske=2024-10-13T23%3A29%3A39Z&sks=b&skv=2024-08-04&sig=xt2aMkn/pYcCnJ5y9zfvcSijHem//eQUS9gvGid/PTE%3D"
              alt="Co-founder John Doe"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2023 DormConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

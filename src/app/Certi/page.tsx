"use client"; // To specify this as a client-side component

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import certificate images
import CerOne from "../images/certificates/1.png";
import CerTwo from "../images/certificates/2.png";
import CerThree from "../images/certificates/3.png";
import CerFour from "../images/certificates/4.png";
import "../styles/cer1.css";
import { Text } from "@chakra-ui/react";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [CerOne, CerTwo, CerThree, CerFour];

  const openModal = (certificate: StaticImageData) => {
    setSelectedImage(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title" style={{ color: "red" }}>
        Certificate Collection
      </h1>

      <p className="intro-text">
        Aleeza Saleem Full Stack Developer | Certified Professional...
      </p>
      <hr />
      <br />
      <Text
        textAlign={"justify"}
        letterSpacing={1}
        lineHeight={2}
        textTransform="Capitalize"
        padding={2}
        mt={4}
        fontStyle={"italic"}
      >
        <span style={{ color: "blue" }}>
          {" "}
          <span style={{ color: "red" }}> Aleeza Saleem </span>
          Full Stack Developer | Certified Professional...
        </span>
        (I'm a passionate and results-driven Full Stack Developer with extensive
        experience in both front-end and back-end technologies. With a solid
        foundation in web development, I have successfully designed and
        implemented scalable, user-friendly applications. My expertise spans
        various programming languages, frameworks, and development tools,
        including HTML, CSS, JavaScript, Node.js, React, Angular, and databases
        like MySQL and MongoDB. In addition to my hands-on experience, I have
        earned numerous certifications that demonstrate my commitment to staying
        current with the latest technologies and best practices. These
        certifications have further enhanced my ability to deliver innovative,
        high-quality solutions that meet client needs and business goals. I am
        dedicated to continuous learning and growth, always striving to improve
        my technical skills and deliver exceptional user experiences.)
      </Text>
      <hr />
      <br />

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <Image
              src={certificate}
              alt={`Certificate ${index + 1}`}
              layout="responsive"
              width={300}
              height={200}
              className="certificate-image"
            />
            <button className="view-btn" onClick={() => openModal(certificate)}>
              View Full
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full Certificate"
              layout="intrinsic"
              width={800}
              height={600}
            />
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

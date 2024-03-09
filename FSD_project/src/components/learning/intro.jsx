/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from "../Footers/footer";
import Header from "../Headers/header";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";

export const Intro = () => {
  const [showDropdowns, setShowDropdowns] = useState({
    definition: false,
    keyConcepts: false,
    commonThreats: false,
    cybersecurityMeasures: false,
    cybersecurityFrameworks: false,
    careerPaths: false,
    stayCurious: false,
  });

  const toggleDropdown = (section) => {
    setShowDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <Header />
      <MatrixRainCode />
      <div className="relative mt-8 container mx-auto group rounded-2xl overflow-hidden border-4 border-gray-500">
        <img className='-z-40 h-full w-full object-cover absolute top-0 left-0 right-0' src="photos/intro_bg.jpg" alt="Introduction Background" />
        <div className="bg-opacity-70 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold text-yellow-600 mb-8">Introduction to Cybersecurity</h1>

          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('definition')}>
              <h2 className="text-2xl font-bold text-green-500 mb-4">1. Definition</h2>
              {showDropdowns.definition ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.definition && (
              <p className="text-gray-300">
                Cybersecurity, also known as information security or computer security, involves the practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access.
              </p>
            )}
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('keyConcepts')}>
              <h2 className="text-2xl text-green-500  font-bold mb-4">2. Key Concepts</h2>
              {showDropdowns.keyConcepts ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.keyConcepts && (
              <ul className="list-disc ml-8 text-gray-300">
                <li>Confidentiality: Ensuring that only authorized individuals or systems have access to sensitive information.</li>
                <li>Integrity: Maintaining the accuracy and trustworthiness of data and systems.</li>
              </ul>
            )}
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('commonThreats')}>
              <h2 className="text-2xl text-green-500 font-bold mb-4">3. Common Threats:</h2>
              {showDropdowns.commonThreats ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.commonThreats && (
              <ul className="list-disc ml-8 text-gray-300">
              <li>Malware: Software designed to harm or exploit computer systems, including viruses, worms, trojans, and ransomware.</li>
              <li>Phishing: Deceptive attempts to obtain sensitive information by pretending to be a trustworthy entity.</li>
              <li>Social Engineering: Manipulating individuals to divulge confidential information or perform actions against their best interests.</li>
            </ul>
            )}
          </section>   


          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('cybersecurityMeasures')}>
              <h2 className="text-2xl text-green-500 font-bold mb-4">4. Cybersecurity Measures:</h2>
              {showDropdowns.cybersecurityMeasures ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.cybersecurityMeasures && (
              <ul className="list-disc ml-8 text-gray-300">
              <li>Firewalls: Network security devices that monitor and control incoming and outgoing traffic based on predetermined security rules.</li>
              <li>Antivirus Software: Programs designed to detect, prevent, and remove malicious software.</li>
              <li>Encryption: Protecting data by converting it into a code that can only be deciphered by authorized parties.</li>
            </ul>
            )}
          </section>


          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('cybersecurityFrameworks')}>
              <h2 className="text-2xl text-green-500 font-bold mb-4">5. Cybersecurity Frameworks:</h2>
              {showDropdowns.cybersecurityFrameworks ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.cybersecurityFrameworks && (
              <ul className="list-disc ml-8 text-gray-300">
              <li>NIST Cybersecurity Framework: Developed by the National Institute of Standards and Technology, providing a framework for organizations to manage and improve their cybersecurity risk management.</li>
              <li>ISO/IEC 27001: An international standard for information security management systems (ISMS) that provides a systematic approach to managing sensitive company information.</li>
            </ul>
            )}
          </section> 


          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('careerPaths')}>
              <h2 className="text-2xl text-green-500 font-bold mb-4">6. Career Paths:</h2>
              {showDropdowns.careerPaths ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.careerPaths && (
             <ul className="list-disc ml-8 text-gray-300">
             <li>Cybersecurity Analyst: Monitors and protects an organizations systems and networks from cyber threats.</li>
             <li>Ethical Hacker/Penetration Tester: Identifies and fixes vulnerabilities in systems through authorized simulated attacks.</li>
             <li>Security Consultant: Advises organizations on how to improve their IT security measures.</li>
           </ul>
            )}
          </section>    

          <section className="mb-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown('stayCurious')}>
              <h2 className="text-2xl font-bold mb-4 text-green-500">7. Stay Curious, Stay Secure!</h2>
              {showDropdowns.stayCurious ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              )}
            </div>
            {showDropdowns.stayCurious && (
              <p className="text-gray-300">
                Cybersecurity is a dynamic field that requires continuous learning. Stay curious, explore new technologies, and stay secure in the ever-evolving digital landscape!
              </p>
            )}
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

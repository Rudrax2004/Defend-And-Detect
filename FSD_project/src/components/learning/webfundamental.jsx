/* eslint-disable no-unused-vars */
// WebFundamentalsPage.jsx
import React from 'react';
import Footer from '../Footers/footer';
import Header from '../Headers/header';

const WebFundamentals = () => {
  return (
    <>
      <Header />
      <div className="relative mt-8 container mx-auto group rounded-2xl overflow-hidden border-4 border-gray-500">
        <img className='-z-40 h-full w-full object-cover absolute top-0 left-0 right-0' src="photos/intro_bg.jpg" alt="Introduction Background"/>
        <div className="bg-opacity-70 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8">Web Fundamentals</h1>

          <section className="mb-8">
<h2 className="text-2xl font-bold mb-4">About</h2>
<p className="text-gray-200">
  Welcome to the Web Application Security Path! This learning path is designed to teach you the essentials of attacking web applications. The path is divided into four sections, each focusing on different aspects of web security. Feel free to explore and check off the topics as you progress through your learning journey.
</p>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold mb-4">Section 1: How The Web Works</h2>
<p className="text-gray-200">
This section provides fundamental knowledge about the functioning of the web. It covers topics such as Domain Name System (DNS) in detail, an in-depth understanding of Hypertext Transfer Protocol (HTTP), insights into how websites work, and a comprehensive overview of putting these concepts together.          </p>

</section>

<section className="mb-8">
<h2 className="text-2xl font-bold mb-4">Section 2: Introduction to Web Hacking</h2>
<p className="text-gray-200">
  {`In this section, you will delve into the essentials of web hacking. Topics include navigating through an application, discovering content, enumerating subdomains, bypassing authentication, understanding Insecure Direct Object Reference (IDOR), dealing with File Inclusion, an introduction to Server-Side Request Forgery (SSRF), and exploiting common vulnerabilities like Cross-site Scripting (XSS) and SQL Injection.`}
</p>
<form>
  <ul className="list-disc ml-8 text-gray-700">
    {/* Include checkboxes for Section 2 topics */}
  </ul>
</form>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold mb-4">Section 3: Security Tools - Burp Suite</h2>
<p className="text-gray-200">
  {`This section focuses on one of the industry-standard tools, Burp Suite. You'll start with the basics and progress to using advanced features such as Repeater, Intruder, and other modules. Additionally, you'll explore extensions that enhance the functionality of Burp Suite.`}
</p>
<form>
  <ul className="list-disc ml-8 text-gray-700">
    {/* Include checkboxes for Section 3 topics */}
  </ul>
</form>
</section>

<section className="mb-8">
<h2 className="text-2xl font-bold mb-4">Section 4: Web Hacking Fundamentals</h2>
<p className="text-gray-200">
  {`Building upon the basics, this section reinforces your understanding of how websites work and HTTP. It revisits Burp Suite basics and explores the latest version of the OWASP Top 10 for 2021. Practical exercises with OWASP Juice Shop, understanding upload vulnerabilities, and navigating through challenges like "Pickle Rick" will solidify your web hacking fundamentals.`}
</p>
<form>
  <ul className="list-disc ml-8 text-gray-700">
    {/* Include checkboxes for Section 4 topics */}
  </ul>
</form>
</section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WebFundamentals;


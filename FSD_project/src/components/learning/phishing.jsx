/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const PhishingIntro = () => {
  return (
    <div className=" bg-slate-600 min-h-screen flex flex-col justify-center items-center p-8 rounded-md shadow-md max-w-6xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Understanding XSS Attacks and Defending Your Web Application</h1>

      <div className="text-gray-300 mb-8 text-lg font-semibold text-center">
        <p className="mb-4">
          Cross-Site Scripting is one of the most common attacks based on code injection. Although it's a well-known type of
          attack, not all developers are really aware of how it works. In this article, you'll learn what an XSS attack is
          and how to defend against it by inspecting an application that is vulnerable to an XSS attack and then updating
          the code to fix the vulnerability.
        </p>

        <p>
          Being aware of these types of vulnerabilities in your application and knowing how to prevent attacks is a must
          for any Web developer.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-green-600">What is XSS?</h2>

      <div className="text-gray-300 mb-8 text-lg font-semibold text-center">
        <p className="mb-4">
          A Cross-Site Scripting attack (also known as XSS attack) is a type of attack where code is injected into a
          legitimate and trusted website. The actors involved in an XSS attack are:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>The vulnerable website: a website with a vulnerability that allows code injection (XSS vulnerability).</li>
          <li>The victim: a user of the vulnerable website, the actual target of the attack.</li>
          <li>
            The attacker: a user who injects the malicious code, typically in JavaScript, into the vulnerable website.
          </li>
        </ul>
      </div>

      <div className="text-gray-300 mb-8 text-lg font-semibold text-center">
        <p>
          Basically, the attacker uses the vulnerable website as a means to deliver their malicious script to the actual
          victim: the user of the vulnerable website. In fact, the snippet of JavaScript code injected into the
          vulnerable website will run on the victims web browser.
        </p>
        <p>
          At first glance, this may seem not so critical. After all, JavaScript has no direct access to the user's
          system. However, JavaScript can access many sensitive data related to the website the user is browsing, like,
          for example, cookies, security tokens, and other similar data. Also, JavaScript can send data to arbitrary
          servers and manipulate the DOM of the current page.
        </p>
      </div>

      <button
        type="button"
        className="bg-gradient-to-r from-lime-500 to-green-600 text-white font-sans py-2 px-4 rounded-full inline-flex items-center hover:scale-110  hover:shadow-md hover:shadow-white focus:ring-2 focus:ring-green-500 mt-4"
        title="Open SQL Lab for a practical session"
        onClick={() => (window.location.href = "/phishing")}
      >
        <AiOutlineSearch className="mr-2" />
        Start Phishing Lab
      </button>
    </div>
  );
};

export default PhishingIntro;

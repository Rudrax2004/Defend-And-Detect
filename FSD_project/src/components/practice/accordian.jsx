/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TECollapse } from 'tw-elements-react';

const AccordionBasicExample = () => {
  const [activeElements, setActiveElements] = useState([]);

  const handleClick = (value) => {
    const index = activeElements.indexOf(value);
    if (index !== -1) {
      // If the value is already in the array, remove it
      setActiveElements(activeElements.filter((el) => el !== value));
    } else {
      // If the value is not in the array, add it
      setActiveElements([...activeElements, value]);
    }
  };

  const accordionItemStyle = (element) => {
    return `${
      activeElements.includes(element)
        ? 'bg-primary text-white'
        : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white'
    } group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring focus:border-primary focus:bg-primary`;
  };

  const rotateIconStyle = (element) => {
    return `${
      activeElements.includes(element) ? 'rotate-[-180deg]' : 'rotate-0'
    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300`;
  };

  return (
    <>
      <div id="accordionExample">
        <div className="rounded-t-lg border border-neutral-200 dark:border-neutral-600">
          <h2 className="mb-0" id="headingOne">
            <button
              className={accordionItemStyle('element1')}
              type="button"
              onClick={() => handleClick('element1')}
              aria-expanded="true"
              aria-controls="collapseOne"
            >What is SQL Injection?
              <span className={rotateIconStyle('element1')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElements.includes('element1')}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>This is the first item's accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div>
    
    </>
  );
};

export default AccordionBasicExample;

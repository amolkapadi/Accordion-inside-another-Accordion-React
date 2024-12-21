import React, { useState } from 'react';
import upImg from './img/up-arrow.png';
import downImg from './img/down-arrow.png';
import './App.css';

export default function App() {
  const fruits = [
    {
      name: 'Apple',
      description: 'Apples are nutritious. Apples may be good for weight loss and your heart.',
    },
    {
      name: 'Banana',
      description: 'Bananas are one of the world’s most popular fruits. They contain essential nutrients.',
      subItems: [
        {
          name: 'Ripe Banana',
          description: 'Ripe bananas are yellow and sweet, perfect for eating as is.',
        },
        {
          name: 'Green Banana',
          description: 'Green bananas are less sweet and more starchy, often used in cooking.',
        },
      ],
    },
    {
      name: 'Cherry',
      description: 'Cherries are small stone fruits that come in a variety of colors and flavors.',
      subItems: [
        {
          name: 'Ripe Cherry',
          description: 'Ripe Cherry are yellow and sweet, perfect for eating as is.',
        },
        {
          name: 'Green Cherry',
          description: 'Green Cherry are less sweet and more starchy, often used in cooking.',
        },
      ],
    },
    {
      name: 'Date',
      description: 'Dates are the fruit of the date palm tree, which is grown in many tropical regions.',
    },
    {
      name: 'Elderberry',
      description: 'Elderberries are packed with antioxidants and vitamins that may boost your immune system.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSubIndex(null); // Reset sub-accordion when a new accordion is opened
  };

  const toggleSubAccordian = (index) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className='heading'>Collapseable Accordion inside another Accordion</h1>
      <div className='accordion'>
        {fruits.map((fruit, index) => (
          <div className='accordian-item' key={index}>
            <div className='accordian-header' onClick={() => toggleAccordian(index)}>
              <h2 className='fruit-name'>{fruit.name}</h2>
              <img
                src={activeIndex === index ? upImg : downImg}
                alt='arrow'
                className='arrow-img'
              />
            </div>
            {activeIndex === index && (
              <div className='accordian-content'>
                <p>{fruit.description}</p>
                {fruit.subItems && fruit.subItems.length > 0 && (
                  <div className='sub-accordion'>
                    {fruit.subItems.map((subItem, subIndex) => (
                      <div className='sub-accordion-item' key={subIndex}>
                        <div className='sub-accordion-header' onClick={() => toggleSubAccordian(subIndex)}>
                          <h3 className='sub-fruit-name'>{subItem.name}</h3>
                          <img
                            src={activeSubIndex === subIndex ? upImg : downImg}
                            alt='arrow'
                            className='arrow-img'
                          />
                        </div>
                        {activeSubIndex === subIndex && (
                          <div className='sub-accordion-content'>{subItem.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

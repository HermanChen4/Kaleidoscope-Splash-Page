import React from 'react';
import rob from '../assets/rob.jpeg';
import tommy from '../assets/tommy.jpg';
import chris from '../assets/chris.jpg';
import herman from '../assets/herman.jpg';
import ll from '../assets/ll.png';
import gh from '../assets/gh2.png';

const people = [
  {
    name: 'Robert Mayo',
    role: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/robertcmayo/',
    gitHubURL: 'https://github.com/rbrtm984',
    imageUrl: rob,
  },
  {
    name: 'Thomas Hales III',
    role: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/thomas-hales-35ab311a3/',
    gitHubURL: 'https://github.com/thalesIII',
    imageUrl: tommy,
  },
  {
    name: 'Herman Chen',
    role: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/herman-chen-839339240/',
    gitHubURL: 'https://github.com/HermanChen4',
    imageUrl: herman,
  },
  {
    name: 'Christopher Jettoo',
    role: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/christopher-j-1a240b169/',
    gitHubURL: 'https://github.com/Christopher-Jettoo',
    imageUrl: chris,
  },
];

export default function Example() {
  return (
    <div className="center bg-white py-16 sm:py-24 px-16">
      <div className="mx-auto max-w-7xl gap-y-20 px-6 lg:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Meet the Developer Team</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600"></p>
      </div>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-4 gap-y-12 mt-8">
        {people.map((person) => (
          <li key={person.name} className="text-center">
            <img className="h-40 w-40 object-cover rounded-full mx-auto" src={person.imageUrl} alt="loading" />
            <div className="flex flex-col items-center mt-3">
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              <div className="flex items-center gap-5 mt-2">
                <a href={person.linkedInURL}>
                  <img className="h-8 w-8" src={ll} alt="LinkedIn" />
                </a>
                <a href={person.gitHubURL}>
                  <img className="h-7 w-7" src={gh} alt="GitHub" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

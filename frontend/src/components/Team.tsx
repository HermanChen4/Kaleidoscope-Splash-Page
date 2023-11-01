import React, { Fragment } from 'react';
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
      imageUrl:
        rob,
    },
    {
        name: 'Thomas Hales III',
        role: 'Software Engineer',
        linkedInURL: 'https://www.linkedin.com/in/thomas-hales-35ab311a3/',
        gitHubURL: 'https://github.com/thalesIII',
        imageUrl:
            tommy,
      },
      {
        name: 'Herman Chen',
        role: 'Software Engineer',
        linkedInURL: 'https://www.linkedin.com/in/herman-chen-839339240/',
        gitHubURL: 'https://github.com/HermanChen4',
        imageUrl:
            herman,
      },
      {
        name: 'Christopher Jettoo',
        role: 'Software Engineer',
        linkedInURL: 'https://www.linkedin.com/in/christopher-j-1a240b169/',
        gitHubURL: 'https://github.com/Christopher-Jettoo',
        imageUrl:
            chris,
      },
  ]
  
  export default function Example() {
    return (
      <div className=" center bg-white py-24 sm:py-32">
        <div className="mx-auto flex flex-col items-center justify-center max-w-7xl gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Developer Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            </p>
          </div>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
              <img className="h-36 w-36 object-cover rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <div className='flex items-center gap-5'>
                    <a href= {person.linkedInURL}>
                  <img className='h-8 w-8' src={ll} />
                  </a>
                  <a href={person.gitHubURL}>
                  <img className='h-7 w-7'src={gh} />
                  </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
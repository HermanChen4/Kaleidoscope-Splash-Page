import React from 'react';
import '../styles/tailwind.css';
import { TypeAnimation } from 'react-type-animation';
import Typed from './Typed';

const Topsection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="p-20 flex items-center">
          <div className="radiating-text">
            <p className="flex items-center justify-center text-indigo-700 header1 pulse-text font-extrabold">
              Open Source Distributed
            </p>
            <p className="flex items-center justify-center text-indigo-700 header1 pulse-text font-extrabold">
              Trace Visualizer
            </p>
            <div>
              <p className="text-indigo-700 subheader1">
                Quickly track data flow, identify bottlenecks, and annotate dependency graphs for easier debugging
              </p>
            </div>
          </div>
        </div>
        <div>
        <a href="https://github.com/oslabs-beta/spiritsnail" target="_blank" rel="noopener noreferrer">
          <button type="button" className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get Started Here
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topsection;

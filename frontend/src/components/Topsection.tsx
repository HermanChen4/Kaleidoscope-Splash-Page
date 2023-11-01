import React from 'react';
import '../styles/tailwind.css';
import { TypeAnimation } from 'react-type-animation';
import Typed from './Typed'

const Topsection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="p-20 flex items-center">
        <div className="radiating-text">
            <p className="text-indigo-700 header1 pulse-text font-extrabold">
            open source distributed 
            </p>
            <p className="text-indigo-700 header1 pulse-text font-extrabold">
            trace visualizer
            </p>
            <div>
                <Typed />
            </div>
        </div>
      </div>
    
    </div>
  );
};

export default Topsection;

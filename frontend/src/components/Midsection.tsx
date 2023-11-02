import React from 'react';
import CodeSnippet from '../assets/codesnippet.png';
import Annotations from  '../assets/Annotations.gif';
import NodeMovement from  '../assets/NodeMovement.gif';
import RightClick from  '../assets/RightClick.gif';

const Midsection = () => {
  return (
    <div className="flex flex-wrap p-6 rounded-lg shadow-sm">

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center items-center h-full">
          <div className="text-right">
            <h4 className="text-4xl font-bold text-white">View Trace Data</h4>
            <br/>
            <p className="text-2xl mt-2  text-white" >
              Kaleidoscope creates Node Graphs to visualize instrumented data.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src={NodeMovement} alt="loading..." className="h-auto max-w-xl m-4 p-2 border-2 rounded-lg shadow-md" />
      </div>
      
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center items-center h-full">
          <img src={Annotations} alt="loading..." className="h-auto max-w-xl m-4 p-2 border-2 rounded-lg shadow-md" />
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="flex justify-center items-center h-full">
          <div className="text-left">
            <h4 className="text-4xl font-bold text-white ">Annotations</h4>
            <br/>
            <p className="text-2xl mt-2 text-white">
              Generate notes for addressing these crucial problems at a later time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center items-center h-full">
          <div className="text-right">
            <h4 className="text-4xl font-bold text-white">Need more Data?</h4>
            <br/>
            <p className="text-2xl mt-2  text-white" >
              Examine the complete range of data for a more in-depth troubleshooting process.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src={RightClick} alt="loading..." className="h-auto max-w-xl m-4 p-2 border-2 rounded-lg shadow-md" />
      </div>
      
      

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center items-center h-full">
          <img src={CodeSnippet} alt="loading..." className="h-auto max-w-xl m-4 p-2 border-2 rounded-lg shadow-md" />
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="flex justify-center items-center h-full">
          <div className="text-left">
            <h4 className="text-4xl font-bold text-white ">OpenTelemetry Instrumentation</h4>
            <br/>
            <p className="text-2xl mt-2 text-white">
              Configure your code to emit trace data which will be received by the Kaleidoscope backend.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Midsection;

import React from 'react';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Footer from './components/Footer'
import Midsection from './components/Midsection';
import Topsection from './components/Topsection';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-around' id='topSection'> 
        <Topsection />
      </div>
    <div id='midSection'>
     <Midsection/>
    </div>
      <div id='teamSection'> 
      <Team />
      </div>
      <div id='footer'> 
      <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-400 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kaleidoscope</p>
      </div>
    </footer>
  );
};

export default Footer;

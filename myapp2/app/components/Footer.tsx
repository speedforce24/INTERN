// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Logo from "../../public/img/logo2.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 pb-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className='flex'>
        <p className='pr-6'>
              <a href="">Teach</a>
            </p>
            <p className=''>
              <a href="">Buy Learning Tablet</a>
            </p>
            <p>
              <a href="">Donate Devices</a>
            </p>
          <p>© 2024 Teesas Inc.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

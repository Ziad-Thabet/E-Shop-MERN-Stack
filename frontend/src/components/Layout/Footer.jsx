import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { footercompanyLinks } from '../../static/data';

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <br />
          <div className="flex items-center mt-[15px]">
            <a href="https://www.facebook.com/ziad.thabet.14/" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>
            <a href="https://twitter.com/ZiadThabet10" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter
                size={25}
                style={{ marginLeft: '15px', cursor: 'pointer' }}
              />
            </a>
            <a href="https://www.instagram.com/ziad_thabet1/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram
                size={25}
                style={{ marginLeft: '15px', cursor: 'pointer' }}
              />
            </a>
            <a href="https://github.com/Ziad-Thabet" target="_blank" rel="noopener noreferrer">
              <AiFillGithub
                size={25}
                style={{ marginLeft: '15px', cursor: 'pointer' }}
              />
            </a>
          </div>

        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      ></div>
    </div>
  );
};

export default Footer;

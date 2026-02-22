"use client";
import React from "react";
import Image from "next/image";
import { FaDiscord, FaDonate } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FcDonate } from "react-icons/fc";
interface LandingProps {
  title: React.ReactNode; 
  description?: string;
  properties?: React.ReactNode;
}


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 w-full h-16 bg-gray-950 backdrop-blur flex items-center px-5 z-50 orbitron-600 text-gray-500">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <a href="/">
            <div className="flex items-center">
              <Image
                src="/images/headerlogo.png"
                alt="Mayhem Industries Logo"
                width={100}
                height={100}
                className="inline-block h-10 w-10 mr-2"
              />
            </div>
          </a>
        </div>
        {/* Center: Navigation (centered absolutely) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav>
            <ul className="flex list-none m-0 p-0 items-center space-x-10">
              <li>
                <a href="/rules" className="text-white hover:text-gray-300">
                  Rules
                </a>
              </li>
              <li>
                <a href="https://forums.mayhem-gaming.com/" className="text-white hover:text-gray-300">
                  Forums
                </a>
              </li>
              <li>
                <a href="/mayhemverse" className="text-white hover:text-gray-300">
                  Mayhemverse
                </a>
              </li>
              <li>
                <a href="/servers" className="text-white hover:text-gray-300">
                  Servers
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right: Discord & Mobile Menu Toggle */}
        <div className="flex-1 flex justify-end items-center ">
          <a
            href="https://store.mayhem-gaming.com"
            className="hidden lg:flex text-white bg-blue-600 hover:bg-sky-500 px-4 py-2 rounded-md items-center mr-4 transition-all duration-200 transform hover:scale-105 relative overflow-hidden group"
            style={{ boxShadow: "0 2px 8px 0 rgba(255,193,7,0.15)" }}
          >
            <span className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:animate-shine" />
            <FcDonate className="relative z-10" /> &nbsp; <span className="relative z-10">Store</span>
          </a>
          <a
            href="https://discord.gg/mayhemindustries"
            className="hidden lg:flex text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md items-center mr-4"
          >
            <FaDiscord /> &nbsp; Discord
          </a>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <style jsx global>{`
            @keyframes shine {
              0% {
                left: -75%;
              }
              100% {
                left: 125%;
              }
            }
            .group:hover .group-hover\\:before\\:opacity-100:before {
              opacity: 1 !important;
            }
            .group .before\\:animate-shine:before {
              content: '';
              position: absolute;
              top: 0;
              left: -75%;
              width: 50%;
              height: 100%;
              background: linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
              opacity: 0;
              transition: opacity 0.2s;
              animation: shine 1s forwards;
            }
            .group:hover .before\\:animate-shine:before {
              opacity: 1;
              animation: shine 0.8s;
            }
          `}</style>
        </div>
      </div>

      {/* Mobile Menu with smooth dropdown animation */}
      <div
        className={`orbitron-600 fixed top-16 left-0 w-full bg-gray-950/50 rounded-b-2xl backdrop-blur lg:hidden z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{
          // fallback for browsers not supporting max-h-[500px]
          transitionProperty: 'max-height, opacity',
        }}
      >
        <nav>
          <ul className="flex flex-col list-none m-0 p-5 space-y-4">
            <li>
              <a href="/rules" className="text-white hover:text-gray-300">
                Rules
              </a>
            </li>
            <li>
              <a href="https://forums.mayhem-gaming.com/" className="text-white hover:text-gray-300">
                Fourms
              </a>
            </li>
            <li>
              <a href="/mayhemverse" className="text-white hover:text-gray-300">
                Mayhemverse
              </a>
            </li>
            <li>
              <a href="/servers" className="text-white hover:text-gray-300">
                Servers
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-5 pb-4">
          <a
            href="https://store.mayhem-gaming.com/"
            className="w-full text-white bg-blue-600 hover:bg-sky-400 px-4 py-2 rounded-md flex items-center transition-all duration-200 transform hover:scale-105 relative overflow-hidden group"
            style={{ boxShadow: "0 2px 8px 0 rgba(255,193,7,0.15)" }}
          >
            <span className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:animate-shine" />
            <FcDonate className="relative z-10" /> &nbsp; <span className="relative z-10">Store</span>
          </a>
        </div>
        <div className="px-5 pb-4">
          <a
            href="https://discord.gg/mayhemindustries"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center"
          >
            <FaDiscord /> &nbsp; Discord
          </a>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <div className="w-full h-96 bg-slate-950 flex flex-col items-center justify-center px-5 z-50">
      <a href='/'>
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/images/headerlogo.png"
            alt="Mayhem Industries Logo"
            width={100}
            height={100}
            className="inline-block"
          />
        </div>
      </a>
      <nav>
        <ul className="flex list-none m-0 p-0 items-center space-x-2 lg:space-x-10">
          <li>
            <a href="/rules" className="text-white hover:text-gray-300">Game Rules</a>
          </li>
          <li>
            <a href="https://forums.mayhem-gaming.com/forumdisplay.php?fid=13" className="text-white hover:text-gray-300">Appeals</a>
          </li>
          <li>
            <a href="/mayhemverse" className="text-white hover:text-gray-300">Mayhemverse</a>
          </li>
          <li>
            <a href="/servers" className="text-white hover:text-gray-300">Servers</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Discord</a>
          </li>
          <li>
            <a href="https://bans.mayhem-gaming.com" className="text-white hover:text-gray-300">Ban Lookup</a>
          </li>
        </ul>
      </nav>
      <p className="mt-4">&copy; 2025 Mayhem Industries. All rights reserved.</p>
    </div>
  );
};

export function MainPageLander({title, description, properties}: LandingProps ) {
  return (
    <div className="relative z-10 flex h-full flex-1 items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl xl:text-8xl lg:text-6xl md:text-4xl font-bold tracking-tight text-white">
          <span className="lexend-mega-landing bg-radial from-blue-300 to-purple-950 bg-clip-text text-transparent">{title}</span>
        </h1>
        <p className="lexend-mega-landing mx-auto mb-8 text-2xl text-white">
          {description}
        </p>
        <div className="inline-flex border border-slate-200 rounded-none overflow-hidden">
          <a
            href="/servers"
            className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-16 lg:py-4 border-r border-slate-200 tracking-wide group focus:outline-none"
          >
            <span className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-slate-200 border-l-[20px] border-l-transparent  transition-all duration-200 -rotate-90"></span>
            <span className="relative z-10 flex items-center gap-2">
              <IoGameController /> JOIN NOW
            </span>
          </a>
          <a
            href="https://discord.gg/mayhemindustries"
            className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 tracking-wide group focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-slate-200 border-r-[20px] border-r-transparent transition-all duration-200 rotate-270"></span>
            <span className="relative z-10 flex items-center gap-2">
              <FaDiscord /> DISCORD
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export function SubPageLander({title, description, properties}: LandingProps ) {
  return (
    <div className={`relative z-10 flex h-85 flex-1 items-center justify-center px-4 ${properties}`}>
      <div className="text-center">
        <h1 className="text-4xl xl:text-7xl lg:text-6xl md:text-4xl font-bold tracking-tight text-white">
          <span className="lexend-mega-landing ">{title}</span>
        </h1>
        <p className="lexend-mega-landing mx-auto mb-8 text-2xl text-white">
          {description}
        </p>
        
      </div>
    </div>
  );
};

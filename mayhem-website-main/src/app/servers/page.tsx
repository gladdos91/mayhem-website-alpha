"use client";
import Image from "next/image";

import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded, ImageTextCard} from "../components/cards";
import {Editable} from "../components/editable";
import {SubPageLander} from "../components/navigation";
import { FaSteam } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

export default function Servers() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="fadeInSlowly [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_50%_500px,#17006180,transparent)]">
            
            </div>
          </div>
        </div>

        <SubPageLander
        title="SERVERS"
        description="View all of our servers and join the game."
        
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-3 mr-3 lg:ml-12 lg:mr-12 xl:ml-36 xl:mr-36">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
            
            <BgImageTextCardShaded
                image="/images/gamebanners/spaceengineers.jpg"
                alt="space engineers"
                title={<span className="text-2xl lg:text-6xl text-center font-semibold text-white">Space Engineers</span>}
                description={<div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
                  <ColoredTextCard
                    title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Creative Servers</span>}
                    properties={"bg-blue-700"}
                    description={<div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 relative z-10 mt-8">
                      <BgImageTextCardShaded
                        title={
                          <span className="text-3xl lg:text-5xl text-center font-semibold text-white flex items-center justify-center gap-2">
                            Creative+ PVP <FaSteam />
                          </span>
                        }
                        alt={"Creative+ PVP"}
                        image="/images/gamebanners/steam creative.png"
                        description={<>
                        <p className="text-2xl text-center font-bold text-blue-200"><a href="steam://connect/45.47.129.150:21099">45.47.129.150:21099</a></p>
                        <p className="text-center text-lg font-bold">Our longtime-running creative server, running for over 5 years! A perfect place to build your ship or station, and battle amongst others!</p>
                      </>
                      }
                      />

                      
                      <BgImageTextCardShaded
                        title={
                          <span className="text-3xl lg:text-5xl text-center font-semibold text-white flex items-center justify-center gap-2">
                            EOS Creative <FaSteam /> <FaXbox /> <FaPlaystation />
                          </span>
                        }
                        alt={"EOS creative"}
                        image="/images/gamebanners/eos creative.png"
                        description={<>
                        <p className="text-2xl text-center font-bold text-blue-200"><a href="eos://002ed1b5dc74f2a9a9e84d31f8a73a4">Search "Mayhem Creative" and join!</a></p>
                        <p className="text-center text-lg font-bold">Our most popular crossplay creative server! Build, battle, and play in this 100% vanilla creative server!</p>
                        <p className="text-center text-lg">
                          To join, press the <span className="inline-flex align-middle text-2xl"><SiEpicgames /></span> icon, then search "Mayhem Creative" to join!
                        </p>
                      </>
                      }
                      />

                      


                    </div>}
                  ></ColoredTextCard>
                  <ColoredTextCard
                    title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Survival Servers</span>}
                    properties={"bg-sky-500"}
                    description={<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10 mt-8">
                      <BgImageTextCardShaded
                        title={
                          <span className="text-2xl lg:text-2xl text-center font-semibold text-white flex items-center justify-center gap-2">
                            Scrapyard Survival <FaSteam />
                          </span>
                        }
                        alt={"Scrapyard Survival"}
                        image="/images/gamebanners/scrapyard.png"
                        description={<>
                        <p className="text-2xl text-center font-bold text-blue-200"><a href="steam://connect/45.47.129.150:27155">45.47.129.150:27155</a></p>
                        <p className="text-center text-lg font-bold">Are you ready for a challenge, engineer? Scrapyard Survival is a survival-based PvE server, that focuses on a unique salvage-focused survival experience!</p>
                      </>
                      }
                      />

                      <BgImageTextCardShaded
                        title={
                          <span className="text-xl lg:text-[20px] mb-[.8em] text-center font-semibold text-white flex items-center justify-center gap-2">
                            Vanilla Survival - No limits <FaSteam /> <FaXbox /> <FaPlaystation />
                          </span>
                        }
                        alt="Space Engineers Vanilla Survival"
                        image="/images/gamebanners/se1.webp"
                        description={<>
                        <p className="text-2xl text-center font-bold text-blue-200"><a href="eos://00020456e12345fa8f9e201276d611af">Search "Vanilla Survival" and join!</a></p>
                        <p className="text-center text-lg font-bold">Our most popular crossplay survival server! Start out small, build, and become the most powerful faction in this 100% Vanilla experience!</p>
                        <p className="text-center text-lg">
                          To join, press the <span className="inline-flex align-middle text-2xl"><SiEpicgames /></span> icon, then search "Vanilla Survival" to join!
                        </p>
                      </>
                      }
                      />

                      

                      </div>
                    }
                    ></ColoredTextCard>
                        


                </div>





              }
            ></BgImageTextCardShaded>
            {/*<BgImageTextCardShaded
                image="/images/gamebanners/rust.jpg"
                alt="rust"
                title={<span className="text-2xl lg:text-6xl text-center font-semibold text-white">Rust</span>}
                description={<div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
                  <ColoredTextCard
                    title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">Mayhem Industries | Offline Protect | Quad Max | Better Loot</span>}
                    properties={"bg-amber-800"}
                    description={<>
                    <p className="text-2xl text-center font-bold text-blue-200">Press f1 then enter the command below.<br/>client.connect 45.47.129.150:28020</p>
                    <p className="text-center text-lg font-bold">Join our Rust server!</p>
                    
                    
                    </>}
                    ></ColoredTextCard>
                  
                  </div>}
            ></BgImageTextCardShaded>*/}
        </div>
      </main>

      {/* Starfield and CometField components */}
      <style jsx global>{`
        .star {
          pointer-events: none;
          position: absolute;
          border-radius: 9999px;
          background: white;
          opacity: 0.7;
          animation: star-twinkle 2s infinite alternate;
        }
        @keyframes star-twinkle {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}




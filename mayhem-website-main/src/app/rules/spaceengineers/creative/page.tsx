"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../../../components/cards";
import {Editable} from "../../../components/editable";
import {MainPageLander, SubPageLander} from "../../../components/navigation";
import { ButtonCard, InlineOrderedHeading, SubtitleTextCard, TitleTextCard } from "../../../components/cardsv2/textCards";
import { StrikeTable } from "../../../components/cardsv2/etc";

export default function RulesSpaceeEngineersCreative() {
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
        title={<><span className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent">SPACE ENGINEERS RULES</span></>}
        description="By connecting to our servers, you agree to all the rules and terms on this page."
        properties="bg-gray-950"
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-8xl mx-auto">
            <TitleTextCard 
              header={<><span className="orbitron-900">🚀 Creative Servers Rules</span></>}
              description="Steam Creative & EOS Creative - NO Limits!"
              descriptionProperties="text-gray-400 text-center"
              headerProperies="mb-8 text-center bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent "
            />
            <TitleTextCard
              header={"Welcome to Mayhem Creative with NO limits!"}
              description={ <>
              <span className="montserrat-600">We have few rules to ensure a smooth and enjoyable playing experience for everyone.</span>
              </>
              }
              headerProperies={"mt-4 mb-4 p-8 text-center text-purple-500 orbitron-900 border-2 border-blue-500 hover:scale-103 hover:border-purple-500 bg-blue-500/10"}
              descriptionProperties={"text-gray-400 text-center"}
            />
            <TitleTextCard 
              header={<span className="orbitron-900">Server Rules</span>}
              description=""
              descriptionProperties=""
              headerProperies="mt-8 text-center bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent "
            />
          </div>
        </div>

        <div>
        <InlineOrderedHeading
          header={"No Copying or Blueprinting Without Permission"}
          number="1"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Copying and blueprinting other people's grids without permission is strictly prohibited. If violated, then a ban will take place.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />




        <InlineOrderedHeading
          header={"No Laggy Creations"}
          number="2"
        />

        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">You will be warned. If warned 3 times you will be kicked. If continued a ban will take place.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={"Be Respectful"}
          number="3"
        />

        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Be respectful of all regardless of race, religion, sex, etc. Bullying in general shall result in a kick or ban.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={`No Safe Zone Abuse`}
          number="4"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Do not abuse safe zones. We do have two 3km safe zones in the server.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />

        <InlineOrderedHeading
          header={`No Suiting Grids`}
          number="5"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Using a character as a weapon by grinding or placing blocks on enemy grids is not allowed.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={`No "God Mode" Creations`}
          number="6"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Invulnerable or exploit-based combat grids are prohibited.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />
        



        <InlineOrderedHeading
          header={`No Intentional Server Crashing`}
          number="7"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Crashing the server intentionally will lead to an immediate ban.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={`No Asking for Personal Information`}
          number="8"
        />
        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Please no asking of personal information from other players.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={`Spawn Outside Turret Range`}
          number="9"
        />

        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Please make sure and try to spawn your grids outside of turret range of enemy grids.
            </p>
          </>
          } 
          properties="mb-16 mt-4"
          descriptionProperties=""
        />


        <InlineOrderedHeading
          header={`No Spawning Missiles or Torpedoes`}
          number="10"
        />

        <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-xl montserrat-400">Must be launched from a ship. No hand-spawning combat drones.
            </p>
          </>
          } 
          properties="mb-16 mb-4"
          descriptionProperties=""
        />

          <TitleTextCard
          header={<span className="text-xl md:text-2xl text-blue-500">📋 Quick Commands</span>}
          description={
          <>
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">!rules</span> - View detailed rules in-game <br /><br /></p>
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">!discord</span> - View detailed rules in-game <br /></p>
            
          </>

          } 
          headerProperies="mt-4 mb-4 p-6 border-3 w-full border-blue-500 bg-blue-500/10"
          descriptionProperties=""
          />

          <TitleTextCard
          header={<span className="text-xl md:text-2xl text-red-500">⚠️ Important Notes</span>}
          description={
          <>
          
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">Safe Zones:</span> - We have two 3km safe zones available for building. Use them responsibly. <br /><br /></p>
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">Full Rulebook:</span> - For comprehensive Space Engineers rules including enforcement policies, see the <a href="/rules/spaceengineers" className="text-blue-500">General Rules page</a>. <br /></p>
          </>

          } 
          headerProperies="mt-4 mb-4 p-6 border-3 w-full border-red-500 bg-red-500/10"
          descriptionProperties=""
          />
        </div>

      </main>
    </div>
  );
}




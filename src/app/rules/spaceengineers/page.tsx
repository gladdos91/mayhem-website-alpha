"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../../components/cards";
import {Editable} from "../../components/editable";
import {MainPageLander, SubPageLander} from "../../components/navigation";
import { ButtonCard, InlineOrderedHeading, SubtitleTextCard, TitleTextCard } from "../../components/cardsv2/textCards";
import { StrikeTable } from "../../components/cardsv2/etc";

export default function RulesSpaceeEngineers() {
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
              header={"🚀 Choose Your Server Type"}
              description={ <>
              <span className="montserrat-600">Select the specific server type below for detailed rules, or continue reading for general rules that apply to all Space Engineers servers.</span>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-4 md:gap-2 sm:gap-1 mx-auto max-w-6xl text-white">
                
                <ButtonCard
                  header={"Creative Servers"}
                  description={"Steam & EOS"}
                  href="/rules/spaceengineers/creative"
                  properties={"text-center bg-purple-500 orbitron-900 hover:scale-105 hover:bg-gradient-to-tr from-purple-600 to-rose-300"}
                />
                <ButtonCard
                  header={"Scrapyard Plus"}
                  description={"Steam Survival"}
                  href="/rules/spaceengineers/scrapyard"
                  properties={"text-center bg-purple-500 orbitingron-900 hover:scale-105 hover:bg-gradient-to-tr from-pure-600 to-rose-300"}
                />
                <ButtonCard
                  header={"Vanilla Survival"}
                  description={"Steam Survival"}
                  href="/rules/spaceengineers/vanillasurvival"
                  properties={"text-center bg-purple-500 orbitingron-900 hover:scale-105 hover:bg-gradient-to-tr from-pure-600 to-rose-300"}
                />


                <ButtonCard
                  header={"Mayhemverse"}
                  description={"Steam Survival"}
                  href="/rules/spaceengineers/mayhemverse"
                  properties={"text-center bg-purple-500 orbitron-900 hover:scale-105 hover:bg-gradient-to-tr from-purple-600 to-rose-300"}
                />
                <ButtonCard
                  header={"Terra-Mayhem SE"}
                  description={"Steam Survival"}
                  href="/rules/spaceengineers/terramayhemse"
                  properties={"text-center bg-purple-500 orbitingron-900 hover:scale-105 hover:bg-gradient-to-tr from-pure-600 to-rose-300"}
                />
                <ButtonCard
                  header={"EOS Survival"}
                  description={"EOS"}
                  href="/rules/spaceengineers/eossurvival"
                  properties={"text-center bg-purple-500 orbitingron-900 hover:scale-105 hover:bg-gradient-to-tr from-pure-600 to-rose-300"}
                />
              </div></>
        }
              headerProperies={"mt-4 mb-4 p-8 text-center text-purple-500 orbitron-900 border-2 border-blue-500 hover:scale-103 hover:border-purple-500"}
              descriptionProperties={"text-gray-400 text-center"}
            >
            </TitleTextCard>
          </div>
        </div>

        <TitleTextCard
        header="Table of Contents"
        description={<>
        <ol className="montserrat-600 text-gray-400 transition-transform duration-300 ease-in-out">
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">1.&nbsp;&nbsp;</span> Enforcement and Strike System</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">2.&nbsp;&nbsp;</span> Logging and Security</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">3.&nbsp;&nbsp;</span> Server Limits</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">4.&nbsp;&nbsp;</span> Core Server Rules</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">5.&nbsp;&nbsp;</span> EOS-Specific Rules</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">6.&nbsp;&nbsp;</span> No Loopholes</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">7.&nbsp;&nbsp;</span> Appeals Process</li>
          <li className="hover:text-purple-600 mt-3"><span className="text-purple-600">8.&nbsp;&nbsp;</span> Service Terms and Legal Notices</li>
        </ol>
        </>}
        headerProperies={"mt-4 mb-4 p-8 text-left text-purple-500 orbitron-900 border-2 border-blue-500 hover:border-purple-500"}
        descriptionProperties=""
        />

        <div >
        <InlineOrderedHeading
          header={"Enforcement and Strike System"}
          number="1"
          properties={""}
        />

        <div className="mt-8 montserrat-600 text-blue-500 text-xl">
          <p>1.1 Strike Levels</p>
          <p className="mt-5 text-gray-400 text-sm montserrat-400">Mayhem operates under a progressive strike system.</p>
          <div className="mt-5 "></div>
            <StrikeTable />
          
          </div>

          <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600">Important: </span>
            Offense 1-3 will reset after 90 days. If a rule is broken within the 90 days we will proceed to offense 5. Offense 5 and Offense 6 bans apply across all Mayhem servers case by case. Offense 1 through Offense 4 warnings are server-specific. </p>
          </>

          } 
          properties="mt-4 mb-4 p-6 border-3 w-full border-blue-500 bg-blue-500/10"
          descriptionProperties=""
          />

          <SubtitleTextCard
          description={
          <>
          
            <p className="text-gray-400 text-sm montserrat-400"><span className="text-bold montserrat-600 text-shadow-yellow-500">Example of how bans work: </span><br/><br/>
            <span className="montserrat-600">Scenario 1:</span> John was playing Space Engineers steam creative and got banned on SE Steam Creative. This will account for both EOS and Steam Creative but not Survival, Minecraft, Hytale, etc.<br /> <br />

            <span className="montserrat-600">Scenario 2:</span> John is playing once again Steam creative and decided that he is going to steal a grid and be a jerk about it. John is now banned from all servers Mayhem owns. Not for stealing the grid, but for being a jerk. If he had just accepted the ban, he would still have access to the servers like survival, minecraft, etc.
            
            
            </p>
          </>

          } 
          properties="mt-4 mb-4 p-6 border-3 w-full border-yellow-500 bg-yellow-500/10"
          descriptionProperties=""
          />
        </div>

      </main>
    </div>
  );
}




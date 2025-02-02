import React, { useContext, useState } from "react";
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import { useUser, SignIn, SignOutButton } from "@clerk/clerk-react";
import geminiLogo from "../assets/geminiLogo.png";

const MainContent = ({ proceedWithoutSignIn }) => {
  const { isSignedIn, user } = useUser();
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context) || {};

  const [showAuthOptions, setShowAuthOptions] = useState(false);

  const handleCardClick = (text) => {
    setInput(text);
    onSent(text);
  };

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      {/* Header */}
      <div className="font-bold flex items-center justify-between text-[23px] p-5 text-slate-800 dark:text-slate-200">
        <p>NeuraMind</p>
        <div className="relative">
          <FaUserCircle
            className="text-3xl cursor-pointer"
            onClick={() => setShowAuthOptions(!showAuthOptions)}
          />
          {showAuthOptions && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-200 dark:bg-gray-300 dark:text-black shadow-md rounded-lg overflow-hidden">
              {isSignedIn ? (
                <SignOutButton>
                  <button className="text-center w-full px-4 py-1 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-600">
                    Sign Out
                  </button>
                </SignOutButton>
              ) : !proceedWithoutSignIn ? (
                <SignIn>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Sign In
                  </button>
                </SignIn>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto">
        {/* Welcome Message */}
        {!showResult ? (
          <>
            <div className="mt-6 mb-6 text-[25px] sm:text-[30px] md:text-[40px] text-slate-500 font-semibold p-4">
              <p>
                <span className="bg-gradient-to-r from-[#1e4a72] to-[#f93422] bg-clip-text text-transparent dark:from-[#6ca1d2] dark:to-[#f29991]">
                  Hello, {isSignedIn ? user.firstName : "Explorer!"}
                </span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-[22px] sm:text-[28px] md:text-[38px]">
                How can I help you today?
              </p>
            </div>

            {/* Suggested Prompts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 mb-11">
              {[
                {
                  text: "What are the best travel destinations in 2024?",
                  icon: <FaCompass />,
                },
                {
                  text: "How can I improve my mental health?",
                  icon: <FaLightbulb />,
                },
                {
                  text: "What are the must-watch movies of the year?",
                  icon: <FaMessage />,
                },
                {
                  text: "How can I improve my coding skills?",
                  icon: <FaCode />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-justify h-[100px] sm:h-[130px] md:h-[170px] p-4 bg-gray-200 dark:bg-gray-700
                   text-gray-800 dark:text-gray-200 
                  rounded-lg relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 
                  border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg"
                  onClick={() => handleCardClick(item.text)}
                >
                  <p className="text-slate-800 text-[15px] sm:text-[16px] md:text-[17px] dark:text-slate-200">
                    {item.text}
                  </p>
                  <div className="text-2xl md:text-4xl  p-1 absolute bottom-2 right-2">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
              <div className="my-10 mx-0 flex items-center gap-5">
                <FaUserCircle className="text-3xl" />
                <p className="text-lg font-[400] leading-[1.8]">
                  {recentPrompt}
                </p>
              </div>

              <div className="flex items-start gap-5">
                <img
                  src={geminiLogo}
                  alt="Gemini Logo"
                  className="w-8 rounded-full"
                />
                {loading ? <p>Loading...</p> : <p>{resultData}</p>}
              </div>
            </div>
          </>
        )}
        
        {/* Input Form */}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-8 sm:mt-10">
          <div className="flex items-center justify-between gap-2 sm:gap-4 bg-gray-200 py-2
          sm:py-2 text-black px-4 sm:px-5 rounded-full border border-gray-400 dark:border-gray-400 shadow-md dark:shadow-lg">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="flex-1 bg-transparent border-none outline-none p-1 sm:p-2 text-sm sm:text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-3 sm:gap-4 items-center">
              <MdAddPhotoAlternate className="text-2xl cursor-pointer hidden sm:block" />
              <FaMicrophone className="text-2xl cursor-pointer hidden sm:block" />
              {input && (
                <IoMdSend
                  onClick={() => onSent()}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>
          <p className="text-sm my-3 mx-auto text-center font-[500] text-slate-800 dark:text-slate-300">
            NeuraMind may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>


        
      </div>
    </div>
  );
};

export default MainContent;

// Sidebar.jsx
import React, { useContext, useState } from "react";
import { IoMenu, IoSettings } from "react-icons/io5";
import { FaMessage, FaPlus, FaQuestion } from "react-icons/fa6";
import { MdHistory, MdDarkMode, MdLightMode, MdMoreVert } from "react-icons/md";
import { Context } from "../context/Context";

const Sidebar = () => {
  const {
    onSent,
    prevPrompt,
    newChat,
    darkMode,
    toggleDarkMode,
    toggleSidebar,
    sidebarExpanded,
    deleteRecentPrompt,
    handleActivity,
    handleHelp,
    handleSettings,
  } = useContext(Context);

  const [showDeleteOptions, setShowDeleteOptions] = useState(null);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between p-4 transition-all duration-300 shadow-lg 
        ${
          darkMode
            ? "bg-gray-950 text-[#E0E0E0] border-r border-[#2E2E2E]"
            : "bg-[#cecece] text-black border-r border-[#BDBDBD]"
        } 
        ${sidebarExpanded ? "md:w-56 w-15" : "w-20"}`}
    >
      <div>
        {/* Sidebar Toggle Button */}
        <IoMenu
          className="text-2xl md:text-3xl block cursor-pointer mb-4"
          onClick={toggleSidebar}
        />

        {/* New Chat Button */}
        <div
          className="mt-[10px] flex items-center gap-[10px] py-[8px] px-[14px] text-[15px] md:text-[16px] cursor-pointer bg-[#6D6D6D] text-white rounded-lg hover:bg-[#525252]
          dark:bg-gray-600 dark:text-white dark:hover:bg-gray-400"
          onClick={newChat}
        >
          <FaPlus className="text-2xl" />
          {sidebarExpanded && <p className="font-medium">New Chat</p>}
        </div>

        {sidebarExpanded && (
          <div className="flex flex-col animate-fadeIn duration-1000 mt-5">
            <p className="font-medium mb-3 ${darkMode ? 'text-[#BDBDBD]' : 'text-[#333333]'}">
              Recent
            </p>
            {prevPrompt?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 relative group rounded-lg hover:bg-[#b9b9b9] dark:hover:bg-gray-700 dark:hover:text-[#E0E0E0] cursor-pointer"
              >
                <div
                  className="flex items-center gap-2"
                  onClick={() => onSent(item)}
                >
                  <FaMessage className="text-2xl" />
                  <p className="text-sm">{item.slice(0, 18)}...</p>
                </div>
                <MdMoreVert
                  className="text-xl cursor-pointer opacity-50 hover:opacity-100"
                  onClick={() =>
                    setShowDeleteOptions(
                      showDeleteOptions === index ? null : index
                    )
                  }
                />
                {showDeleteOptions === index && (
                  <div className="absolute right-0 top-10 bg-gray-200 dark:bg-gray-500 shadow-md p-3 rounded-md z-10">
                    <p className="text-sm text-black dark:text-white">
                      Are you sure you want to delete this chat?
                    </p>
                    <div className="flex justify-end mt-2">
                      <button
                        className="font-semibold text-teal-800 text-sm mr-2 hover:underline dark:text-teal-200"
                        onClick={() => setShowDeleteOptions(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="font-semibold text-red-700 text-sm hover:underline dark:text-red-300"
                        onClick={() => {
                          deleteRecentPrompt(index);
                          setShowDeleteOptions(null);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Bottom Options */}
      <div className="flex flex-col mt-auto gap-2 border-t pt-3 border-[#555555] dark:border-[#BDBDBD]">
        <div
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#b6b6b6] dark:hover:bg-gray-700 dark:hover:text-[#E0E0E0] font-medium"
          onClick={handleHelp}
        >
          <FaQuestion className="text-2xl" />
          {sidebarExpanded && <p>Help</p>}
        </div>
        <div
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#b6b6b6] dark:hover:bg-gray-700 dark:hover:text-[#E0E0E0] font-medium"
          onClick={handleActivity}
        >
          <MdHistory className="text-2xl" />
          {sidebarExpanded && <p>Activity</p>}
        </div>
        <div
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#b6b6b6] dark:hover:bg-gray-700 dark:hover:text-[#E0E0E0] font-medium"
          onClick={handleSettings}
        >
          <IoSettings className="text-2xl" />
          {sidebarExpanded && <p>Features</p>}
        </div>
        <div
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#b6b6b6] dark:hover:bg-gray-700 dark:hover:text-[#E0E0E0] font-medium"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <MdLightMode className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
          {sidebarExpanded && <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// Context.jsx
import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";
import HelpModal from "../components/HelpModal";
import ActivityModal from "../components/ActivityModal";
import SettingsModal from "../components/FeaturesModal";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleSidebar = () => setSidebarExpanded((prevState) => !prevState);

  const deleteRecentPrompt = (index) => {
    setPrevPrompt((prevPrompt) => prevPrompt.filter((_, i) => i !== index));
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setRecentPrompt("");
  };

  const handleActivity = () => {
    setIsActivityOpen(true);
  };

  const handleHelp = () => {
    setIsHelpOpen(true);
  };

  const handleSettings = () => {
    setIsSettingsOpen(true);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt) {
      response = await run(prompt);
      setRecentPrompt(prompt);
      
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    setResultData(response || "⚠️ Error fetching data. Please try again.");
    setLoading(false);
    setInput("");
  };

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        recentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        newChat,
        darkMode,
        toggleDarkMode,
        toggleSidebar,
        sidebarExpanded,
        deleteRecentPrompt,
        handleActivity,
        handleHelp,
        handleSettings,
      }}
    >
      <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen transition-all`}>
        {children}
        {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
        {isActivityOpen && <ActivityModal onClose={() => setIsActivityOpen(false)} prevPrompt={prevPrompt} />}
        {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
      </div>
    </Context.Provider>
  );
};

export default ContextProvider;












// // Context.jsx
// import { createContext, useState, useEffect } from "react";
// import run from "../config/gemini";
// import HelpModal from "../components/HelpModal";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompt, setPrevPrompt] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarExpanded, setSidebarExpanded] = useState(false);
//   const [isHelpOpen, setIsHelpOpen] = useState(false);

//   useEffect(() => {
//     document.body.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   const toggleSidebar = () => setSidebarExpanded((prevState) => !prevState);

//   const deleteRecentPrompt = (index) => {
//     setPrevPrompt((prevPrompt) => prevPrompt.filter((_, i) => i !== index));
//   };

//   const newChat = () => {
//     setLoading(false);
//     setShowResult(false);
//     setRecentPrompt("");
//   };

//   const handleActivity = () => {
//     alert("📜 Recent Search History:\n\n" + prevPrompt.join("\n") || "No recent searches found.");
//   };

//   const handleHelp = () => {
//     setIsHelpOpen(true);
//   };

//   const handleSettings = () => {
//     alert("⚙️ Settings:\n\n- Profile Management\n- Notification Preferences\n- Security Options\n- App Theme Customization");
//   };

//   const onSent = async (prompt) => {
//     setResultData("");
//     setLoading(true);
//     setShowResult(true);
//     let response;

//     if (prompt) {
//       response = await run(prompt);
//       setRecentPrompt(prompt);
//     } else {
//       setPrevPrompt((prev) => [...prev, input]);
//       setRecentPrompt(input);
//       response = await run(input);
//     }

//     setResultData(response || "⚠️ Error fetching data. Please try again.");
//     setLoading(false);
//     setInput("");
//   };

//   return (
//     <Context.Provider
//       value={{
//         input,
//         setInput,
//         recentPrompt,
//         prevPrompt,
//         setPrevPrompt,
//         showResult,
//         loading,
//         resultData,
//         onSent,
//         newChat,
//         darkMode,
//         toggleDarkMode,
//         toggleSidebar,
//         sidebarExpanded,
//         deleteRecentPrompt,
//         handleActivity,
//         handleHelp,
//         handleSettings,
//       }}
//     >
//       <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen transition-all`}>
//         {children}
//         {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
//       </div>
//     </Context.Provider>
//   );
// };

// export default ContextProvider;






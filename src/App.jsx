// // import React from "react"
// // import Sidebar from "./components/Sidebar"
// // import MainContent from "./components/MainContent"
// // import { useAuth } from '@clerk/clerk-react';

// // const App = () => {
// //   return (
// //     <>
// //       <div className="flex animate-fadeIn duration-1000">
// //         <Sidebar />
// //         <MainContent />
// //       </div>
// //     </>
// //   )
// // }

// // export default App



// import React from "react";
// import Sidebar from "./components/Sidebar";
// import MainContent from "./components/MainContent";
// import { useUser, SignIn, SignOutButton } from "@clerk/clerk-react";

// const App = () => {
//   const { isSignedIn, user } = useUser();

//   return (
//     <div className="flex animate-fadeIn duration-1000">
//       {isSignedIn ? (
//         <>
//           <Sidebar />
//           <MainContent />
//         </>
//       ) : (
//         <div className="w-full h-screen flex items-center justify-center">
//           <SignIn />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useUser, SignIn } from "@clerk/clerk-react";

const App = () => {
  const { isSignedIn } = useUser();
  const [proceedWithoutSignIn, setProceedWithoutSignIn] = useState(false);

  return (
    <div className="flex animate-fadeIn duration-1000">
      {isSignedIn || proceedWithoutSignIn ? (
        <>
          <Sidebar proceedWithoutSignIn={proceedWithoutSignIn} />
          <MainContent proceedWithoutSignIn={proceedWithoutSignIn} />
        </>
      ) : (
        <div 
          className="w-full h-screen flex flex-col items-center justify-center relative" 
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1600x900/?technology')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg">
            <SignIn />
            <button
              onClick={() => setProceedWithoutSignIn(true)}
              className="mt-4 w-full px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700"
            >
              Continue without Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

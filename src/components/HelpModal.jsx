import React from "react";

const HelpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white dark:bg-gray-600 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-[500px] shadow-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Welcome to NeuraMind</h2>
        <p className="text-justify font-semibold">📌 FAQs</p>
        <p className="text-justify mt-2 text-sm sm:text-base"><strong>1️⃣ How do I use NeuraMind?</strong><br />
          Simply type your question in the input box and press send. NeuraMind will generate an AI-powered response instantly.
        </p>
        <p className="text-justify mt-2 text-sm sm:text-base"><strong>2️⃣ How do I toggle mode?</strong><br />
          Click the toggle mode icon in the settings menu to switch between light and dark themes.
        </p>
        <p className="text-justify mt-2 text-sm sm:text-base"><strong>3️⃣ Can I delete my recent searches?</strong><br />
          Yes! Click the three-dot icon next to a recent search and select 'Delete' to remove it.
        </p>
        <p className="text-justify mt-2 text-sm sm:text-base"><strong>4️⃣ What makes NeuraMind unique?</strong><br />
          NeuraMind provides fast, intelligent, and conversational AI responses tailored to your queries, making interactions seamless and insightful.
        </p>
        <p className="mt-4 text-sm sm:text-base"><strong>📩 FOR SUPPORT, CONTACT:</strong> <span className="text-blue-700 dark:text-blue-400 font-semibold">zahrayasin2209@gmail.com</span></p>

        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg w-full hover:bg-gray-600 dark:hover:bg-gray-700 text-sm sm:text-base">
          Close
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
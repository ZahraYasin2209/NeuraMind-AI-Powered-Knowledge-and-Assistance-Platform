// ActivityModal.jsx
import React from "react";

const ActivityModal = ({ onClose, prevPrompt }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg w-[400px] shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Recent Search History</h2>
        <div className="max-h-60 overflow-y-auto p-2 border border-gray-600 dark:border-gray-600 rounded-md">
          {prevPrompt.length > 0 ? (
            prevPrompt.map((item, index) => (
              <p key={index} className="text-justify py-1 text-gray-700 dark:text-gray-300">• {item}</p>
            ))
          ) : (
            <p className="text-black text-center dark:text-white">No recent searches found.</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 font-semibold bg-gray-800 text-white rounded-lg w-full hover:bg-gray-500
          dark:bg-gray-400 dark:text-black dark:font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ActivityModal;
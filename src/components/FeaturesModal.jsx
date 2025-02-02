import React from "react";

const FeaturesModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-[550px] shadow-lg">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          NeuraMind - Where Intelligence Meets Innovation
        </h2>
        <div className="space-y-2 sm:space-y-3">
          {[
            "🤖 AI-Powered Responses - Smart & Conversational",
            "⚡ Fast Processing - Instant Results",
            "📚 Vast Knowledge Base - Learn Anything",
            "🌍 Supports Multiple Languages - Global Accessibility",
            "🔒 Secure & Private - Your Data is Safe",
            "🌙 Customizable Dark Mode - Personalized Experience",
            "🗂️ Chat History Management - Retrieve & Delete Chats",
            "📈 Analytics & Insights - Smarter Predictions",
            "🚀 Optimized Performance - Lightning-Fast AI",
          ].map((feature, index) => (
            <p key={index} className="text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-[17px]">
              {feature}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 font-semibold bg-gray-900 text-white rounded-lg w-full hover:bg-gray-700 dark:bg-gray-400 dark:text-black dark:hover:bg-gray-500 text-sm sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FeaturesModal;
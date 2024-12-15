// components/Loading.tsx

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 min-h-screen">
      <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      <span className="text-gray-500">Loading...</span>
    </div>
  );
};

export default Loading;

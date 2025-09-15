import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-900 text-white font-['Poppins'] p-6">
      <h1 className="text-5xl font-extrabold text-red-500 flex items-center gap-2">
        🚫 Access Denied 
      </h1>
      <p className="text-lg text-gray-300 mt-4 mb-6 text-center max-w-md">
        Oops! You do not have permission to view this page. <br />
        Please check your account type or contact support.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
      >
        🔙 Go Back to Home
      </button>
    </div>
  );
};

export default Unauthorized;

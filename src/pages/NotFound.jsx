import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have wandered off into the digital wilderness. 
          Don't worry, it happens to the best of us!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 bg-white/50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Fun Fact:</span> The term "404" comes from the room number 
            at CERN where the original web servers were located!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router";

function BottomBar() {
  return (
    <footer className="bg-white border-t border-gray-200 fixed bottom-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6 py-5 gap-6 md:gap-0">
        <div className="flex-shrink-0">
          <div className="mb-4 md:mb-0">
            <img
              src="/appLogo.png"
              className="h-8 w-32 object-cover"
              alt="NestStar Capital Logo"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Useful Links
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <Link
                to="/termsandconditions"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>

            {/* 
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default BottomBar;

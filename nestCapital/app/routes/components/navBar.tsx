import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-blue-700 hover:underline">
          <img
            src="/appLogo.png"
            className="h-8 w-32 object-cover"
            alt="NestStar Capital Logo"
          />
        </Link>

        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
          NestStar Capital Private Ltd.
        </span>

        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <a
              href="https://neststar.ifon.in/"
              target="_blank"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
            >
              Official Login <br />
              Econnect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

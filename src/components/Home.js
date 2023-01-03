import Lists from "./Lists";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid text-light bg-black py-2 shadow">
        <nav className="navbar">
          <div className="container-fluid px-0">
            <span className="navbar-brand mb-0 h1 fs-3 text-any fw-bold text-light pb-0">
              <img
                className="rounded pe-2"
                src="https://cdn-icons-png.flaticon.com/512/8854/8854200.png"
                alt="songbird logo"
                width={"50px"}
              />
              SongBird
            </span>

            <button
              className="navbar-toggler d-md-none collapsed ms-auto bg-dark opacity-50"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-light"></i>
            </button>
          </div>
        </nav>
        <nav id="sidebarMenu" className="d-md-block sidebar collapse">
          <ul className="list-group list-group-flush text-dm fw-bold mt-2">
            <li className="list-group-item border-0 ps-0 bg-black">
              <Link to="/songbird" className="text-decoration-none text-light">
                <i className="fa-solid fa-house fa-lg pe-3"></i>Home
              </Link>
            </li>
            <li className="list-group-item border-0 ps-0 bg-black">
              <Link to="/search" className="text-decoration-none text-light">
                <i className="fa-solid fa-magnifying-glass fa-lg pe-3"></i>
                Search
              </Link>
            </li>
            <li className="list-group-item border-0 ps-0 bg-black">
              <Link to="/lib" className="text-decoration-none text-light">
                <i className="fa-solid fa-bookmark fa-lg pe-3"></i>
                Your Library
              </Link>
            </li>
            <li className="list-group-item border-0 mt-4 ps-0 bg-black">
              <a
                href="https://newcarnet.vercel.app/"
                className="text-decoration-none text-light"
              >
                <i className="fa-solid fa-square-plus fa-lg pe-3"></i>
                Create Playlist
              </a>
            </li>
            <li className="list-group-item border-0 ps-0 bg-black">
              <Link to="/liked" className="text-decoration-none text-light">
                <i
                  className="fa-solid fa-heart fa-lg pe-3"
                  style={{ color: "#EB455F" }}
                ></i>
                Liked Songs
              </Link>
            </li>
          </ul>
          <hr className="my-1" />
          <ul className="list-group list-group-flush text-dm fw-bold pb-2 mb-5">
            <Lists name="2022 Wrapped" />
            <Lists name="Your Top Songs 2022" />
            <Lists name="Popular Albums" />
            <Lists name="Popular Genres" />
            <Lists name="The Weeknd" />
            <Lists name="Amswe" />
          </ul>
        </nav>
      </div>
    </>
  );
}

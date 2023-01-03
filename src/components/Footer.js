import { useState, useRef } from "react";
import song1 from "../Songs/song1.mp3";
import Slider from "./slider/Slider";
import ControlPanel from "./controls/ControlPanel";

export default function Footer(props) {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };
  return (
    <>
      <div class="container-fluid bg-dark fixed-bottom text-dm px-4 text-white">
        <div className="row d-flex flex-wrap justify-content-between align-items-center py-3 mb-2 border-top border-dark">
          <div className="col-md-4 d-none d-lg-block">
            <div class="card bg-dark border-0">
              <div class="card-body">
                <div className="row">
                  <div className="col-3 text-end">
                    <button className="btn btn-light p-3 me-3 mb-2">
                      {props.newheart || "❣️"}
                    </button>
                  </div>
                  <div className="col-7 ps-0">
                    <blockquote class="blockquote">
                      <p>{props.newsong || "Click on any song to play!"}</p>

                      <footer class="blockquote-footer fs-6 fw-bold">
                        by&nbsp;
                        <cite>{props.newartist || "Chirp Chirp"}</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div class="card bg-dark border-0 text-center">
              <div class="card-header border-0 fw-bold fs-5">
                <i
                  class="fa-solid fa-compact-disc fa-2xl me-3 fa-spin"
                  style={{ color: "pink" }}
                ></i>
                {props.newsong}
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0 opacity-75">
                  <div className="app-container">
                    <Slider percentage={percentage} onChange={onChange} />
                    <audio
                      className="audio"
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      onLoadedData={(e) => {
                        setDuration(e.currentTarget.duration.toFixed(2));
                      }}
                      src={song1}
                    ></audio>
                    <ControlPanel
                      play={play}
                      isPlaying={isPlaying}
                      duration={duration}
                      currentTime={currentTime}
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ul class="nav justify-content-evenly ">
              <li class="nav-item">
                <a
                  href="https://github.com/westernfrog/"
                  class="nav-link px-2 text-light"
                >
                  <i class="fa-brands fa-github fa-xl"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.instagram.com/iam__amansingh/"
                  class="nav-link px-2 text-light"
                >
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </a>
              </li>

              <li class="nav-item">
                <a
                  href="https://www.discordapp.com/users/888993682018168842"
                  class="nav-link px-2 text-light"
                >
                  <i class="fa-brands fa-discord fa-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

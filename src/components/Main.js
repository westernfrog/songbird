import { useState, useEffect } from "react";
import $ from "jquery";
import Scards from "./Scards";
import Footer from "./Footer";

export default function Main(params) {
  useEffect(() => {
    let today = new Date();
    let curHr = today.getHours();
    let setday = "";

    if (curHr < 12) {
      setday = "Good morning";
    } else if (curHr < 18) {
      setday = "Good afternoon";
    } else {
      setday = "Good evening";
    }
    $(".day").html(setday);

    $("#a").on("click", function () {
      $("#a").addClass("text-white");
      $("#b").removeClass("text-white");
      $("#d").removeClass("text-white");
      $("#c").removeClass("text-white");
    });
    $("#b").on("click", function () {
      $("#b").addClass("text-white");
      $("#a").removeClass("text-white");
      $("#c").removeClass("text-white");
      $("#d").removeClass("text-white");
    });
    $("#c").on("click", function () {
      $("#c").addClass("text-white");
      $("#b").removeClass("text-white");
      $("#d").removeClass("text-white");
      $("#a").removeClass("text-white");
    });
    $("#d").on("click", function () {
      $("#d").addClass("text-white");
      $("#b").removeClass("text-white");
      $("#c").removeClass("text-white");
      $("#a").removeClass("text-white");
    });
  }, []);

  const [artist, setartist] = useState("");
  const [song, setsong] = useState("");
  const [heart, setheart] = useState("");

  return (
    <>
      <main className="container bg-black text-white">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-3 mb-3 border-bottom">
          <h1 className="h2 text-dm fw-bold day mb-0 mt-4 mt-lg-0">Hello!</h1>
        </div>
        <div className="text-dm pb-2 text-light">
          <span className="h5 fw-bold text-any" style={{ color: "pink" }}>
            Welcome to Songbird&nbsp;
          </span>
          - the ultimate destination for music lovers!
        </div>
        <div className="row my-4 pb-5">
          <div className="text-dm fw-bold fs-4 text-light pb-3">
            Popular Songs
          </div>
          <div className="col-md-3">
            <div className="card mb-3 rounded-3 bg-primary">
              <Scards head="Tum Ho" />
              <div className="card-footer text-end border-0">
                <button
                  type="button"
                  className="btn rounded-pill px-1"
                  onClick={() => {
                    setartist("Mohit Chauhan");
                    setsong("Tum Ho");
                    setheart("💙");
                  }}
                >
                  <i className="fa-solid fa-circle-play fa-2xl" id="a"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 rounded-3 bg-warning">
              <Scards head="Tose Naina" />
              <div className="card-footer text-end border-0">
                <button
                  type="button"
                  className="btn rounded-pill px-1"
                  onClick={() => {
                    setartist("Arijit Singh");
                    setsong("Tose Naina");
                    setheart("💛");
                  }}
                >
                  <i className="fa-solid fa-circle-play fa-2xl" id="b"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 rounded-3 bg-danger">
              <Scards head="Laal Ishq" />
              <div className="card-footer text-end border-0">
                <button
                  type="button"
                  className="btn rounded-pill px-1"
                  onClick={() => {
                    setartist("Arijit Singh");
                    setsong("Laal Ishq");
                    setheart("❤️");
                  }}
                >
                  <i className="fa-solid fa-circle-play fa-2xl" id="c"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 rounded-3 bg-success">
              <Scards head="Channa Mereya" />
              <div className="card-footer text-end border-0">
                <button
                  type="button"
                  className="btn rounded-pill px-1"
                  onClick={() => {
                    setartist("Arijit Singh");
                    setsong("Channa Mereya");
                    setheart("💚");
                  }}
                >
                  <i className="fa-solid fa-circle-play fa-2xl" id="d"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card mb-3 rounded-3"
              style={{ backgroundColor: "pink" }}
            >
              <Scards head="Thanks for Visiting <3" />
              <div className="card-footer text-end border-0">
                <button
                  type="button"
                  className="btn rounded-pill px-1"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer newartist={artist} newsong={song} newheart={heart} />
    </>
  );
}

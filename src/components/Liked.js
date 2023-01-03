import Cards from "./Cards";

export default function Liked() {
  return (
    <>
      <div className="container bg-grey ms-0 opacity-100 ">
        <header class="py-3">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="text-dm fw-bold fs-3 text-light pe-5">
              <i className="fa-solid fa-heart pe-3"></i>Liked Songs
            </div>
            <form class="col-10 col-lg-4 mb-3 mb-lg-0 me-lg-3  mt-3 mt-lg-0">
              <input
                type="search"
                class="form-control rounded-pill text-dm"
                placeholder="What do you want to listen to?"
                aria-label="Search"
              />
            </form>
          </div>
        </header>
        <Cards />
      </div>
    </>
  );
}

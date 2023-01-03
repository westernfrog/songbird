import Scards from "./Scards";

export default function Cards() {
  return (
    <>
      <div className="row my-4">
        <div className="text-dm fw-bold fs-4 text-light pb-3">Browse all</div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-primary">
            <Scards head="2022 Wrapped" />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-warning">
            <Scards head="Made For You" />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-danger">
            <Scards head="Punjabi" />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-success">
            <Scards head="Hindi" />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-light">
            <Scards head="Tamil" />
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3 rounded-3 bg-info">
            <Scards head="Telugu" />
          </div>
        </div>
      </div>
    </>
  );
}

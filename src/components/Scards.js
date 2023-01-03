export default function Scards(props) {
  return (
    <>
      <div class="card-header bg-dark border-0 fs-3 text-white text-dm fw-bold">
        {props.head}
      </div>
      <div class="card-body">
        <p class="card-text opacity-0">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </>
  );
}

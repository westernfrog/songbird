export default function Lists(props) {
  return (
    <>
      <li class="list-group-item border-0 ps-0 bg-black pb-1">
        <a href="/" className="text-decoration-none text-light">
          {props.name}
        </a>
      </li>
    </>
  );
}

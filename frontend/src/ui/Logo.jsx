import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        <span className="tag">DAMIC</span> BEAUTY
      </h1>
    </Link>
  );
}

export default Logo;

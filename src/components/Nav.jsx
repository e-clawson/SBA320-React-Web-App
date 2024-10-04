import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
    </div>
  );
}
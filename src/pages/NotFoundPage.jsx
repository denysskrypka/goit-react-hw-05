import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>
        Page not found, <Link to="/">click</Link>
      </h1>
    </div>
  );
}

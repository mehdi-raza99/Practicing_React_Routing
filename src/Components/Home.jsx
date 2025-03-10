import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="Home">
      <Outlet />
      <Link to="/about">About Page</Link>
      <h1>Hello CodeSandbox</h1>
      <h2>Start learning React-Router-Dom to see some magic happen!</h2>
    </div>
  );
}

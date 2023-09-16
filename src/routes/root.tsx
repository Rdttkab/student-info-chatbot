import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="py-6 px-10 shadow-xl bg-slate-50">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <h1>Menu</h1>
            </li>
          </ul>
        </nav>
        <main className="mt-4 p-5 flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
}

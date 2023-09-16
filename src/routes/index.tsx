import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="mb-6">Enter into Student Info System</h1>
      <Link to="/enroll" className="bg-sky-400 p-2 rounded-sm">
        Enroll Now!
      </Link>
    </div>
  );
}

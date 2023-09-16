import { Route, Routes } from "react-router-dom";
import Root from "./routes/root";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="p-6 h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center h-48">
          <h1>Enter into Student Info System</h1>
          <div>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route index element={<div>home</div>} />
                <Route path="about" element={<div>about</div>} />
                <Route path="dashboard" element={<div>dashboard</div>} />

                <Route path="*" element={<div>no match</div>} />
              </Route>
            </Routes>
          </div>
          <button className="bg-sky-400 p-2 rounded-sm">Enroll Now!</button>
        </div>
      </div>
    </div>
  );
}

export default App;

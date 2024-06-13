import React from "react";
import { ImageGenerator } from "./components/ImageGenerator";

const App = () => {
  return <div className="w-full flex items-center justify-center p-10 min-h-screen bg-gradient-to-tr from-slate-900 to-slate-700">
    <ImageGenerator/>
  </div>;
};

export default App;

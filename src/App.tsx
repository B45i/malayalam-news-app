import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const news = {
  title: "ഇനിയും പറയും ",
  link: "https://www.deshabhimani.com//post/20231209_9342/gayathri-varsha",
  description:
    "എന്റെ രാഷ്‌ട്രീയ വിശ്വാസം എനിക്ക്‌ പ്രധാനമാണ്‌. അത്‌ വായിച്ചും പാർടി ക്ലാസിലും അനുഭവത്തിൽനിന്ന്‌ പഠിച്ചും പ്രവർത്തിച്ചും ആർജിച്ചതാണ്‌. അത്‌ അടിയറവച്ചൊരു ജീവിതമില്ല",
  image:
    "https://images-fe-cl.deshabhimani.com/iiif/2/default%2F2023%2FDECEMBER%2F0gvvvaaa.jpg/full/max/0/default.webp",
  source: "Deshabhimani",
};

function App() {
  return (
    <div data-theme="cupcake" className="h-screen w-screen flex flex-col">
      <nav className="navbar bg-base-100 shadow">
        <div className="btn btn-ghost text-xl">പേരില്ല </div>
      </nav>

      <main className="grow p-4 flex flex-col gap-4">
        <div className="shadow-xl rounded-md p-4 flex flex-col gap-4 bg-base-200">
          <img className="rounded h-40 object-cover" src={news.image} alt="" />
          <div>
            <h2 className="text-2xl mb-2">{news.title}</h2>
            <div className="badge badge-neutral">{news.source}</div>
            <p>{news.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

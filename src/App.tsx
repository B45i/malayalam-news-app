import { useEffect, useState } from "react";
import "./App.css";

const Article = ({ news }: any) => {
  return (
    <a
      href={news.link}
      target="_blank"
      className="shadow-xl rounded-md p-4 flex flex-col gap-4 bg-base-200 border border-base-300"
    >
      <img className="rounded h-40 object-cover" src={news.image} alt="" />
      <div>
        <h2 className="text-2xl mb-2">{news.title}</h2>
        <div className="badge badge-neutral">{news.source}</div>
        <p>{news.description}</p>
      </div>
    </a>
  );
};

function App() {
  const [news, setNews] = useState<any>([]);

  const fetchNews = async () => {
    const url = `http://localhost:3000/`;
    const response = await fetch(url);
    const data: any = await response.json();
    if (data && data.length) {
      setNews(data);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div
      data-theme="cupcake"
      className="h-screen w-screen flex flex-col overflow-auto"
    >
      <nav className="navbar bg-base-100 shadow">
        <div className="btn btn-ghost text-xl">പേരില്ല </div>
      </nav>

      <main className="grow p-4 flex flex-col gap-4">
        {news?.length ? (
          news.map((n) => <Article key={n.link} news={n} />)
        ) : (
          <div className="h-full w-full text-center grid place-content-center">
            അച്ചിൽ മഷി പുരട്ടികൊണ്ടിരിക്കുകയാണ്, ഒന്ന് wait ചെയ്യ്
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

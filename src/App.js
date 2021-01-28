import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, data } = useFetch(url);
  const [activePage, setActivePage] = useState(0);
  console.log(data); // Array of arrays now

  return (
    <main className="section">
      <h3 className="section-title">
        {loading ? "loading..." : "Pagination | Gift for Brother"}
      </h3>

      <div className="underline"></div>
      <section className="followers container">
        {data.length > 0 &&
          data[activePage].map((item, index) => {
            return <Follower {...item} key={item.id} />;
          })}
      </section>

      {/* Pagination Code */}

      <section className="btn-container">
        <p className="prev-btn">prev</p>
        {data.map((data, index) => (
          <button key={index} className="page-btn">
            {index + 1}
          </button>
        ))}
        <p className="next-btn">next</p>
      </section>
    </main>
  );
}

export default App;

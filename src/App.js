import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const { loading, data } = useFetch(url);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);

  console.log(data);
  return (
    <main className="section">
      <h3 className="section-title">
        {loading ? "loading..." : "Pagination | Gift for Brother"}
      </h3>

      <div className="underline"></div>
      <section className="followers container">
        {data &&
          data.map((item, index) => {
            while (index >= start && index < page * 10) {
              return <Follower {...item} key={item.id} />;
            }
          })}
      </section>

      {/* Pagination Code */}

      <section className="btn-container">
        <p className="prev-btn">prev</p>
        {btns.map((btn, index) => (
          <button className="page-btn">{btn}</button>
        ))}
        <p className="next-btn">next</p>
      </section>
    </main>
  );
}

export default App;

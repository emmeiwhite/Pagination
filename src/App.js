import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, data } = useFetch(url);
  const [activePage, setActivePage] = useState(0);
  console.log(data); // Array of arrays now

  // One Handler to handle them all :)
  const handleClick = (page) => {
    setActivePage(page);
  };

  const handlePrev = () => {
    if (activePage === 0) {
      setActivePage(data.length - 1);
      return;
    }

    setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage === 11) {
      setActivePage(0);
      return;
    }

    setActivePage(activePage + 1);
  };
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
        <p className="prev-btn" onClick={handlePrev}>
          prev
        </p>
        {data.map((data, index) => (
          <button
            key={index}
            className="page-btn"
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </button>
        ))}
        <p className="next-btn" onClick={handleNext}>
          next
        </p>
      </section>
    </main>
  );
}

export default App;

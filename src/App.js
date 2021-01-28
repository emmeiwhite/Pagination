import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, data } = useFetch(url);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setPeople(data);
    }
  }, []);

  console.log("MAIN DATA ...");
  console.log(data);
  return (
    <main className="section">
      <h3 className="section-title">Pagination | Gift for Brother</h3>

      <div className="underline"></div>
      <section className="followers container">
        {data &&
          data.map((item) => {
            return <Follower {...item} key={item.id} />;
          })}
      </section>

      {/* Pagination Code */}
    </main>
  );
}

export default App;

import React from "react";

const defaultImage = "https://picsum.photos/200";
const Follower = ({ avatar_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url || defaultImage} alt="Github User" />
      <p>{login || "Default Name"}</p>
      <button className="btn">View Profile</button>
    </article>
  );
};

export default Follower;

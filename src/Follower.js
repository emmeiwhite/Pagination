import React from "react";

const defaultImage = "https://picsum.photos/200";
const Follower = ({ avatar_url, login, html_url }) => {
  return (
    <article className="card">
      <img src={avatar_url || defaultImage} alt="Github User" />
      <h4>{login || "Default Name"}</h4>
      <a href={html_url} className="btn">
        View Profile
      </a>
    </article>
  );
};

export default Follower;

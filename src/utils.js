const paginate = (followers) => {
  const itemsPerPage = 9;

  const pages = Math.ceil(followers.length / itemsPerPage); // ceil() is opposite of floor()
  console.log(pages);
  // I want to return array of array here to split up my huge array into each page

  const newFollowers = Array.from({ length: pages }); // Creating array of length equal to pages
  //   console.log(newFollowers); // We use this newFollwers as our array of arrays

  let start = 0;
  let end = pages;
  newFollowers.forEach((array, index) => {
    newFollowers[index] = followers.slice(start, (index + 1) * itemsPerPage);
    start = (index + 1) * itemsPerPage;
  });

  console.log(newFollowers);
};

export default paginate;

import axios from "axios";

const getData = async (userID) => {
  const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/"+userID.toString());
  const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userID.toString());
  return { user, post};
};


export { getData };
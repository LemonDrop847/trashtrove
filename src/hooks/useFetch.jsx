// import axios from "axios";
// import { useState } from "react";

// const useFetch = () => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState();
//   const [error, setError] = useState();
//   console.log(import.meta.env.VITE_APP_BASE_URL);
//   try {
// const fetchData = async () => {
//   setLoading(true);
//   const data = await axios.post(import.meta.env.VITE_APP_BASE_URL + "/", {
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   setData(data);
// };
//     setLoading(false);
//   } catch (err) {
//     setError(err);
//     setLoading(false);
//   }

//   return { data, loading, error };
// };

// export default useFetch;

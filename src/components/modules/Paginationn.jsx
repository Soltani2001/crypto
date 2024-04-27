// import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
export default function Paginationn() {
  const [page, setPage] = useState(1);
  const [api, setApi] = useState([]);
  useEffect(() => {
    handleFetchData();
  }, [page]);
  const handleFetchData = async () => {
    const resData = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}`
    );
    const data = await resData.data;
    console.log("datas", data);
    setApi(data);
  };
  return (
    <div className="App">
      {api.map((val) => (
        <>
          <p>{val.title}</p>
        </>
      ))}

      <Pagination
        count={10}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
      />
    </div>
  );
}

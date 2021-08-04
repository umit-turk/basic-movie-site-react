import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  const [nextPageNumber, setNextPageNumber] = useState(1);


  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const fetchNextUser = () => {
    fetchData(nextPageNumber).then((randomData) => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || "no user");

      if (randomData === undefined) return;
      const newUserInfos = [...userInfos, ...randomData.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(randomData.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
  }, []);

  const fetchData = (pageNumber) => {
    return axios
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then(({ data }) => data)
      .catch((err) => {
        console.log(err);
      });
  };

  const getFullUserName = (userInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  return (
    <div>
      <button onClick={handleIncrement}>İncreament</button>
      <button
        onClick={() => {
          fetchNextUser();
        }}
      >
        fetch new user
      </button>
      <p>{count}</p>
      {userInfos.map((userInfo, idx) => (
        <div key={idx}>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} />
        </div>
      ))}
      <pre>{randomUserDataJSON}</pre>
    </div>
  );
};

export default App;

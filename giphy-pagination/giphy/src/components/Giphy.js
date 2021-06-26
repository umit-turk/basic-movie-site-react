import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Paginate from "./Paginate";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //these are releated by pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  //page 1 item 1- item 25
  //page 2 item 26- item 50
  //page 3 item 51 - item 75

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      //apiye ulaşmadan önce spinner oluşturuyoruz.
      setIsLoading(true);
      try {
        const result = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "RgAdXQtAocRMSAfFQWWwXNXG1HkAAGpM",
            limit: 100,
          },
        });

        console.log(result);
        setData(result.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      //data geldiği zaman spinner false olacak.
      setIsLoading(false);
    };

    fetchData();
  }, []);

  ///Loading and render gifs
  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return currentItems.map((el) => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  
// pagination page select
  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //if exist a error
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "RgAdXQtAocRMSAfFQWWwXNXG1HkAAGpM",
          q: search,
          limit: 100,
        },
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  return (
    <div className="m-2">
      {renderError()}
      <form className="d-flex form-inline justify-content-center m-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary ms-2"
        >
          Go
        </button>
      </form>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;

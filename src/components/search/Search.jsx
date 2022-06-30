import React from "react";
import { StyledSearch, StyledInput } from "./SearchStyles";
import { useFetch } from "../../hooks/useFetch";
import { HOTELS } from "../../utils/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const { data } = useFetch(HOTELS);
  const [searchWord, setSearchWord] = useState("");
  return (
    <>
      <StyledInput>
        <input
          type="text"
          placeholder="Search hotels"
          onChange={(event) => setSearchWord(event.target.value)}
          value={searchWord}
          onBlur={() =>
            setTimeout(() => {
              setSearchWord("");
            }, 150)
          }
        />
      </StyledInput>
      <StyledSearch>
        {data
          // eslint-disable-next-line
          .filter((hotel) => {
            if (searchWord === "") {
              return "";
            } else if (
              hotel.attributes.name
                .toLowerCase()
                .includes(searchWord.toLowerCase())
            ) {
              return hotel;
            }
          })
          .map((hotel, index) => (
            <Link to={`/hotels/${hotel.id}`} key={index}>
              <div className="searchRes">
                <h4>{hotel.attributes.name}</h4>
                <div className="imgCont">
                  <img
                    src={hotel.attributes.img_url}
                    alt={hotel.attributes.name}
                  />
                </div>
              </div>
            </Link>
          ))}
      </StyledSearch>
    </>
  );
};

export default Search;

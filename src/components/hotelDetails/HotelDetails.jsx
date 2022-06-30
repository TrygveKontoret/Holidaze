import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { HOTELS } from "../../utils/api";
import { DetailCarousel } from "../carousel/Carousel";
import { BookingForm } from "../forms/Forms";
import { StyledDetails } from "./HotelDetailsStyles";
import { starRating } from "../../utils/starsSVG";

const HotelDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(HOTELS + "/" + id);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const toggleBooking = () => {
    setOpen(!open);
  };

  return (
    <>
      {data.data ? (
        <>
          <StyledDetails>
            <div className="carouselCont">
              <DetailCarousel data={data.data} />
            </div>
            <div className="hotelDesc">
              <h1>{data.data.attributes.name}</h1>
              <div className="stars">
                {starRating(data.data.attributes.star)}
              </div>
              <p>{data.data.attributes.description}</p>
              <div className="ratings">
                <p>User rating: {data.data.attributes.rating}/10</p>
                <p>by: {data.data.attributes.rating_users} users</p>
              </div>
              <button onClick={toggleBooking}>Book now!</button>
            </div>
          </StyledDetails>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      {open && <BookingForm data={data.data} closed={toggleBooking} />}
    </>
  );
};

export default HotelDetails;

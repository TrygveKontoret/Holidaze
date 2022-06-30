import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ACTIVITIES } from "../../utils/api";
import { StyledDetails } from "../hotelDetails/HotelDetailsStyles";
import { ActivityCarousel } from "../carousel/Carousel";
import { StyledActivity } from "./ActivititesDetailStyled";

export const ActivitiesDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(ACTIVITIES + "/" + id);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.data ? (
        <StyledActivity>
          <StyledDetails>
            <div className="carouselCont">
              <ActivityCarousel data={data.data} />
            </div>
            <div className="hotelDesc">
              <h1>{data.data.attributes.name}</h1>
              <p>{data.data.attributes.description}</p>
            </div>
          </StyledDetails>
        </StyledActivity>
      ) : (
        "Loading.."
      )}
    </>
  );
};

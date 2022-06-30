import { useFetch } from "../../hooks/useFetch";
import { ROOM_URL } from "../../utils/api";
import { RoomCarousel } from "../carousel/Carousel";
import { StyledRoom } from "./RoomsStyles";

export const Rooms = () => {
  const { data } = useFetch(ROOM_URL);

  return (
    <>
      <StyledRoom>
        <h2>Our rooms:</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((room, idx) => {
                return (
                  <div className="card" key={idx}>
                    <div className="carouselCont">
                      <RoomCarousel data={room} />
                    </div>
                    <h4>{room.attributes.type}</h4>
                    <p>{room.attributes.description}</p>
                    <p>Price: {room.attributes.price} NOK</p>
                  </div>
                );
              })
            : " "}
        </div>
      </StyledRoom>
    </>
  );
};

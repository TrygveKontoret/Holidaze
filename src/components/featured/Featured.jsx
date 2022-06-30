import { StyledWrapper } from "./FeaturedStyles";
import { HOTELS } from "../../utils/api";
import { starRating } from "../../utils/starsSVG";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Featured = () => {
  const { data } = useFetch(HOTELS);

  return (
    <>
      <StyledWrapper>
        <h1>Welcome to Holidaze! Book your hotel in Bergen now!</h1>
        <h2>Most popular hotels</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((featured, idx) => {
                if (featured.attributes.featured) {
                  return (
                    <Link to={`/hotels/${featured.id}`} key={featured.id}>
                      <div key={idx} className="card">
                        <div className="imgCont">
                          <img
                            src={featured.attributes.img_url}
                            alt={featured.attributes.name}
                          />
                        </div>
                        <h3>{featured.attributes.name}</h3>
                        <div className="stars">
                          {starRating(featured.attributes.star)}
                        </div>
                        <div className="rating">
                          <p>User rating: {featured.attributes.rating} </p>
                          <p>({featured.attributes.rating_users} users)</p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })
            : "Loading..."}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Featured;

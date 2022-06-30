import { useFetch } from "../../hooks/useFetch";
import { ACTIVITIES } from "../../utils/api";
import { StyledWrapper } from "./ActivitiesStyles";
import { Link } from "react-router-dom";

const Activities = () => {
  const { data } = useFetch(ACTIVITIES);

  return (
    <>
      <StyledWrapper>
        <h2>Explore the most popular attractions in Bergen</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((activity, idx) => {
                return (
                  <Link to={`/activities/${activity.id}`} key={activity.id}>
                    <div key={idx} className="card">
                      <div className="imgCont">
                        <img
                          src={activity.attributes.img_url}
                          alt={activity.attributes.name}
                        />
                      </div>
                      <h3>{activity.attributes.name}</h3>
                      <p>
                        {activity.attributes.description.substring(0, 150) +
                          "..."}
                      </p>
                      <div>
                        <h4>Read more</h4>
                      </div>
                    </div>
                  </Link>
                );
              })
            : "Loading..."}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Activities;

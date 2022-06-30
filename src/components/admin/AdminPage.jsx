import React from "react";
import { StyledAdmin, StyledMessage, StyledUnauthorized } from "./AdminStyles";
import { Link, useNavigate } from "react-router-dom";
import { BOOKING_URL, HOTELS, MSG_URL } from "../../utils/api";
import { useState, useEffect } from "react";
import axios from "axios";
import { HotelForm } from "../forms/Forms";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export const MessageAdmin = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(MSG_URL);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteMessage = (id) => {
    axios.delete(MSG_URL + "/" + id, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  };

  return (
    <>
      <StyledMessage>
        <h2>Messages:</h2>
        <div className="wrapper">
          {data.length > 0 ? (
            data.map((message, idx) => {
              return (
                <div key={idx} className="card">
                  <div>
                    <h4>Name: </h4>
                    <p>{message.attributes.name}</p>
                    <h4>Email:</h4>
                    <p>{message.attributes.email}</p>
                    <h4>Subject:</h4>
                    <p>{message.attributes.subject}</p>
                    <h4>Message:</h4>
                    <p>{message.attributes.message}</p>
                    <h4>Message date:</h4>
                    <p>{message.attributes.createdAt.substring(0, 10)}</p>
                    <button
                      onClick={() => {
                        deleteMessage(message.id);
                        setTimeout(() => {
                          fetchData();
                        }, 300);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No messages</h2>
          )}
        </div>
      </StyledMessage>
    </>
  );
};

export const BookingAdmin = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(BOOKING_URL);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteBooking = (id) => {
    axios.delete(BOOKING_URL + "/" + id, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  };

  return (
    <>
      <StyledMessage>
        <h2>Bookings:</h2>
        <div className="wrapper">
          {data.length > 0 ? (
            data.map((booking, idx) => {
              return (
                <div key={idx} className="card">
                  <div>
                    <h4>Name: </h4>
                    <p>{booking.attributes.name}</p>
                    <h4>Email:</h4>
                    <p>{booking.attributes.email}</p>
                    <h4>Hotel: </h4>
                    <p>{booking.attributes.hotel_name}</p>
                    <h4>Room: </h4>
                    <p>{booking.attributes.room}</p>
                    <h4>Check in date: </h4>
                    <p>{booking.attributes.checkin}</p>
                    <h4>Check out date: </h4>
                    <p>{booking.attributes.checkout}</p>
                    <h4>Time of booking: </h4>
                    <p>{booking.attributes.createdAt.substring(0, 10)}</p>
                    <button
                      onClick={() => {
                        deleteBooking(booking.id);
                        setTimeout(() => {
                          fetchData();
                        }, 300);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No bookings</h2>
          )}
        </div>
      </StyledMessage>
    </>
  );
};

export const HotelsAdmin = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(HOTELS);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHotel = (id) => {
    axios.delete(HOTELS + "/" + id, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
  };

  return (
    <>
      <StyledMessage>
        <h2>Hotels:</h2>
        <div className="wrapper">
          {data.length > 0 ? (
            data.map((hotel, idx) => {
              return (
                <div key={idx} className="card">
                  <div>
                    <h4>Name: </h4>
                    <p>{hotel.attributes.name}</p>
                    <h4>Hotel ID:</h4>
                    <p>{hotel.id}</p>
                    <h4>Created at: </h4>
                    <p>{hotel.attributes.createdAt.substring(0, 10)}</p>
                    <button
                      onClick={() => {
                        const sureDelete = window.confirm(
                          "Are you sure you want to delete this hotel"
                        );

                        if (sureDelete) {
                          deleteHotel(hotel.id);
                          setTimeout(() => {
                            fetchData();
                          }, 300);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </StyledMessage>
    </>
  );
};

export const AdminPage = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  const logOut = () => {
    setAuth(!auth);
    localStorage.removeItem("jwt");
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <>
      <StyledAdmin>
        <h1>Welcome Admin!</h1>
        <div>
          <button onClick={() => setCurrent(0)}>Messages</button>
          <button onClick={() => setCurrent(1)}>Bookings</button>
          <button onClick={() => setCurrent(2)}>Add new hotel</button>
          <button onClick={() => setCurrent(3)}>Delete hotels</button>
          <button className="logout" onClick={() => logOut()}>
            Log out
          </button>
        </div>
      </StyledAdmin>
      {current === 0 && <MessageAdmin />}
      {current === 1 && <BookingAdmin />}
      {current === 2 && <HotelForm />}
      {current === 3 && <HotelsAdmin />}
    </>
  );
};

export const Unauthorized = () => {
  return (
    <>
      <StyledUnauthorized>
        <h1>Unauthorized access!</h1>
        <p>Please login or return to home:</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </StyledUnauthorized>
    </>
  );
};

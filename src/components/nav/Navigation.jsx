import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHamburger,
  StyledHeader,
  StyledBurgerNav,
} from "./NavigationStyles";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Search from "../search/Search";

const Navigation = () => {
  const bar1Ref = useRef();
  const bar2Ref = useRef();
  const bar3Ref = useRef();
  const [open, setOpen] = useState(false);

  const [auth, setAuth] = useContext(AuthContext);
  const toggleOpen = () => {
    setOpen(!open);
    bar1Ref.current.classList.toggle("change1");
    bar2Ref.current.classList.toggle("change2");
    bar3Ref.current.classList.toggle("change3");
  };

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <div className="logo">
            <svg
              width="64"
              height="62"
              viewBox="0 0 64 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 27H29V60C29 61.1046 28.1046 62 27 62H5C3.89543 62 3 61.1046 3 60V27Z"
                fill="#D75B4B"
              />
              <path
                d="M2.32587 27.65L16 6.18612L29.6741 27.65H2.32587Z"
                fill="#D75B4B"
                stroke="black"
                strokeWidth="0.2"
              />
              <path
                d="M35 27H61V60C61 61.1046 60.1046 62 59 62H37C35.8954 62 35 61.1046 35 60V27Z"
                fill="#D75B4B"
              />
              <path
                d="M34.3073 26.9L48 0.219018L61.6927 26.9H34.3073Z"
                fill="#D75B4B"
                stroke="black"
                strokeWidth="0.2"
              />
              <path
                d="M16.5 41.775V37.375C16.5 36.7583 16.4333 36.3167 16.3 36.05C16.1667 35.7833 15.8917 35.65 15.475 35.65V34.875L20.6 32.725L21 33.525C20.6333 33.525 20.2833 33.7417 19.95 34.175C19.65 34.5917 19.5 35.225 19.5 36.075V41.775H20.75V42.375L19.5 43V48.3C19.5 49.3167 19.8417 49.8917 20.525 50.025V50.575L18 52C17.6333 51.85 17.2917 51.6083 16.975 51.275C16.6583 50.925 16.5 50.6 16.5 50.3V43H14.25V48.15C14.25 48.7667 14.3167 49.2083 14.45 49.475C14.5833 49.7417 14.8583 49.875 15.275 49.875V50.65L10.15 52.8L9.75 52C10.1167 52 10.4667 51.7833 10.8 51.35C11.1 50.9333 11.25 50.3 11.25 49.45V36.45C11.25 35.4333 10.9083 34.8583 10.225 34.725V34.175L12.75 32.75C13.1167 32.9 13.4583 33.15 13.775 33.5C14.0917 33.8333 14.25 34.15 14.25 34.45V42.45L15.5 41.775H16.5Z"
                fill="#293070"
              />
              <path
                d="M58.3979 43.0767C58.3979 44.2811 58.2393 45.3512 57.9219 46.2871C57.6126 47.2148 57.1854 48.0246 56.6401 48.7163C56.0949 49.408 55.4479 49.9899 54.6992 50.4619C53.9587 50.9339 53.153 51.3164 52.2822 51.6094C51.4196 51.9023 50.5122 52.1099 49.5601 52.2319C48.616 52.3621 47.6639 52.4272 46.7036 52.4272C45.7189 52.4272 44.547 52.3947 43.188 52.3296C41.8371 52.2726 40.3234 52.1628 38.647 52L39.5747 47.52C40.1606 47.6746 40.7751 47.8089 41.418 47.9229C42.0609 48.0286 42.6956 48.1141 43.3223 48.1792L42.5532 38.731C42.0487 38.8286 41.536 38.9344 41.0151 39.0483C40.4943 39.1623 39.9572 39.2884 39.4038 39.4268L38.647 35.5205C39.5666 35.2438 40.474 35.02 41.3691 34.8491C42.2643 34.6782 43.1107 34.5521 43.9082 34.4707C44.7057 34.3812 45.4341 34.3242 46.0933 34.2998C46.7606 34.2673 47.3221 34.251 47.7778 34.251C49.3159 34.251 50.7319 34.4137 52.0259 34.7393C53.328 35.0566 54.451 35.5693 55.395 36.2773C56.339 36.9772 57.0755 37.8887 57.6045 39.0117C58.1335 40.1266 58.3979 41.4816 58.3979 43.0767ZM48.5225 48.4722C49.8327 48.4722 50.9801 48.3135 51.9648 47.9961C52.9577 47.6787 53.7837 47.2718 54.4429 46.7754C55.1102 46.2708 55.6107 45.7134 55.9443 45.103C56.278 44.4845 56.4448 43.8742 56.4448 43.272C56.4448 42.6779 56.3431 42.0798 56.1396 41.4775C55.9443 40.8672 55.6107 40.3138 55.1387 39.8174C54.6667 39.321 54.04 38.9059 53.2588 38.5723C52.4857 38.2386 51.5254 38.0474 50.3779 37.9985C50.0443 37.9823 49.6577 37.9823 49.2183 37.9985C48.8439 38.0148 48.3923 38.0392 47.8633 38.0718C47.3343 38.1043 46.7402 38.1572 46.0811 38.2305L45.6294 48.3745C46.0444 48.4071 46.4269 48.4315 46.7769 48.4478C47.1349 48.4559 47.4442 48.464 47.7046 48.4722C48.0057 48.4803 48.2783 48.4803 48.5225 48.4722Z"
                fill="#293070"
              />
              <line
                x1="35"
                y1="26.95"
                x2="61"
                y2="26.95"
                stroke="black"
                strokeWidth="0.1"
              />
            </svg>
          </div>
        </Link>
        <div className="searchbar">
          <Search />
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/allhotels">
              <li>Hotels</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            {!auth ? (
              <Link to="/login">
                <li>Login</li>
              </Link>
            ) : (
              <Link to="/admin">
                <li>Admin</li>
              </Link>
            )}
          </ul>
        </nav>
        <StyledHamburger onClick={toggleOpen}>
          <div className="bar1" ref={bar1Ref}></div>
          <div className="bar2" ref={bar2Ref}></div>
          <div className="bar3" ref={bar3Ref}></div>
        </StyledHamburger>
      </StyledHeader>
      <AnimatePresence>
        {open && (
          <StyledBurgerNav
            initial={{
              y: "120%",
            }}
            animate={{ y: "0" }}
            exit={{ y: "-150%" }}
          >
            <ul>
              <Link to="/" onClick={toggleOpen}>
                <li>Home</li>
              </Link>
              <Link to="/allhotels" onClick={toggleOpen}>
                <li>Hotels</li>
              </Link>
              <Link to="/contact" onClick={toggleOpen}>
                <li>Contact</li>
              </Link>
              {!auth ? (
                <Link to="/login" onClick={toggleOpen}>
                  <li>Log in</li>
                </Link>
              ) : (
                <Link to="/admin" onClick={toggleOpen}>
                  <li>Admin</li>
                </Link>
              )}
            </ul>
          </StyledBurgerNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

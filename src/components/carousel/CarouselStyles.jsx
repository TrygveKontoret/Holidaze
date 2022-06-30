import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)`
  div {
    border-radius: 0 0 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  .legend {
    height: 200px;
  }
  .control-dots {
    .dot {
      background-color: white;
      width: 15px;
      height: 15px;
    }
  }

  @media (min-width: 768px) {
    div {
      max-height: 300px;

      .slide {
        height: 300px;
      }

      img {
        transform: translate(0, -25%);
      }
    }
  }
  @media (min-width: 900px) {
    div {
      max-height: 350px;

      .slide {
        height: 350px;
      }

      img {
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1100px) {
    div {
      max-height: 400px;

      .slide {
        height: 400px;
      }

      img {
        transform: translate(0, -35%);
      }
    }
  }
  @media (min-width: 1400px) {
    div {
      max-height: 500px;

      .slide {
        height: 500px;
      }

      img {
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1600px) {
    div {
      max-height: 600px;

      .slide {
        height: 600px;
      }

      img {
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1920px) {
    div {
      max-height: 700px;

      .slide {
        height: 700px;
      }

      img {
        transform: translate(0, -30%);
      }
    }
  }
`;

export const StyledDetailCarousel = styled(Carousel)`
  margin: 30px 0;
  .imgCont {
    max-width: 100%;
    height: 400px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const StyledRoomCarousel = styled(Carousel)`
  .imgCont {
    max-width: 100%;
    height: 300px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const StyledWelcome = styled.div`
  position: absolute;
  z-index: 99;
  top: 30%;
  width: 100%;

  div {
    background-color: #ffffffc0;

    margin: 0 auto;
    width: 50%;
    padding: 20px 40px;
    border-radius: 10px;
    h1 {
      text-align: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 1600px) {
    top: 25%;
  }

  @media (max-width: 1400px) {
    top: 20%;
  }

  @media (max-width: 955px) {
    top: 10%;
  }

  @media (max-width: 630px) {
    top: 15%;
    div {
      width: 70%;
    }
  }

  @media (max-width: 547px) {
    top: 13%;
    div {
      width: 75%;
    }
  }

  @media (max-width: 510px) {
    top: 13%;
    div {
      width: 75%;

      h1 {
        font-size: 25px;
      }
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

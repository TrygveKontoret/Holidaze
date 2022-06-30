import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  input {
    width: 80%;
    padding: 5px;

    outline: none;
    border-radius: 5px;
  }
`;

export const StyledSearch = styled.div`
  position: absolute;
  top: 5%;
  width: 40%;
  z-index: 9999;

  .searchRes {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 9999;
    background-color: white;
    border: 1px solid black;

    h4 {
      padding-left: 30px;
    }

    .imgCont {
      height: 80px;
      width: 80px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 768px) {
    .searchRes {
      width: 50vw;
      .imgCont {
        height: 60px;
        width: 60px;
      }

      h4 {
        padding-left: 5px;
        font-size: smaller;
      }
    }
  }

  @media (max-width: 400px) {
    .searchRes {
      width: 50vw;
      .imgCont {
        height: 50px;
        width: 50px;
      }

      h4 {
        padding-left: 5px;
        font-size: smaller;
      }
    }
  }
`;

import styled from "styled-components";

const BoxSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  :hover {
    background-image: linear-gradient(
      25deg,
      #fa3cf9 1.7%,
      #fc587e 50.85%,
      #fc3239 99.99%
    );
    svg path {
      fill: #fff;
    }
  }
`;

export default BoxSocialMedia;

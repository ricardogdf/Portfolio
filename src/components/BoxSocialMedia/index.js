import styled from "styled-components";

const BoxSocialMedia = ({ content }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      width: "40px",
      height: "40px",
      //"&:hover": {
      //  backgroundImage: linearGradient(
      //    "25deg",
      //    "#fa3cf9 1.7%",
      //    "#fc587e 50.85%",
      //    "#fc3239 99.99%"
      //  ),
      //},
    }}
  >
    {content}
  </div>
);

export default BoxSocialMedia;

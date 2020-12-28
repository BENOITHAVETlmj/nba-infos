import styled from "@emotion/styled";

const Card = styled.li({
  border: "1px solid white",
  borderRadius: "3px",
  padding: "1px 50px",
  "&:hover": {
    cursor: "pointer",
    position: "relative",
    top: "-4px",
    boxShadow: "0 0 20px #10344f",
  },
});

export { Card };

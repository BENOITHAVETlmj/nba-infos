import styled from "@emotion/styled";

const Button = styled.button({
  backgroundColor: "rgb(251, 72, 72)",
  color: "white",
  border: "3px solid white",
  borderRadius: "4px",
  "&:hover": {
    cursor: "pointer",
    position: "relative",
    top: "-2px",
    backgroundColor: "rgb(224, 17, 17)",
  },
  " &:disabled": {
    opacity: "0.4",
  },
});

export { Button };

import styled from "@emotion/styled";

const ButtonVariants = {
  primary: {
    color: "white",
    backgroundColor: "rgb(251, 72, 72)",
    "&:hover": {
      cursor: "pointer",
      position: "relative",
      top: "-2px",
      backgroundColor: "rgb(224, 17, 17)",
    },
  },
  secondary: {
    color: "white",
    backgroundColor: "#01589b",
    "&:hover": {
      cursor: "pointer",
      position: "relative",
      top: "-2px",
      backgroundColor: "#014477",
    },
  },
};

const Button = styled.button(
  {
    border: "3px solid white",
    borderRadius: "4px",
    " &:disabled": {
      opacity: "0.4",
    },
  },
  ({ variant = "primary" }) => ButtonVariants[variant]
);

export { Button };

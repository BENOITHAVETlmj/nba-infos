import React from "react";
import ReactDom from "react-dom";
import useClickOutside from "../hooks/useClickOutside";

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "40px",
  width: "40%",
  zIndex: 3,
  maxHeight: "70%",
  overflow: "auto",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "black",
  opacity: 0.5,
  zIndex: 3,
};

const Modal = React.forwardRef(({ open, children, onClose }, ref) => {
  useClickOutside(ref, () => {
    if (open) onClose();
  });
  if (!open) return null;
  console.log(open);

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLE} ref={ref}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
});

export default Modal;

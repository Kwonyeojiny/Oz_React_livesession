const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
  },
};

const Modal = ({ children }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}> {children}</div>
    </div>
  );
};

export default Modal;

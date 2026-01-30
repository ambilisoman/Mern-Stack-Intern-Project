function Button(props) {
  return (
    <button
      style={{
        padding: "10px 15px",
        background: "blue",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;

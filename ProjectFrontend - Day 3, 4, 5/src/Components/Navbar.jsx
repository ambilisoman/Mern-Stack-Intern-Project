function Navbar(props) {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff" }}>
      <h2>{props.title}</h2>
    </nav>
  );
}

export default Navbar;
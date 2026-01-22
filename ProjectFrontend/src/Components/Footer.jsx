function Footer(props) {
  return (
    <footer style={{ padding: "10px", background: "#222", color: "#fff", marginTop: "20px" }}>
      <p>{props.text}</p>
    </footer>
  );
}

export default Footer;

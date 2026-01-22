import Button from "./Button";

function Card(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", width: "250px" }}>
      <img src={props.image} alt="card" width="100%" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Button label={props.buttonLabel} />
    </div>
  );
}

export default Card;

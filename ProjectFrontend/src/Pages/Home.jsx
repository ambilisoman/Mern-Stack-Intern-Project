import Card from "../Components/Card";

function Home() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Card
        title="React Basics"
        description="React for begineers"
        image="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"
        buttonLabel="Learn More"
      />

      <Card
        title="Frontend Dev"
        description="HTML, CSS & JS"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXwLIZaPTYBwVr990VS_jx0trhiIRLJMP8g&s"
        buttonLabel="Enroll"
      />
    </div>
  );
}

export default Home;

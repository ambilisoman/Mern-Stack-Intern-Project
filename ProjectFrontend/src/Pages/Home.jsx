import Card from "../Components/Card";

function Home() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Card
        title="React Basics"
        description="Learn React from scratch"
        image="https://via.placeholder.com/250"
        buttonLabel="Learn More"
      />

      <Card
        title="Frontend Dev"
        description="HTML, CSS & JS"
        image="https://via.placeholder.com/250"
        buttonLabel="Enroll"
      />
    </div>
  );
}

export default Home;

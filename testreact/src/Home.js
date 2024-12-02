const Home = () => {
  const handleClick = () => {};

  return (
    <div className="Home">
      <h3
        style={{
          color: "blue",
        }}
      >
        Practice your English skills
        <button onClick={handleClick}>Click Me</button>
      </h3>
    </div>
  );
};

export default Home;

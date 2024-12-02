const Home = () => {
  const handleClick = (e) => {
    console.log("hello,ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div className="Home">
      <h3
        style={{
          color: "blue",
        }}
      >
        Practice your English skills
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickAgain("Clara", e)}>
          Click Me Again
        </button>
      </h3>
    </div>
  );
};

export default Home;

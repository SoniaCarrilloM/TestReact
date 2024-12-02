const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>English Skills</h1>
      <div className="links">
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8",
            padding: 10,
          }}
        >
          Home
        </a>
        <a href="/">Reading</a>
        <a href="/">Writing</a>
        <a href="/">Watching</a>
        <a href="/">Listening</a>
        <a href="/">Speaking</a>
      </div>
    </nav>
  );
};

export default Navbar;

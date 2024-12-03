const AssignList = (props) => {
  const assign = props.assign;
  const title = props.title;

  return (
    <div className="blog-list">
      <h3
        style={{
          color: "blue",
          padding: 8,
        }}
      >
        {" "}
        {title}{" "}
      </h3>
      {assign.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Skill: {blog.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default AssignList;

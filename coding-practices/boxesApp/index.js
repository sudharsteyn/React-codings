const Box = (props) => {
  const { className, content } = props;
  return (
    <div className={className}>
      <p>{content}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small-box" content="Small" />
      <Box className="medium-box" content="medium" />
      <Box className="large-box" content="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

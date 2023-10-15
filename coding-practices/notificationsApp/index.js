const Notification = (props) => {
  const { icon, content, className } = props;
  return (
    <div className={`notification-card ${className}`}>
      <img src={icon} className="img" />
      <p>{content}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <div>
      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
        className="primary"
      />
      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
        className="success"
      />
      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
        className="warning"
      />
      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Error Message"
        className="danger"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

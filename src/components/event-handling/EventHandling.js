const SimpleEvent = () => {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

const EventHandling = () => {
  return (
    <div>
      <h3>Event hanling</h3>
      <SimpleEvent />
    </div>
  );
};
export default EventHandling;

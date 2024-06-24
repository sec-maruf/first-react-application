function App(props) {
  const currDate = new Date();
  return (
    <div>
      <h1>S M MARUF</h1>
      <h2>Ii is now {currDate.toLocaleDateString()} and The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}
export default App;

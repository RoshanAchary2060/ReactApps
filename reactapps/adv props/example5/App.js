class App extends React.Component {
  render() {
    return (
      <div>
        <Greetings who="Sachin" from="Roshan" />
        <Greetings who="Sachin" />
        <Greetings from="Roshan" />
        <Greetings />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<App />);

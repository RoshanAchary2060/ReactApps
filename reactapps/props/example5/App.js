class App extends React.Component {
  render() {
    return (
      <div>
        <Greetings who="Varun" from="Sachin" />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
ReactDOM.render(<App />, myDiv);

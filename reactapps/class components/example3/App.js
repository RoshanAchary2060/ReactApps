class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
ReactDOM.render(<App />, myDiv);

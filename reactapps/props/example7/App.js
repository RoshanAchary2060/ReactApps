class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Emoji Picker!!!</h3>
        <Emoji e1="😊" e2="😁" e3="😂" />
        <Emoji e1="👍" e2="👍" e3="👍" />
        <Emoji e1="🧨" e2="✨" e3="🎈" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

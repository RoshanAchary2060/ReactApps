function getNumber() {
  let myNums = [10, 4, 5, 6, 7, 8, 66, 44, 55, 66, 71, 32];
  let num = myNums[Math.floor(Math.random() * myNums.length)];
  return num;
}
class RandomNum extends React.Component {
  render() {
    const num = getNumber();
    let msg = "";
    if (num == 6) {
      msg = (
        <p>
          <h3>COngratulations! You won</h3>
          <img src="../../images/congrats.gif" />
        </p>
      );
    } else {
      msg = <small>Sorry! Better luck next time</small>;
    }
    return (
      <div>
        <p>Number is {num}</p>
        {msg}
      </div>
    );
  }
}

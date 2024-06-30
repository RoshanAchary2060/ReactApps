class Student extends React.Component {
  render() {
    let studentStyle = {
      backgroundColor: "skyBlue",
      borderRadius: "20px",
      border: "dashed 3px darkBlue",
      fontFamily: "'Macondo',cursive",
    };
    let pass = { backgroundColor: "limeGreen" };
    let fail = { backgroundColor: "crimson" };
    let { subjects, marks } = this.props;
    let total = 0;
    let arr = [];
    arr = marks.map((m) => {
      total += m;
      return <li>{m}</li>;
    });
    let isPass = total >= 150;
    return (
      <div style={studentStyle}>
        <h3>Student Details...!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Subjects:</p>
        <ul>{arr}</ul>
        <p>Marks:</p>
        <ul>
          {marks.map((m) => (
            <li>{m}</li>
          ))}
        </ul>
        <p>Total:{total}</p>
        <p>
          <span style={isPass ? pass : fail}>
            Result:<b>{isPass ? "Pass" : "Fail"}</b>
          </span>
        </p>
      </div>
    );
  }
}

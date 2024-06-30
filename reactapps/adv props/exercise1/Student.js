class Student extends React.Component {
  render() {
    let { subjects, marks } = this.props;
    let total = 0;
    marks.forEach((m) => (total += m));
    return (
      <div>
        <h3>Student Details...!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Subjects:</p>
        <ul>
          {subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>Marks:</p>
        <ul>
          {marks.map((m) => (
            <li>{m}</li>
          ))}
        </ul>
        <p>Total:{total}</p>
        <p>
          Result:<b>{total >= 150 ? "Pass" : "Fail"}</b>
        </p>
      </div>
    );
  }
}

class Student extends React.Component {
  render() {
    return (
      <div>
        <h3>Student Details!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Subjects:{this.props.subjects.join()}</p>
        <p>Marks:{this.props.marks.join(",")}</p>
        <p>Pass:{String(this.props.isPass)}</p>
      </div>
    );
  }
}

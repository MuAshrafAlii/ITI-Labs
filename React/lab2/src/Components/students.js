let Students = function ({ list }) {
  //{list:[{}]}
  // let Students = props.list;

  let RenderStudents = (All) => {
    console.log(All);
    if (All.length) {
      return (
        <div className="students">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {All.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <p>No Students</p>
        </div>
      );
    }
  };

  return (
    <div className="searchComp">
      <div class="fw-bold text-center text-info my-2">
        <p>Students</p>
      </div>
      {RenderStudents(list)}
    </div>
  );
};
export default Students;

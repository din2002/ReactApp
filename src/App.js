import Add from "./Components/Add";
import Students from "./Components/Students";

function App() {
  var student={
    "name":"Dinesh",
    "roll_no":27,
    "city":"NSP",
    "age":19
  }
  function showData(){
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data=>{
      console.table(data.data)
    })

  }
  return (
    <>
    <h1> Hello Dinesh</h1>
    <button onClick={showData}>Click Me</button>
    <Add/>
    <Students data={student}/>
    </>
  );
  }

  export default App;
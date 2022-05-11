import { useState } from "react";

const addStudent = (props) => {

    const student = {
        name: "",
        email: "",
        description: "",
        tags: "",
        subject: ""
      };
    const{setStudents, students} = props;

    const [newStudent, setNewStudent] = useState("");

    const studentHTML = toDos.map((it, i)=>{
        return <p key={i}>{it}</p>
      });

    const handleNewInput = (event) => {
        setNewToDo(event.target.value);
    }

    const handleNewStudent = () => {
        const data = {}
        setToDos(toDos.concat([newToDo]));
        setNewToDo("");
    }

    return (
        <>
        <input value={student.name} onChange={handleNewInput} />
        <input value={student.email} onChange={handleNewInput} />
        <input value={student.desription} onChange={handleNewInput} />
        <input value={student.tags} onChange={handleNewInput} />
        <input value={student.subject} onChange={handleNewInput} />
        <button value="Add new student" onClick={handleNewStudent} type="button">Add</button>
        {studentHTML}
        </>
    )
}
export default addStudent;
import { useState } from "react";

const addStudent = (props) => {

    const student = {
        name: "",
        email: "",
        description: "",
        tags: "",
        subject: ""
    };
    const {students, setStudents} = props;
    const [newStudent, setNewStudent] = useState("");

    const studentHTML = students.map((it, i) => {
        return <p key={i}>{it}</p>
    });

    const handleNewInput = (event) => {
        setNewToDo(event.target.value);
    }

    const handleNewStudent = () => {
        const data = {}
        setStudents(students.concat([newStudent]));
        setNewToDo("");
    }

    return (
        <div>
            <input value={student.name} onChange={handleNewInput} />
            <input value={student.email} onChange={handleNewInput} />
            <input value={student.description} onChange={handleNewInput} />
            <input value={student.tags} onChange={handleNewInput} />
            <input value={student.subject} onChange={handleNewInput} />
            <button value="Add new student" onClick={handleNewStudent} type="button">Add</button>
            {studentHTML}
        </div>


    )
}
export default addStudent;
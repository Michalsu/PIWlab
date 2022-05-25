import React, { useState, useContext} from "react";
import UserContext from "../data/UserContext";
import Photo from "../components/Photo";

const Home = (props) => {

    const [userName, setUserName] = useContext(UserContext);


  const {students, setStudents} = props;

  const handleNewInput = (event) => {

    // setNewToDo(event.target.value);
  }
  const handleNewToDo = () => {
    // setToDos(toDos.concat([newInputRef.current.value]));
    // // setNewToDo("");
    // newInputRef.current.value = ""
  }
  const noticeNameHTML = students.map((it, i)=>{
    return <p key={i}>
      <Photo></Photo>
    {it.name}<br></br>
    {it.description}<br></br>
    {it.tags}<br></br>
    {it.subject}</p>
  })


  return (
    <>
      <input value={setStudents} onChange={handleNewInput} />
      <button value="Add new TODO" onClick={handleNewToDo} type="button">Add</button>
      {noticeNameHTML}
    </>
  )
}


export default Home;
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from './pages/Search';
import Notices from './pages/Notices';
import Login from './pages/Login';
import { logout } from './firebase/users'
import userEvent from '@testing-library/user-event';


function App() {

  const [toDos, setToDos] = useState(["Jamnik", "Pies", "Kot", "Kotowlaz"]);
  const [newToDo, setNewToDo] = useState("");

  const LogOutButton = [];
 
  const[students, setStudents] =useState([
    {name: "Adam", email: "adam12@bat.pl", description: "lubi lutowac, je koty", tags: "fronted, reactjs", subject: "PIW, PZ, BD2"},
    {name: "Karol", email: "Karol@cat.pl", description: "Lorem ipsum, lubi koty", tags: "backend, php", subject: "PIW, PZ, UCISW"},
    {name: "Kasia", email: "Kasia@bat.pl", description: "świetnie tańczy, lubi psy", tags: "frontend, SQL", subject: "UCISW, PZ, BD2"},
    {name: "Piotr", email: "Piotr@cat.pl", description: "Ipsum lorem, Lorem ipsum", tags: "backend, reactjs, SQL", subject: "PIW, RIPO, BD2"},
    {name: "Władek", email: "Wladek@dog.pl", description: "chce się nauczyć lutowac", tags: "backend, frontend, JQuery", subject: "PIW, PZ, IZ"},
  ])

  const addStudent = (newStudent) => {
    setStudents(students.concat([newStudent]));
  }

  return (
    <div className="App">
      <header>
        <h2> Group projects</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>{"  "}
          <NavLink to="/login">Login</NavLink>{"  "}
          <NavLink to="/register">Rejestracja</NavLink>{"  "}
          <NavLink to="/search">Search</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents}/> } />
          <Route path="/login" element={<Login  />} />
          <Route path="/search" element={<Notices students={students} setStudents={setStudents}/>} />
          <Route path="/register" element={<addStudent students={students} setStudents={setStudents}/>} />

        </Routes>
        
        </BrowserRouter>
      </main>


      <footer>footer
       {/* {user && <LogOutButton>who={userEvent.displayName}</LogOutButton>} */}




      </footer>
    </div>
  );
}

export default App;

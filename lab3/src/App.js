import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from './pages/Search';
import Notices from './pages/Notices';

function App() {

  const [toDos, setToDos] = useState(["Jamnik", "Pies", "Kot", "Kotowlaz"]);
  const [newToDo, setNewToDo] = useState("");
 
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
        <h2> This is header</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/nie_ma">nie klikac</NavLink>
          <NavLink to="/student">nowy student</NavLink>
          <NavLink to="/notices">Notices</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home toDos={toDos} setToDos={setToDos}/> } />
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
          <Route path="/search" element={<Search toDos={toDos} setToDos={setToDos}/>} />
          <Route path="/notices" element={<Notices students={students} setStudents={setStudents}/>} />
          <Route path="/student" element={<addStudent students={students} setStudents={setStudents}/>} />

        </Routes>
        
        </BrowserRouter>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import './App.css';

import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            {/* --- Route components go here --- */}
            <Route path='/' element={< NotesPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

/* === Notes === */
// export default function App
  // useState hook = The initial value of user is obtained by getUser() fnc in user-service

  // return statement
    //  main element 
        // if user: 
          // show NavBar, 
          // put routes here 
        // if no use:
          // show auth page



/* === References === */
// ! useState hook
// * const [stateVariable, setStateVariable] = useState(initialValue);
  /* stateVariable: variable that holds current state value.
  setStateVariable: This is the FUNCTION used to update the state. when you call with a new value, React will re-render the component with the updated state.
  initialValue: This is the initial value of the state variable.

  setStateVariable
    Updating State --> setStateVariable(newValue);
    functional update --> setStateVariable(prevState => prevState + 1);
    using obect or array state -->
      * Object
      const [user, setUser] = useState({ name: '', age: 0 });
      setUser({ ...user, name: 'John' });
      * Array
      const [todos, setTodos] = useState([]);
      setTodos([...todos, newTodo]);
*/
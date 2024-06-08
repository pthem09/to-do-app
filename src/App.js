import './App.css';

import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from './Components/ToDoList/ToDoList';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Manage your tasks</h1>
      </header>
      <main>
        <ToDoForm />
        <ToDoList />
      </main>
    </div>
  );
}
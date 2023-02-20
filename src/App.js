import './App.css';
import { ApiUse } from './Components/ApiUse';
import { TodoList } from './Components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/apiuse" element={<ApiUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

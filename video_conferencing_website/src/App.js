import { Routes, Route } from "react-router-dom";
import {CallPage, HomePage, NoMatch} from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/:id' element={<CallPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
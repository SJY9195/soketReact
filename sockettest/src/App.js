import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatWindow from './pages/ChatWindow';
import Main from './pages/Main';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/chatWindow/:userId' element={<ChatWindow/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

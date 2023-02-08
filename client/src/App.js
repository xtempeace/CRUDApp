import logo from './logo.svg';
import './App.css';

//components
import AddUser from './components/AddUser.jsx';
import NavBar from './components/NavBar.jsx';
import CodeforInterview from './components/CodeforInterview.jsx';
import AllUsers from './components/AllUsers.jsx';
import EditUser from './components/EditUser';

//for enabling routing,but here we use web browser routing which is default routing which is based on url address,
//web browser routing means jaesae-2 url change hoga component change hongae  
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CodeforInterview />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
    //</div>
  );
}

export default App;

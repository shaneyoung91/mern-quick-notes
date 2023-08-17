import { useState } from 'react';
// Add the following import
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotePage from '../NotePage/NotePage';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <br></br>
          <NotePage user={user}/>
          {/* <Routes>
            <Route path ="/orders/new" element={<NewOrderPage />} />
            <Route path ="/orders" element={<OrderHistoryPage />} />
          </Routes> */}
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


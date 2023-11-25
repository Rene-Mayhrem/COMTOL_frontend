import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home.jsx';
import UserInfo from './pages/user/main/UserInfo.jsx';
import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext.js';
import { useState } from 'react';
import Magazine from './pages/magazine/Magazine.jsx';
import GoogleModal from './feature/container/authentication/GoogleModal.js';
import { AuthContextProvider, UserAuth } from './context/AuthContext.jsx';

function App() {

  // const { user } = UserAuth();
  //? Creating state buttons
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const [googleModal, setGoogleModal] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'light' ? 'dark' : 'light'));
    setChecked(nextChecked);
  }

  return (
    //? Adding comment to return function
    <AuthContextProvider>
      <div className={`app-container app-${contextTheme}`}>
        <div className="row">
          <div className={`header header-${contextTheme}`}>
            <div className='app-logo'>
              <Link to="/">CT</Link>
            </div>
            <div className='search-bar'>
              <span className="material-symbols-outlined">
                search
              </span>
            </div>
            {/* <Link to="/">Home</Link>
          <Link to="/user-info">User info</Link> */}
            <button onClick={() => { setGoogleModal(true) }} className={`btn btn-${contextTheme}-log`}>Iniciar sesion</button>
            <Link to="/user-info" className={`btn btn-${contextTheme}-info`}>
              {/* <div> Welcome, {user?.displayName} </div> */}
            </Link>
            <button className={`btn btn-${contextTheme}-create`}>Crear nota</button>
            <button className={`btn btn-${contextTheme}-create`}>Crear noticia</button>
            <ReactSwitch
              className={`react-switch btn-mode ${contextTheme === 'dark' ? 'light' : 'dark'}`}
              onChange={handleSwitch}
              checked={checked}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={45}
              uncheckedIcon={true}
              checkedIcon={true}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={50}
              width={100}
              id="material-switch"
            />

          </div>
        </div>

        {googleModal && <GoogleModal setGoogleModal={setGoogleModal} />}

        <div className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user-info' element={<UserInfo />} />
            <Route path='/magazine' element={<Magazine />} />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;

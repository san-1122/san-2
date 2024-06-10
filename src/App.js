import './App.css';
import LoginLogout from './components/login-logout/login-logout';
import Routed from './routes';


function App() {
  return (
    <div>
    {/* <LoginLogout/> */}
    <Routed/>
    </div>
  );
}

export default App;



// import React from 'react';
// import CookieConsent from './components/cookie';

// const App = () => {
//   const [cookies] = useCookies(["cookieConsent"]);
  
//   return (
//     <div className="app">
//       <h1>Welcome to my website</h1>
//       {!cookies.cookieConsent && <CookieConsent />}
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import CookieConsent from './components/cookie';
// import { useCookies } from 'react-cookie';
// const App = () => {
//   const [cookies] = useCookies(["cookieConsent"]);
  
//   return (
//     <div className="app">
//       <h1>Welcome to my website</h1>
//       {!cookies.cookieConsent && <CookieConsent/>}
//     </div>
//   );
// };

// export default App;
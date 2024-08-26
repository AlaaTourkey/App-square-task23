import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

// Wrapper component to provide navigation as a prop
function LoginWithNavigate() {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
}

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LoginWithNavigate />, // Use the wrapper component
    },
    {
      path: '/home',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

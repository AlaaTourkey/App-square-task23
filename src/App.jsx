import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Login from './components/Login/Login';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import Dashboard from './components/Dashboard/Dashboard';

let routes = createBrowserRouter([
  {
    path:'/', element: <Layout/>, children:[
      {path: 'home' , element: <Home/>},
      {path: 'about' , element: <About/>},
      {path: 'login' , element: <Login/>},
    ]
  },
  {
    path:'DashboardLayout', element: <DashboardLayout/>, children:[
      {path: 'Dashboard' , element: <Dashboard/>},
    ]
  },
])

function App() {

  return <RouterProvider router={routes} />;
}

export default App;

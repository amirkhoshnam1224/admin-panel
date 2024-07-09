import './App.css';
import { useRoutes } from 'react-router-dom'
import Routes from './routes';
import Topbar from './components/topbar/Topbar';
import SideBar from './components/sidebar/SideBar.jsx'
function App() {
  let newroutes = useRoutes(Routes)
  return (
    <>
      <Topbar />
      <div className='container'>
        <SideBar />
        {newroutes}
      </div>
    </>
  );
}

export default App;

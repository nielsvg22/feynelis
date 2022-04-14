
import './App.css';
import feyenoord from './assets/feyenoord.png'
import react, {Table} from 'react'
import {Link} from "react-router-dom";
import logo from './assets/kuip.png';
import HeaderKuip from './compenents/HeaderKuip';
import Banner from './compenents/Banner';
import Standings from './compenents/Standings';
import Matches from './compenents/Matches';
import Sidebar from './compenents/Sidebar';

function App() {
  return (
   
    <div class="main">
        <HeaderKuip />
        
        <Matches />
        <Banner />
        <Standings />
        <div>
        
      </div>
        
    
    </div>
   
    
   
   
  )
}
export default App;

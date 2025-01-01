
import './App.css'

import NavBar from './components/NetFlix/NavBar/NavBar'
import Banner from './components/NetFlix/Banner/Banner'
import RowPost from './components/NetFlix/RowPost/RowPost'


import { original, action } from './url'
//netflix

const App = () => {
 
  return (
      <div>
        <NavBar/>
        <Banner/>
        <RowPost url ={original} title='Netflix Originals'/>
        <RowPost url={action} title='Action' isSmall={true}/>
      </div>
  )
}

export default App ;






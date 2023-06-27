import './App.css';
import Banner from './Components/Banner.js/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { originals, action, trending } from './urls';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Trending' />
    </div>
  );
}

export default App;

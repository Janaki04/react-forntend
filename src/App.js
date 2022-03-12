
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Fashion from './Components/Fashion';
import Laptops from './Components/Laptops';
import Mobiles from './Components/Mobiles';
import Accesories from './Components/Accesories';
import { Provider } from './Components/Createcontext';
import Profile from './Components/Profile';
import Addcart from './Components/Addcart';


function App() {
  return (
    <div className="App">
<Provider>
<Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/fashion' element={<Fashion />} />
           <Route path='/laptops' element={<Laptops />} />
           <Route path='/mobiles' element={<Mobiles/>}/>
           <Route path='/accesories' element={<Accesories />} />
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/addcart' element={<Addcart/>}/>

         </Routes>
       </Router>
       </Provider>
</div>
  );
}

export default App;

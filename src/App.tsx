import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import List from "./components/List";
import Profil from './pages/Profil';
//REDUX
import { Provider } from "react-redux";
import { store } from './redux';
import Description from "./components/Description";


const App = () => {
  return (
<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path='/list' Component={List}/>
<Route path='/' Component={Home}/>
<Route path='/profil' Component={Profil}/>
<Route path='/description/:id' Component={Description}/>

</Routes>
</BrowserRouter>
</Provider>
  );
};

export default App;
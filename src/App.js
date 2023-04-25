
import { Routes , Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";






const Shop = () => {
return <h1>I am a shop page</h1>
 

};

const App = () => {
    
  return (
    <>
    <Navigation/>
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/> 
        <Route path='auth' element={<Authentication/>} />  
    </Routes>
    </>
    );
};

export default App;

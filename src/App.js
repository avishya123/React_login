import Loginpage from "./logincomponents/Login";
 import Register from "./logincomponents/Register";
 import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
<Route path="/login" element={<Loginpage/>}/>
<Route path="/register" element={<Register/>}/>
</Routes> 
     
    </div>
    </Router>
  );
}

export default App;

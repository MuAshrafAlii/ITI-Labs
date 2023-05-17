import Header from './Components/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './Components/error';
import Home from './Components/home';
import Profile from './Components/profile';
import StudentDetails from './Components/studentDetails';
import Students from './Components/students';
import Register from './Components/register';

function App() {
 
  return (
    <div >
    <div className="allComp">
        <BrowserRouter>
             <div className="header">
                 <Header/>
             </div>
             <div class="mt-5 d-flex justify-content-center align-items-center ">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home/>}>
                    <Route path="Register" element={<Register />}/>
                    <Route path="students" element={<Students/>}/>
                </Route>
                <Route path="/students/:id" element={<StudentDetails/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
</div>
  );
}

export default App;

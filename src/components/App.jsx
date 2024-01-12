import Header from "./Header/Header";
import Employees from "./Employees/Employees";
import Employee from "./Employee/Employee";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Employees />}></Route>
                <Route path="/employees" element={<Employees />}></Route>
                <Route path="/add-employee" element={<Employee />}></Route>
                <Route path="/employee/:id" element={<Employee />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default App;
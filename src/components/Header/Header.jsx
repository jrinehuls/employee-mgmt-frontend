import './Header.css'

function Header () {
    return(
        <div>
            <header>
                <nav className='navbar'>
                    <span>Employee Management System</span>
                    <div className='nav-container'>
                        <a href='http://localhost:5173/employees'>Get All Employees</a>
                        <a href='http://localhost:5173'>Get All Employees</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;

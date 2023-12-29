import styles from './Header.module.css'

function Header () {
    return(
        <div>
            <header>
                <nav className={styles.navbar}>
                    <span>Employee Management System</span>
                    <div className={styles.navContainer}>
                        <a href='http://localhost:5173/employees'>Get All Employees</a>
                        <a href='http://localhost:5173'>Get All Employees</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;

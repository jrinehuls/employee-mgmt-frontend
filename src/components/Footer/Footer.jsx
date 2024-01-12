import './Footer.css'

function Footer() {
    return(
        <div>
            <footer className='footer'>
                &copy; {new Date().getFullYear()} Justin Rinehuls
            </footer>
        </div>
    );
}

export default Footer;

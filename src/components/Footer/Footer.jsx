import styles from './Footer.module.css'

function Footer() {
    return(
        <div>
            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Justin Rinehuls
            </footer>
        </div>
    );
}

export default Footer;

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './footer.module.css'
function Footer() {
    return (
    
    <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook /></li>
            <li><FaLinkedin /></li>
            <li><FaInstagram /></li>
        </ul>
        <p>Nosso rodapé</p>
    </footer>
    
    )
}

export default Footer
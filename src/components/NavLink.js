import styles from '../../styles/components/navlink.module.scss'
import { useRouter } from 'next/router'

const NavLink = ({ children ,href }) => {
    const router = useRouter()
    return(
        <div className={styles['nav-item-container']} onClick={() => router.push(href)}>
            {children}
        </div>
    )
};

export default NavLink;
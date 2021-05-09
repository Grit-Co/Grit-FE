import styles from '../../styles/components/navitem.module.scss'

const NavItem = ({ children, text, selected }) => (
    <div className={styles['nav-item-container']}>
        {children}
        <p className={selected ? styles.selected : styles.item}>{text}</p>
    </div>
);

export default NavItem;
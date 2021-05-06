// import styles from '../../../styles/components/list-item.modules.css'
import styles from '../../../styles/components/listitem.module.scss'

const ListItem = ({ children }) => (
    <li className={styles['list-item']}>{children}</li>
)

export default ListItem;
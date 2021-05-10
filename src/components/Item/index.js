import UserIcon from '../UserIcon'
import styles from './item.module.scss'

const Item = ({title, description}) => {

  return (
    <div className={styles.container}>
        <div>
          <UserIcon />
        </div>
        <div>
          <h3>{ title }</h3>
          <p className={styles.date}>{description}</p>
        </div>
    </div>
  )
}

export default Item;
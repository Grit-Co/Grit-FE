import styles from './status-update.module.scss'
import ThumbsUp from '../../icons/ThumbsUp'
import Message from '../../icons/Message'
import UserIcon from '../UserIcon'

const StatusUpdate = ({ update }) => {

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <UserIcon />
                <div className={styles.userStatusInfo}>
                    <h6>{update.userName}</h6>
                    <p className={styles.date}>{update.date}</p>
                </div>
            </div>
            <div className={styles.update}>
                <h6>{update.status}</h6>
                <p>{update.updateItem}</p>
            </div>
            <div className={styles.responses}>
                <p>{update.reactions}</p>
            </div>
            <div className={styles.actionContainer}>
                <div className={`${styles.leftCol} ${styles.col}`}>
                    <ThumbsUp />
                </div>
                <div className={`${styles.rightCol} ${styles.col}`}>
                    <Message />

                </div>
            </div>
        </div>
    )
}

export default StatusUpdate;
import styles from './status-update.module.scss'
import ThumbsUp from '../../icons/ThumbsUp'
import Message from '../../icons/Message'
import UserIcon from '../UserIcon'

const StatusUpdate = () => {

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <UserIcon />
                <div>
                    <h6>Lisa Ng</h6>
                    <p className={styles.date}>Today at 3:53 PM</p>
                </div>
            </div>
            <div className={styles.update}>
                <h6>Completed a Task!</h6>
                <p>Read 1 chapter of book</p>
            </div>
            <div className={styles.responses}>
                <p>You and 6 others gave kudos </p>
            </div>
            <div className={styles.actionContainer}>
                <div className={styles.leftCol}>
                    <ThumbsUp />
                </div>
                <div className={styles.rightCol}>
                    <Message />

                </div>
            </div>
        </div>
    )
}

export default StatusUpdate;
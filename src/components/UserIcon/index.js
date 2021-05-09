import styles from './user-icon.module.scss'
import Image from 'next/image'

const UserIcon = () => (
    <div className={styles.userIcon}>
        <Image 
            src="/user-img.png"
            alt="user profile img"
            width={40}
            height={40}
        />
    </div>
);

export default UserIcon; 
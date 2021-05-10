import styles from './user-icon.module.scss'
import Image from 'next/image'

const UserIcon = ({ img }) => (
    <div className={styles.userIcon}>
        <Image 
            src={`/${img}-img.png`}
            alt="user profile img"
            width={40}
            height={40}
        />
    </div>
);

export default UserIcon; 
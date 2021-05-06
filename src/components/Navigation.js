import styles from '../../styles/components/navigation.module.scss'
import Vector from '../icons/Vector'
import Button from './Button'

export default function Setup() {
    return (
        <nav className={styles.navbar}>
        <Vector />
            <h3>Set Goal</h3>
            {/* <Button
                text='Skip'
                isPrimary={false}
            /> */}
            <p>Skip</p>
        </nav>
    )
}
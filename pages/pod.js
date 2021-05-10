import FooterNav from '../src/components/FooterNav'
import Plus from '../src/icons/Plus'
import SectionHeader from '../src/components/SectionHeader'
import StatusUpdate from '../src/components/StatusUpdate'
import Title from '../src/components/Title';
import User from '../src/icons/User'
import styles from '../styles/pod.module.scss'

export default function Pod() {

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <Title text='Pod' />
                    <div>
                        <User />
                        <Plus />
                    </div>
                </div>
                <SectionHeader section='pod' text='Your Pod' />
                <StatusUpdate />
            </main>
            <FooterNav />
        </div>
    )
}
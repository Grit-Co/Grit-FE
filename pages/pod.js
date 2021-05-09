import User from '../src/icons/User'
import Plus from '../src/icons/Plus'
import Title from '../src/components/Title';
import SectionHeader from '../src/components/SectionHeader'
import StatusUpdate from '../src/components/StatusUpdate'
import styles from '../styles/pod.module.scss'
import FooterNav from '../src/components/FooterNav'

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
import Plus from '../src/icons/Plus'
import Title from '../src/components/Title';
import SectionHeader from '../src/components/SectionHeader'
import styles from '../styles/goals.module.scss'

export default function Community() {

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <Title text='Community' />
                    <div>
                        <Plus />
                    </div>
                </div>
                <SectionHeader section='pod' text='Your Communities' />
            </main>
        </div>
    )
}
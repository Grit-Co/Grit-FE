import User from '../src/icons/User'
import Plus from '../src/icons/Plus'
import Title from '../src/components/Title';
import SectionHeader from '../src/components/SectionHeader'
import StatusUpdate from '../src/components/StatusUpdate'
import styles from '../styles/pod.module.scss'
import FooterNav from '../src/components/FooterNav'

export default function Pod() {
    const updates = [
        {
            id: '1',
            userName: 'Lisa White',
            date: 'Today at 3:53 PM',
            status: 'Completed a Task!',
            updateItem: 'Read 1 chapter of book',
            reactions: 'You and 6 others gave kudos'
        },
        {
            id: '2',
            userName: 'Yumeng Luo',
            date: 'Today at 6:52 PM',
            status: 'Completed a Goal!',
            updateItem: 'Get Promoted',
            reactions: 'You and 10 others gave kudos'
        },
        {
            id: '3',
            userName: 'Christina Ng',
            date: 'Today at 3:53 PM',
            status: 'Completed a Task!',
            updateItem: 'Read 1 chapter of book',
            reactions: 'You and 6 others gave kudos'
        },
    ]

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
                {
                    updates.map(update => (
                        <StatusUpdate 
                            key={update.id}
                            update={update}
                        />
                    ))
                }
            </main>
            <FooterNav />
        </div>
    )
}
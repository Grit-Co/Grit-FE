import React from 'react';
import FooterNav from '../src/components/FooterNav';
import Plus from '../src/icons/Plus';
import SectionHeader from '../src/components/SectionHeader';
import StatusUpdate from '../src/components/StatusUpdate';
import Title from '../src/components/Title';
import User from '../src/icons/User';

import styles from '../styles/pages/pod.module.scss';

export default function Pod() {
    const updates = [
        {
            id: '1',
            img: 'christina',
            userName: 'Christina Ng',
            date: 'Today at 3:53 PM',
            status: 'Completed a Task!',
            updateItem: 'Read 1 chapter of book',
            reactions: 'You and 6 others gave kudos'
        },
        {
            id: '2',
            img: 'yumeng',
            userName: 'Yumeng Luo',
            date: 'Today at 6:52 PM',
            status: 'Completed a Goal!',
            updateItem: 'Get Promoted',
            reactions: 'You and 10 others gave kudos'
        },
        {
            id: '3',
            img: 'dianne',
            userName: 'Dianne Young',
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
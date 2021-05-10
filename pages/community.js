import FooterNav from '../src/components/FooterNav'
import Item from '../src/components/Item';
import Plus from '../src/icons/Plus'
import SearchBar from '../src/components/SearchBar'
import SectionHeader from '../src/components/SectionHeader'
import Title from '../src/components/Title';
import styles from '../styles/community.module.scss'

export default function Community() {

    const mockCommunities = [
        {
            title: "BizWomen",
            description: "Women in the business world"
        },
        {
            title: "Ceiling Breakers",
            description: "Trying to break the glass ceiling, join us!"
        },
        {
            title: "SoulSearchers",
            description: "Women trying to switch careers"
        },
        {
            title: "ManagersRus",
            description: "Support for managing teams"
        },
    ]

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <Title text='Community' />
                    <div>
                        <Plus />
                    </div>
                </div>
                <SearchBar />
                <SectionHeader section='pod' text='Your Communities' />
                {mockCommunities.map(community => <Item title={community.title} description={community.description}/>)}
            </main>
            <FooterNav />
        </div>
    )
}
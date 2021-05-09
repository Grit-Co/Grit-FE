import Chat from '../icons/Chat'
import Home from '../icons/Home'
import Kebab from '../icons/Kebab'
import NavItem from './NavItem'
import NavLink from './NavLink'
import Star from '../icons/Star'
import Users from '../icons/Users'
import styles from '../../styles/components/footernav.module.scss'
import { useRouter } from 'next/router'

const FooterNav = ({ handleTabSelect }) => {
    const router = useRouter()
    const currentTab = router.route.substring(1);
    const setIconComponent = (tab) => {
        switch (tab) {
            case 'dashboard':
                return <Home selected={currentTab === tab} />
            case 'goals':
                return <Star selected={currentTab === tab} />
            case 'pod':
                return <Chat selected={currentTab === tab} />
            case 'community':
                return <Users selected={currentTab === tab} />
            case 'more':
                return <Kebab selected={currentTab === tab} />
            default:
                return <Kebab selected={currentTab === tab} />
        }
    }
    
    const tabs = [
        {
            id: 1,
            text: "Home",
            tab: "dashboard"
        },
        {
            id: 2,
            text: "Goals",
            tab: "goals"
        },
        {
            id: 3,
            text: "Pod",
            tab: "pod"
        },
        {
            id: 4,
            text: "Community",
            tab: "community"
        },
        {
            id: 5,
            text: "More",
            tab: "more"
        },
    ]

    return (
        <nav className={styles.container}>
            {
                tabs.map(tab => {
                    const icon = setIconComponent(tab.tab)
                    return (
                        <NavItem text={tab.text} selected={currentTab === tab.tab} handleTabSelect={handleTabSelect}>
                            <NavLink href={tab.tab}>
                                {icon}
                            </NavLink>
                        </NavItem>
                    )
                })
            }
        </nav>
    )
};

export default FooterNav;
import Chat from '../icons/Chat'
import Home from '../icons/Home'
import Kebab from '../icons/Kebab'
import NavItem from './NavItem'
import NavLink from './NavLink'
import Star from '../icons/Star'
import Users from '../icons/Users'
import styles from '../../styles/components/footernav.module.scss'
import { useRouter } from 'next/router'

const FooterNav = ({ currentTab='home', handleTabSelect }) => {
    const router = useRouter()

    const setIconComponent = (tab) => {
        switch (tab) {
            case 'home':
                return <Home/>
            case 'goals':
                return <Star/>
            case 'pod':
                return <Chat/>
            case 'community':
                return <Home/>
            case 'more':
                return <Users />
            default:
                return <Kebab/>
        }
    }
    
    const tabs = [
        {
            id: 1,
            text: "Home",
            tab: "home"
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
                    switch(tab.tab){
                        case "home": {
                            
                        }
                    }
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
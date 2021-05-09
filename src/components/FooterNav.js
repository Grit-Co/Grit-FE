import NavItem from './NavItem'
import Home from '../icons/Home'
import Kebab from '../icons/Kebab'
import Star from '../icons/Star'
import Users from '../icons/Users'
import Chat from '../icons/Chat'
import styles from '../../styles/components/footernav.module.scss'

const FooterNav = ({ currentTab='home', handleTabSelect }) => (
    <nav className={styles.container}>
        <NavItem text='Home' selected={currentTab === 'home'} handleTabSelect={handleTabSelect}>
            <Home selected={currentTab === 'home'}/>
        </NavItem>
        <NavItem text='Goals' selected={currentTab === 'goals'} handleTabSelect={handleTabSelect}>
            <Star selected={currentTab === 'goals'}/>
        </NavItem>
        <NavItem text='Pod' selected={currentTab === 'pod'} handleTabSelect={handleTabSelect}>
            <Chat selected={currentTab === 'pod'}/>
        </NavItem>
        <NavItem text='Community' selected={currentTab === 'community'} handleTabSelect={handleTabSelect}>
            <Users selected={currentTab === 'community'}/>
        </NavItem>
        <NavItem text='More' selected={currentTab === 'more'} handleTabSelect={handleTabSelect}>
            <Kebab selected={currentTab === 'more'}/>
        </NavItem>
    </nav>
);

export default FooterNav;
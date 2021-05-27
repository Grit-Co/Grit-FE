import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Home from '../../icons/Home';
import Kebab from '../../icons/Kebab';
import NavItem from '../Navigation/NavItem';
import NavLink from '../Navigation/NavLink';
import Star from '../../icons/Star';
import Users from '../../icons/Users';
import Pod from '../../icons/Pod';

import styles from './index.module.scss';

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
                return <Pod selected={currentTab === tab} />
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
                        <NavItem 
                            text={tab.text} 
                            selected={currentTab === tab.tab} 
                            handleTabSelect={handleTabSelect}
                            key={tab.text}
                        >
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

FooterNav.propTypes = {
    handleTabSelect: PropTypes.func
};
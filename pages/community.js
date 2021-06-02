import React from "react";
import FooterNav from "../src/components/FooterNav";
import Item from "../src/components/Item";
import Plus from "../src/icons/Plus";
import SearchBar from "../src/components/SearchBar";
import SectionHeader from "../src/components/SectionHeader";
import Title from "../src/components/Title";

import styles from "../styles/pages/community.module.scss";

export default function Community() {
    const mockCommunities = [
        {
            title: `BizWomen`,
            description: "Women in the business world",
            img: "biz"
        },
        {
            title: "Ceiling Breakers",
            description: "Trying to break the glass ceiling, join us!",
            img: "ceiling"
        },
        {
            title: "SoulSearchers",
            description: "Women trying to switch careers",
            img: "soul"
        },
        {
            title: "ManagersRus",
            description: "Support for managing teams",
            img: "managers"
        }
    ];

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <Title text="Community" />
                    <div>
                        <Plus />
                    </div>
                </div>
                <SearchBar />
                <SectionHeader section="community" text="Your Communities" />
                {mockCommunities.map((community) => (
                    <Item
                        key={community.title}
                        title={community.title}
                        description={community.description}
                        img={community.img}
                    />
                ))}
            </main>
            <FooterNav />
        </div>
    );
}

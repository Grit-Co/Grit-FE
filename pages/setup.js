import Navigation from '../src/components/Navigation'
import Button from '../src/components/Button'
import ListItem from '../src/components/List/ListItem'
import styles from '../styles/setup.module.scss'

export default function Setup() {
    const categories = [
        'Career goal',
        'Improving soft skills',
        'Improving hard skills',
        'Networking',
        'Continue learning',
        'Other'
    ]

    return (
        <div className={styles.setup}>
            <Navigation /> 
            <div className={styles.progress}></div>
            <h5>Let’s start by choosing a category...</h5>
            <ul className={styles.content}>
                {
                    categories.map(cat => 
                        <ListItem key={cat}>{cat}</ListItem>
                    )
                }
            </ul>
            <Button 
                text='Select'
            />
        </div>
    )
}
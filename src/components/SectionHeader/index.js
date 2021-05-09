import styles from './section-header.module.scss'

const SectionHeader = ({ section, text }) => {
    const emojis = {
        'goal' : '🌟',
        'completed-goals': '🏆',
        'task' : '📝',
        'pod': '👥'
    };
    
    return (
        <h1 className={styles.sectionHeader}>
            <span>{emojis[section]}</span>
            {text}
        </h1>
    );
}

export default SectionHeader; 
import styles from '../../styles/Button.module.scss';

const Button = ({ 
    text, 
    onClick, 
    isPrimary=true 
}) => (
    <button
        className={
            isPrimary ? 
                `${styles.primary} ${styles.btn}` 
                : 
                `${styles.secondary} ${styles.btn}`
        }
        onClick={() => onClick()}
    >
        {text ? text : 'Click me'}
    </button>
);

export default Button;
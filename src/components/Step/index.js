import ListItem from "../List/ListItem";
import styles from '../../../styles/setup.module.scss'
import Button from "../Button";

const Step = ({ step, handleNextClick }) => {
    console.log('step: ', step)

    const stepObj = {
        1 : {
            title: "Let's start by choosing a category...",
            cta: "Select"
        }, 
        2 : {
            title: "Tell us about your goal.",
            placeholder: "What would you like to accomplish?",
            cta: "Next"
        }, 
        3 : {
            title: "Why is this goal important to you?",
            placeholder: "Why does this matter to you?",
            cta: "Next"

        }, 
        4 : {
            title: "What does success look like?",
            placeholder: "How will you know when you have reached your goal?",
            cta: "Next"

        }, 
        5 : {
            title: "What might prevent you from achieving your goal?",
            cta: "Next"

        }, 
        6 : {
            title: "When are you going to reach this goal by?",
            cta: "Save"
        }, 
    };

    const categories = [
        'Career goal',
        'Improving soft skills',
        'Improving hard skills',
        'Networking',
        'Continue learning',
        'Other'
    ];

    return (
        <div >
            <h3>{stepObj[step].title}</h3>
            {
                step === 1 ? 
                    <ul className={styles.content}>
                        {
                            categories.map(cat => 
                                <ListItem key={cat}>{cat}</ListItem>
                            )
                        }
                    </ul>
                    : <textarea />
            }
            <Button 
                text={step === 1 ? 'Select' : 'Next'} 
                onClick={handleNextClick}
            />
        </div>
    )
};

export default Step;

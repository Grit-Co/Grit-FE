import { useState } from 'react'
import Step from '../src/components/Step'
import Navigation from '../src/components/Navigation'
import Button from '../src/components/Button'
import ListItem from '../src/components/List/ListItem'
import styles from '../styles/setup.module.scss'
import Splash from '../src/templates/Splash'

const Setup = () => {
    

    // TODO: Need some state to keep track of what step they are on
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextClick = () => {
        // Check hit end 
        const newStep = currentStep + 1;
        setCurrentStep(newStep)
    }

    const handleBackClick = () => {
        setCurrentStep(currentStep --)
    }

    if (currentStep > 6) {
        return (
            <Splash />
        )            
    } else {
        return (
            <div className={styles.setup}>
                <Navigation 
                    handleBackClick={handleBackClick}
                /> 
                <div className={styles.progress}>--------</div>
               
                <Step 
                    step={currentStep} 
                    handleNextClick={handleNextClick}
                />
            </div>
        )
    }
};

export default Setup; 

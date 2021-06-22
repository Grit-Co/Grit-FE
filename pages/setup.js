import React, { useState } from "react";

import Navigation from "../src/components/Navigation";
import Step from "../src/components/Step";
import Splash from "../src/templates/Splash";

import styles from "../styles/pages/setup.module.scss";

const Setup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [goal, setGoal] = useState({
        'goalCategory': null,
        'goalDetails': null, 
        'goalPurpose': null,
        'successDefinition': null, 
        'goalBlockers': null,
        'goalDueDate': null
    });

    const handleNextClick = (key, value) => {
        if (currentStep > 1) {
            handleGoalUpdate(key, value)
        }
        // Check hit end
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
    };

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleGoalUpdate = (key, value) => {
        const currentGoal = goal;
        currentGoal[key] = value;
        console.log('currentGoal: ', currentGoal);
        setGoal(currentGoal);
    };

    const handleSetGoalType = (type) => {
        const currentGoal = goal;
        console.log('handleSetGoalType, ', type)
        currentGoal.goalCategory = type;
        console.log(currentGoal.goalCategory)
        setGoal(currentGoal);
    };

    if (currentStep > 6) {
        return <Splash />;
    } else {
        return (
            <div className={styles.setup}>
                <Navigation handleBackClick={handleBackClick} />
                {/* TODO: Progress bar here */}
                {/* <div className={styles.progress}>--------</div> */}

                <Step 
                    step={currentStep} 
                    handleNextClick={handleNextClick} 
                    setGoalType={handleSetGoalType}
                />
            </div>
        );
    }
};

export default Setup;

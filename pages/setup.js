import React, { useState } from "react";

import Navigation from "../src/components/Navigation";
import Step from "../src/components/Step";
import Splash from "../src/templates/Splash";

import styles from "../styles/pages/setup.module.scss";

const Setup = () => {
    // TODO: Need some state to keep track of what step they are on
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextClick = () => {
        // Check hit end
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
    };

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1);
    };

    if (currentStep > 6) {
        return <Splash />;
    } else {
        return (
            <div className={styles.setup}>
                <Navigation handleBackClick={handleBackClick} />
                {/* TODO: Progress bar here */}
                {/* <div className={styles.progress}>--------</div> */}

                <Step step={currentStep} handleNextClick={handleNextClick} />
            </div>
        );
    }
};

export default Setup;

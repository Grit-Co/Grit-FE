import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import ListItem from "../List/ListItem/ListItem";
import styles from "./step.module.scss";
import TextArea from "../TextArea";

const Step = ({ step, handleNextClick }) => {
    const stepObj = {
        1: {
            title: "Let's start by choosing a category...",
            cta: "Select",
            percentage: "seventeen"
        },
        2: {
            title: "Tell us about your goal.",
            placeholder: "What would you like to accomplish?",
            cta: "Next",
            percentage: "thirtyThree"
        },
        3: {
            title: "Why is this goal important to you?",
            placeholder: "Why does this matter to you?",
            cta: "Next",
            percentage: "fifty"
        },
        4: {
            title: "What does success look like?",
            placeholder: "How will you know when you have reached your goal?",
            cta: "Next",
            percentage: "sixtySeven"
        },
        5: {
            title: "What might prevent you from achieving your goal?",
            cta: "Next",
            percentage: "eightyThree"
        },
        6: {
            title: "When are you going to reach this goal by?",
            cta: "Save",
            percentage: "hundred"
        }
    };

    const [categories, setCategories] = useState([
        {
            text: "Career goal",
            isSelected: false
        },
        {
            text: "Improving soft skills",
            isSelected: false
        },
        {
            text: "Improving hard skills",
            isSelected: false
        },
        {
            text: "Networking",
            isSelected: false
        },
        {
            text: "Continue learning",
            isSelected: false
        },
        {
            text: "Other",
            isSelected: false
        }
    ]);

    const [currentValue, setCurrentValue] = useState("");

    const handleCategoryClick = (clickedCategory) => {
        const updatedCategories = categories.map((category) => {
            if (category.text === clickedCategory) {
                category.isSelected = true;
            } else {
                category.isSelected = false;
            }
            return category;
        });

        setCategories(updatedCategories);
    };

    const resetCurrentValue = () => {
        setCurrentValue("");
        handleNextClick();
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.barContainer}>
                    {/* <div className={styles.grey}></div> */}
                    <div
                        className={`${styles.status} ${
                            styles[stepObj[step].percentage]
                        }`}
                    ></div>
                </div>
                <h3>{stepObj[step].title}</h3>
                {step === 1 ? (
                    <ul className={styles.content}>
                        {categories.map((cat) => (
                            <ListItem
                                key={cat.text}
                                selected={cat.isSelected}
                                handleClick={handleCategoryClick}
                            >
                                {cat.text}
                            </ListItem>
                        ))}
                    </ul>
                ) : (
                    <TextArea
                        placeholder={stepObj[step].placeholder}
                        value={currentValue}
                        handleChange={setCurrentValue}
                    />
                )}
            </div>
            <Button
                text={step === 1 ? "Select" : "Next"}
                onClick={resetCurrentValue}
            />
        </div>
    );
};

export default Step;

Step.propTypes = {
    step: PropTypes.string,
    handleNextClick: PropTypes.func
};

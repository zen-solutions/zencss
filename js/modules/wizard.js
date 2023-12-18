/*
 * zenCSS Beta v2.0.0 (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

// ----------------------------------------
// Wizard
// ----------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
    const steps = document.querySelectorAll(".wizard-step");
    const navItems = document.querySelectorAll(".wizard-nav");

    if (steps.length > 0 && navItems.length > 0) {
        let currentStep = 1;
        const totalSteps = steps.length;

        function goToStep(stepNumber) {
            steps.forEach((step) => {
                step.style.display = "none"; // Hide all steps
            });
            document.getElementById(`step-${stepNumber}`).style.display =
                "block"; // Show the desired step

            // Update the current class on pagination
            navItems.forEach((item) => {
                if (item.dataset.step == stepNumber.toString()) {
                    item.classList.add("current");
                } else {
                    item.classList.remove("current");
                }
            });
        }

        navItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                let direction = item.dataset.direction;
                if (direction) {
                    if (direction === "next" && currentStep < totalSteps) {
                        currentStep++;
                    } else if (direction === "prev" && currentStep > 1) {
                        currentStep--;
                    }
                } else if (item.dataset.step) {
                    currentStep = parseInt(item.dataset.step);
                }
                goToStep(currentStep);
            });
        });

        // Initialize the wizard to the first step
        goToStep(currentStep);
    }
});

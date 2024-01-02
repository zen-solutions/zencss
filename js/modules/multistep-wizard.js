/*
 * zenCSS v2.0.2-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener("DOMContentLoaded", function () {
    const mswizard = document.querySelector(".mswizard");
    if (!mswizard) return;
    const progressBar = mswizard.querySelector(".mswizard-progress");
    const currentStepSpan = mswizard.querySelector("#current-step");
    const totalStepsSpan = mswizard.querySelector("#total-steps");
    const progressPercentage = mswizard.querySelector(".progress-percentage");
    const steps = mswizard.querySelectorAll(".mswizard-step");
    const totalSteps = steps.length;
    totalStepsSpan.textContent = totalSteps;
    progressBar.max = 100;

    function updatemswizardStep(stepNumber) {
        steps.forEach((step) => (step.style.display = "none"));
        mswizard.querySelector(`#step-${stepNumber}`).style.display = "block";
        currentStepSpan.textContent = stepNumber;
        const progressValue = ((stepNumber - 1) / (totalSteps - 1)) * 100;
        progressBar.value = progressValue;
        progressPercentage.textContent = `${Math.round(progressValue)}%`;
        const percentagePosition =
            progressBar.offsetWidth * (progressValue / 100) -
            progressPercentage.offsetWidth / 2;
        progressPercentage.style.left = `${Math.max(0, percentagePosition)}px`;
        progressPercentage.style.visibility =
            progressValue >= 5 ? "visible" : "hidden";
    }

    steps.forEach((step, index) => {
        if (index === totalSteps - 1) return; // No buttons on the last step

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Always add the Previous button except on the last step
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.className = "prev-btn";
        prevButton.setAttribute("role", "button");
        prevButton.setAttribute("aria-label", `Go back to step ${index}`);
        if (index === 0) {
            prevButton.disabled = true;
            prevButton.classList.add("disabled");
        } else {
            prevButton.addEventListener("click", () =>
                updatemswizardStep(index),
            );
        }
        buttonContainer.appendChild(prevButton);

        // Add the Next/Finish button to all steps except the last
        const nextButton = document.createElement("button");
        nextButton.textContent = index === totalSteps - 2 ? "Finish" : "Next";
        nextButton.className = "next-btn";
        nextButton.setAttribute("role", "button");
        nextButton.setAttribute("aria-label", `Go to step ${index + 2}`);
        nextButton.addEventListener("click", () =>
            updatemswizardStep(index + 2),
        );
        buttonContainer.appendChild(nextButton);

        step.appendChild(buttonContainer);
    });

    updatemswizardStep(1);
});

/*
  * zenCSS v1.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

  //-------------------------------------
  //Poll
  //-------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    var currentStep = 1;
    var results = { a: 0, b: 0, c: 0, d: 0 };
    
    function updateStepDisplay(step) {
      var steps = document.querySelectorAll('.wizard-step');
      steps.forEach(function(stepDiv) {
        stepDiv.classList.remove('active');
      });
      document.querySelector('#step-' + step).classList.add('active');
    }
  
    function handleOptionSelect(event) {
      var selectedOption = event.target.value;
      results[selectedOption]++;
      if(currentStep < 4) {
        currentStep++;
        updateStepDisplay(currentStep);
      } else {
        // Call the showResult function immediately after the last selection
        showResult();
      }
    }
  
    function showResult() {
        // Remove the active class from all steps
        var steps = document.querySelectorAll('.wizard-step');
        steps.forEach(function(step) {
          step.classList.remove('active');
        });
      
        // Calculate the most chosen answer
        var max = Math.max(...Object.values(results));
        var mostChosenResults = Object.keys(results).filter(function(key) {
          return results[key] === max;
        });
      
        // Take the first result if there's a tie
        var mostChosen = mostChosenResults[0];
        var resultElement = document.querySelector('#result-types [data-result="' + mostChosen + '"]');
        var resultContent = resultElement ? resultElement.innerHTML : mostChosen;
      
        // Update the result div and make the result visible
        var resultDiv = document.getElementById('result-text');
        if(resultDiv) {
          resultDiv.innerHTML = resultContent;
        }
        var resultContainer = document.getElementById('result');
        if(resultContainer) {
          resultContainer.classList.add('active'); // Ensure this class makes the element visible
        }
      }
      
    // Attaching change event listeners to radio buttons
    var wizard = document.querySelector('.wizard');
    if(wizard) {
      var radioButtons = wizard.querySelectorAll('input[type="radio"]');
      radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', handleOptionSelect);
      });
    }
  });
  

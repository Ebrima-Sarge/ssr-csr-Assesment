const generateButton = document.getElementById("generate-button");
const resultDisplay = document.getElementById("display-results");

generateButton.addEventListener('click', function() {
    
    const checkedBoxes = document.querySelectorAll('.day-checkbox:checked');
    
    
    const mealInputs = document.querySelectorAll('#meals-field input');

    let days = [];
    let foods = [];

  
    checkedBoxes.forEach(box => {
        days.push(box.value); 
    });


    mealInputs.forEach(input => {
        if (input.value.trim() !== "") {
            foods.push(input.value);
        }
    });


    
    if (days.length === 0 || foods.length === 0) {
        alert("Please select at least one day and enter at least one meal.");
        return;
    }

  
    for (let i = foods.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [foods[i], foods[j]] = [foods[j], foods[i]]; 
    }

    // Display the results
    resultDisplay.innerHTML = "<h2>Here comes your Menu</h2>";
    const resultList = document.createElement('ul');

    days.forEach((day, index) => {
        const listItem = document.createElement('li');
 
        const foodItem = foods[index % foods.length]; 
        
        listItem.innerHTML = `<strong>${day}:</strong> ${foodItem}`;
        resultList.appendChild(listItem);
    });

    resultDisplay.appendChild(resultList);
});
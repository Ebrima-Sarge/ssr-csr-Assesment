const doneButton = document.getElementById("done-button");
const checkboxs = document.querySelectorAll(".day-checkbox");
const generatedInputfield = document.querySelector(".meals-field");
const generateButton = document.getElementById("generate-button");
const resultDisplay = document.getElementById('display-results');

checkboxs.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        if (this.checked) { const inputGroup = document.createElement('div');
            inputGroup.id = `input-group-${this.value}`;
            inputGroup.className = 'generatedInput';
            inputGroup.innerHTML =  `
                <input type="text" name="meal-${this.value}" placeholder="Enter meal name">
            `;
            generatedInputfield.appendChild(inputGroup);
            

         }
           
    });

    

}); 

generateButton.addEventListener('click', function() {
    const mealInputs = document.querySelectorAll('.meals-field input');;

    let days = [];
    let foods = [];

    mealInputs.forEach(input => {
        const dayName = input.name.replace('meal-', '');

        if (input.value.trim() !== "") {
            days.push(dayName)
            foods.push(input.value);
        }


    });



        for (let i = foods.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [foods[i], foods[j]] = [foods[j], foods[i]]; 
    }
       resultDisplay.innerHTML = "<h2> Here comes your Menu</h2>";
    const resultList = document.createElement('ul');

    days.forEach((day, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${day}:</strong> ${foods[index]}`;
        resultList.appendChild(listItem);
    });

    resultDisplay.appendChild(resultList);
});
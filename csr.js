const mainContainer = document.getElementById('main-container');
const picture = document.getElementById('image-container');
const others = document.getElementById('other-inputs');

// Creating the Heading
const h1 = document.createElement('h1');
h1.id = "header";

h1.innerHTML = 'Welcome to Mealshuffle😋';
mainContainer.appendChild(h1);

const image = document.createElement('img','')
image.src = 'recipe.png'
image.id = 'image'

picture.appendChild(image)

const h2 = document.createElement('h2');

h2.innerHTML = 'wondering what to cook? Select the days you wish to cook a meal🥘!';
others.appendChild(h2);

// Creating the Form
const form = document.createElement('form');
form.name = "days";
form.className = "selecteable-days";
form.id = "selecteable-days"; 
others.appendChild(form);

// Creating the Instruction Label
const mainLabel = document.createElement('label');
mainLabel.className = "days";
mainLabel.setAttribute('for', 'days');
mainLabel.innerHTML = '<b><span>Select your prefered Days!</span></b>';
form.appendChild(mainLabel);

// Adding a line break for spacing
form.appendChild(document.createElement('br'));

// Create the Day Checkboxes using an Array 
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

weekDays.forEach(day => {
    const label = document.createElement('label');
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = day;
    checkbox.className = "day-checkbox";
    
   
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${day} `));
    
    
    form.appendChild(label);
});

// Create the Reset Button
const resetButton = document.createElement('button');
resetButton.className = "done-button";
resetButton.id = "done-button";
resetButton.textContent = "Reset";

form.appendChild(resetButton);

const mealsField = document.createElement('div');
mealsField.className = "meals-field";
mealsField.id = "meals-field";
document.body.appendChild(mealsField);


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
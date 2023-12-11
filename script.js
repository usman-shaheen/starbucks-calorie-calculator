function calculateCalories() {
    const drink = document.getElementById('drink').value;
    const size = document.getElementById('size').value;

    const calorieMap = {
        latte: { tall: 100, grande: 150, venti: 200 },
        cappuccino: { tall: 80, grande: 120, venti: 160 },
        frappuccino: { tall: 200, grande: 300, venti: 400 }
    };

    const calories = calorieMap[drink][size];

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Calories: ${calories}`;
}

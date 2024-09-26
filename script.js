function saveWorkout(machine) {
    const date = new Date().toLocaleDateString();
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;

    if (distance && time) {
        const workoutData = {
            machine,
            distance,
            time,
            date
        };

        let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];
        workoutHistory.push(workoutData);
        localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));

        const saveButton = event.target;
        saveButton.textContent = 'Saved!';
        saveButton.style.backgroundColor = '#28a745';
        setTimeout(() => {
            saveButton.textContent = 'Save';
            saveButton.style.backgroundColor = '';
        }, 1500);
    } else {
        alert('Please enter distance and time');
    }
}

// For loading the workout history page
function loadHistory() {
    const workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];
    const historyList = document.getElementById('history-list');

    workoutHistory.forEach(workout => {
        const listItem = document.createElement('li');
        listItem.textContent = `${workout.date} - ${workout.machine}: ${workout.distance} km, ${workout.time} min`;
        historyList.appendChild(listItem);
    });
}

// For BMI calculation with animation
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = 1.75; // Assuming static height for now

    if (weight) {
        const bmi = (weight / (height * height)).toFixed(2);
        const bmiResult = document.getElementById('bmi-result');
        bmiResult.textContent = `Your BMI: ${bmi}`;
        bmiResult.classList.add('bmi-highlight');

        setTimeout(() => {
            bmiResult.classList.remove('bmi-highlight');
        }, 2000);
    } else {
        alert('Please enter your weight');
    }
}

// Call loadHistory on history page load
if (document.getElementById('history-list')) {
    loadHistory();
}

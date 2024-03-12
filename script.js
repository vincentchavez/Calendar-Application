const calendarElement = document.getElementById("calendar");

// Function to display the calendar
function displayCalendar() {
    // Clear previous calendar
    calendarElement.innerHTML = "";

    // Get current date
    const currentDate = new Date();

    // Get the first day of the current month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Get the last day of the current month
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Display month and year
    const monthYearHeader = document.createElement("h2");
    monthYearHeader.textContent = currentDate.toLocaleString("default", { month: "long" }) + " " + currentDate.getFullYear();
    calendarElement.appendChild(monthYearHeader);

    // Create the calendar grid
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        calendarElement.appendChild(dayElement);
    });

    // Fill in the days of the month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const dayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        const dayOfWeek = dayOfMonth.getDay();
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = i;
        dayElement.addEventListener("click", () => handleDayClick(dayOfMonth));
        calendarElement.appendChild(dayElement);
    }
}

// Function to handle day click event
function handleDayClick(date) {
    const events = prompt("Enter event(s) for " + date.toDateString() + ":");
    if (events !== null) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("events");
        dayElement.textContent = events;
        dateElement = calendarElement.querySelector(`.day:nth-child(${date.getDay() + 1})`);
        dateElement.appendChild(dayElement);
    }
}

// Display the calendar
displayCalendar();

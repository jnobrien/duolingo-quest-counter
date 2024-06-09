const date = new Date();
const today = date.getDate();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
const daysLeft = daysInMonth(year, month) - today;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function daysLeftFunction() {
    document.getElementById('days-left').innerText = daysLeft;
};

daysLeftFunction();

function questsLeftFunction() {
    const requiredQuests = document.getElementById('required-total').value;
    const questsDone = document.getElementById('current-total').value;
    const questsLeft = requiredQuests - questsDone;
    document.getElementById('quests-left').innerText = questsLeft;
};

function minQuestsFunction() {
    const requiredQuests = document.getElementById('required-total').value;
    const questsDone = document.getElementById('current-total').value;
    const questsLeft = requiredQuests - questsDone;

    const minQuests = questsLeft / daysLeft;
    document.getElementById('avg-quests').innerText = minQuests.toFixed(2);
};

function minDaysFunction() {
    const requiredQuests = document.getElementById('required-total').value;
    const questsDone = document.getElementById('current-total').value;
    const questsLeft = requiredQuests - questsDone;

    const minDays = Math.ceil(questsLeft / 6);
    document.getElementById('min-days').innerText = minDays;

    const completeDate = today + minDays;
    const monthName = monthNames[month - 1];
    document.getElementById('min-date').innerText = completeDate + " " + monthName + " " + year;
}

function calculate() {
    questsLeftFunction();
    minQuestsFunction();
    minDaysFunction();
};
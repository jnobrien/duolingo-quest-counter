function daysLeft() {
    const date = new Date();
    const today = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const daysLeft = daysInMonth(year, month) - today;
    document.getElementById('days-left').innerText = daysLeft;
};

daysLeft();

function questsLeft() {
    const requiredQuests = document.getElementById('required-total').value;
    const questsDone = document.getElementById('current-total').value;
    const questsLeft = requiredQuests - questsDone;
    document.getElementById('quests-left').innerText = questsLeft;
};

function minQuests() {
    const date = new Date();
    const today = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const daysLeft = daysInMonth(year, month) - today;

    const requiredQuests = document.getElementById('required-total').value;
    const questsDone = document.getElementById('current-total').value;
    const questsLeft = requiredQuests - questsDone;

    const minQuests = questsLeft / daysLeft;
    document.getElementById('avg-quests').innerText = minQuests.toFixed(2);
}

function calculate() {
    questsLeft();
    minQuests();
};
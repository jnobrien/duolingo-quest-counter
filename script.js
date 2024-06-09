function daysLeft() {
    const date = new Date();
    const today = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const daysLeft = daysInMonth(year, month) - today;
    document.getElementById('days-left').innerText = daysLeft;
}

daysLeft()
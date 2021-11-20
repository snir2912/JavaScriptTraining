function currentDate() {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    const thisDate = d + '/' + m + '/' + y;
    document.getElementById('text').innerHTML = thisDate;

    function currentDay() {
        let day = date.getDay() + 1;
        document.getElementById('text2').innerHTML = ConvertDays(day);
    }
    currentDay();

    function ConvertDays(day) {
        if (day == 1)
            return 'sunday';
        if (day == 2)
            return 'monday';
        if (day == 3)
            return 'tuesday';
        if (day == 4)
            return 'wedensday';
        if (day == 5)
            return 'thuresday';
        if (day == 6)
            return 'friday';
        if (day == 7)
            return 'saturday';
    }
}
currentDate();
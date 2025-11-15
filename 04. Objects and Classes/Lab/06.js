function scheduleMeetings(arr) {
    let meetings = {};

    for (let meetingStr of arr) {
        let [day, person] = meetingStr.split(' ');

        if (day in meetings) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(meetings);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

scheduleMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
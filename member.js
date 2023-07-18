function systemYear() {
    var year = new Date().getFullYear();
    console.log(year);

    return year;
}

function skillsMember() {
    var year = systemYear();
    var member = {
        name: "John",
        age: 34,
        job: "teacher",
        isMarried: false,
        family: ["Jane", "Mark", "Bob"],
        calculateAge: function () {
            return year - this.age;
        }
    };
    console.log(member.calculateAge());
}


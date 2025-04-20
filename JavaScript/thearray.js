let choices = ["blue", "green", "red", "yellow", "purple"];

for (let i = 0; i < choices.length; i++) {
    let suffix = "";

    if (i === 0) {
        suffix = "st";
    } else if (i === 1) {
        suffix = "nd";
    } else if (i === 2) {
        suffix = "rd";
    } else {
        suffix = "th";
    }

    console.log(`My ${i + 1}${suffix} choice is ${choices[i]}.`);
}

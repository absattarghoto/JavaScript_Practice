let grade = "C";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
    case "C":
        console.log("Good job!");
        break;
    case "D":
        console.log("You passed.");
        break;
    default:
        console.log("Failed or Invalid grade.");
}

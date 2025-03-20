function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

console.log("Fetching data...");
fetchData().then(response => console.log(response));
console.log("Process continues...");

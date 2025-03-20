function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async/Await Data Fetched");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    const data = await fetchData(); // Waits for the promise to resolve
    console.log(data);
}

getData();
console.log("Process continues...");

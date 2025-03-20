function fetchData(error = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error: Failed to fetch data");
            } else {
                resolve("Data fetched successfully");
            }
        }, 2000);
    });
}

async function getData() {
    try {
        console.log("Fetching...");
        const data = await fetchData(true); // Passing true to trigger an error
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();  // Fixed variable name from 'deta' to 'data'
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json(); // Fixed variable name from 'deta2' to 'data2'
        console.log(data2.fact);
    } catch (e) {
        console.log("error -", e);
    }
    console.log("bye");
}

// Call the function to test
getFacts();

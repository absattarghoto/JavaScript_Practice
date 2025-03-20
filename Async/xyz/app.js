async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json(); // Converting response to JSON
        console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();

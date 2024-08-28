const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com" }
];

// Promise Creation
function fetchUserByIdPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject("User with id not found");
            }
        }, 1000);
    });
}
fetchUserByIdPromise(3)
    .then(user => {
        console.log("User found:", user);
    })
    .catch(error => {
        console.error(error);
    });


// Callback Implementation:
function fetchUserByIdCallback(id, callback) {
    if (!id) return callback("id not found")
    if (typeof id !== "number") return callback("Invalid id number")
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback("User with id not found", null);
        }
    }, 1000);
}
fetchUserByIdCallback(3, (result) => {
    console.log(result);
});

// using both callback and promise
function fetchUserByIdCombined(id) {
    return new Promise((resolve, reject) => {
        // Try to fetch data using the callback method
        fetchUserByIdCallback(id, (error, user) => {
            if (error) {
                // If an error occurs, fall back to the promise-based method
                console.log("Callback failed, falling back to promise...");
                fetchUserByIdPromise(id)
                    .then(resolve)  // If promise succeeds, resolve the combined promise
                    .catch(reject); // If promise fails, reject the combined promise
            } else {
                // If callback succeeds, resolve the combined promise
                resolve(user);
            }
        });
    });
}

fetchUserByIdCombined(3)
    .then(user => {
        console.log("User found:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Async/Await with Promises:
    async function fetchUserByIdAsync(id) {
        const user = users.find(user => user.id === id);
        if (user) {
            return user;
        } else {
            throw new Error(`User with id ${id} not found`);
        }
    }
    
    // Example usage of the async function with await
    async function getUserData(id) {
        try {
            const user = await fetchUserByIdAsync(id);
            console.log("User found:", user);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
    getUserData(3);
    getUserData(10);

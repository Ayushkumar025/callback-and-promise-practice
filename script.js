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
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback("User with id not found", null);
        }
    }, 1000);
}
fetchUserByIdCallback(3, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        console.log("User found:", user);
    }
});
// 4.
// You need to handle getPosts() function with Promise
// Now you need to handle getPosts() function with async/await
// receive posts and show in console, don't forget about error handling :)
// GOOD LUCK!

function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

function handleGetPostsWithPromise() {
    return new Promise((resolve, reject) => {
        getPosts().then(response => {
            if (!response.ok) {
                reject(Error(response.statusText))
            }
            resolve(response.json())
        })
    })
}

handleGetPostsWithPromise()
    .then(result => {
        console.log('[Promise Result: ]')
        console.log(result);
    })
    .catch(e => console.log(e));

async function handleGetPostsWithAsyncAwait() {
    let fetchResult, parsedResponse;
    try {
        fetchResult = await getPosts();
        if (!fetchResult.ok) {
            throw new Error(fetchResult.statusText)
        }
        parsedResponse = await fetchResult.json();
        console.log('[Async-Await Result]:');
        console.log(parsedResponse);
    } catch (err) {
        console.error(err)
    }
}

handleGetPostsWithAsyncAwait();

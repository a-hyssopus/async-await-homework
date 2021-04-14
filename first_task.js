function delay(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve('The promise was resolved'), ms);
        setTimeout(() => reject('The promise was not resolved'), ms);
    })
}

delay(3000).then(() => alert('runs after indicted time'));
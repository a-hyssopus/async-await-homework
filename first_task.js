function delay(ms) {
    async function innerFunc() {
        let promise = new Promise(((resolve, reject) => {
            setTimeout(() => resolve('The promise was resolved'), ms);
            setTimeout(() => reject(new Error('Something went wrong')), ms)
        }))
        return await promise;
    }
    return innerFunc();
}

delay(3000).then(() => alert('runs after indicted time'));
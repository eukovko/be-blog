class AsyncWorker {
    static doWork = () => new Promise(
        (resolve, reject) => setTimeout(
            () => resolve(), 1000
        )
    );
}

export default AsyncWorker

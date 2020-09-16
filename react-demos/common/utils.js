export function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('weak up')
        }, time * 1000)
    })
}

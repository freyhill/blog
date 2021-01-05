function reqest(url, params) {
    return apiFetch(url, params);
}

function apiFetch(url, params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(1)
            } else {
                reject('err')
            }
        },1000)
    })
}


reqest().then(result=>{
   // console.log(result);
   return result
}).then(res=>{
    console.log(res);
})
function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}

console.log('Promise Lecture,')
delayFn(2000).then(()=>console.log('Promise resolved after 2 seconds')
)
console.log('end')

function divideFn(a,b){
    return new Promise((resolve, reject)=>{
        if (b===0){
            reject('Cant divide by 0')
        }
        else {
            resolve(a/b)
        }
    })
}

divideFn(10,0).then((res)=>console.log(res)).catch(err=>console.log(err))

async function call(name){
    await delayFn(2000)
    console.log(name)
}
call('Artemis')
console.log('Bumrah')
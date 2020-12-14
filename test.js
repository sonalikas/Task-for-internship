getMark(39).length ===2

function asserEqual(actual, expected){
    if(actual !== expected){
        throw new Error (`${actual} is not equal to ${expected}`)
    }
}

asserEqual(getMark(39).length,2)
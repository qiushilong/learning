function handle(person?: {name: string}) {
    console.log(person.name)
}

function handle2(person?: {name: string}) {
    // person 可能为 undefined，if 将它窄化
    if(person){
        console.log(person.name)
    }
    // 其他判断来进行窄化
    if(typeof person === 'object') {
        console.log(person.name)
    }
    if(typeof person !== 'undefined') {
        console.log(person.name)
    }
    // ...
}
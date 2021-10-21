import {getJokeWithAsyncAwait} from '../app'
import {getJokeWithThenCatch} from '../app'


/**
   * Получение n-го количества запросов
   * 
   * @param количество запросов
   * 
   * @return массив запросов
   */
function generateRequests(countRequests:number):Promise<string>[] {
    let i:number=0;
    const arrayRequests:Promise<string>[]=[]

    while(i<countRequests) {
        arrayRequests.push(getJokeWithAsyncAwait(),getJokeWithThenCatch());
        i++
    }
    return arrayRequests
}

/**
   * Тест запросов при помощи Promise.all
   * 
   */
function testPromiseAll():void {
    const start:number = performance.now()
    Promise.all(generateRequests(4)).then(value=>{
        const result:string[] = value
        console.log(result)
    })

    const end:number = performance.now() - start

    console.log("end of promise all test : " + end)
}

/**
   * Тест запросов при помощи циклов
   * 
   */
function testLoop():void {
    const start:number = performance.now()
    const promises:Promise<string>[] = generateRequests(4)
    for(let i=0; i<promises.length; i++) {
        const result:Promise<void> = promises[i].then(value=>{
            console.log(value)
        })
    }
    const end:number = performance.now() - start
    console.log("end of loop test : " + end)
}


testLoop()
testPromiseAll()

function* simpleGenerator(){
    let id =1
    while(true){
        yield id
        id++
    }
}
const generatorObject = simpleGenerator()
const obj = generatorObject.next()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
const generatorObject1 = simpleGenerator()
console.log(generatorObject1.next())

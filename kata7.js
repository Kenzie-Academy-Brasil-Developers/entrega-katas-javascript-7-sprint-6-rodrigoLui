
// Inicio KATA 07

let array1 = [54, 23, 62, 75, 132, 59]
let array2 = [44, 22, 66, 55, 11, 99]

/////////////////////////////////////////////////////////////////////////////
//--- forEach() ---//

const test = (elemento, i, array) => {
    console.log(`forEach ${elemento} - ${i} - ${array}`)
}

// Método forEach
// array1.forEach(test)
// console.log( "-------------------------------" )

// New forEach
const newForEach = ( vetor, FuncCallBack) => {
   
    for (let i = 0; i < vetor.length; i++) {
        FuncCallBack(vetor[i], i, vetor)
    }
}

newForEach(array1,test)
console.log( "-------------------------------" )


// ///////////////////////////////////////////////////////////////////////////
//--- fill() ---//
let arrayFill = [44, 22, 66, 55, 11, 99]


//Método  fill()
// arrayFill.fill(1)
// console.log("Método Fill", arrayFill)

// newFill()

const newFill = (array, valor) => {
    if (valor === NaN || valor === undefined) {
        valor = 0
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = valor
    }
    return array
}
console.log( "newFill ",newFill(arrayFill, 5))
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- map() ---//

// callback
const testCallBack = value => {
    return value * 2
}
let ArreyMap01 = new Array
let ArreyMap02 = new Array

// método map()
// ArreyMap01 = array1.map(testCallBack)
// console.log(ArreyMap01)

// newMap()
const newMap = (array, test) => {
    for (let i = 0; i < array.length; i++) {
        ArreyMap02.push(test(array[i]))
    }
    return ArreyMap02
}
console.log("Map ", newMap(array2, testCallBack))
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- Some() ---//


// metodo some()
let arrayTest = [4, 5, 3, 2, 15, 3, 2, 1]

console.log(arrayTest.some(value => value > 10))


// newSome()
const newSome = (array, value) => {
    let result = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] > value) {
            result = true
        }
    }
    return result
}
console.log("Some", newSome(arrayTest, 10))
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- Find() ---//

let arrayTestFind = [4, 5, 3, 200, 15, 3, 2, 1]

const callBackFind = (array, value) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > value) {
            return result = array[i]
        }
    }
    return result
}

const newFind = (array, value) => {
    let result = callBackFind(array, value)
    return result
}
// Deve retornar 200
console.log("Find ", newFind(arrayTestFind, 10))
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- FindIndex() ---//

let arrayFindIndex = [4, 5, 3, 200, 15, 3, 2, 1]

// callBack FindIndex
const callBackFindIndex = (array, value) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > value) {
            result = i
            break
        }
    }
    return result
}
// 
const newFindIndex = (array, number) => {
    let index = callBackFindIndex(array, number)
    
    // Deve retornar 3
    return index
}

console.log("Array do findIndex:", arrayFindIndex)
console.log("findIndex | retorna o indice do primeiro valor maior que 10 =", newFindIndex(arrayFindIndex, 10))
console.log( "-------------------------------" )


// ///////////////////////////////////////////////////////////////////////////
// //--- every() ---//

let arrayEvery1 = [ 22, 34, 45, 23, 67, 87, 130 ]
let arrayEvery2 = [ 22, 34, 4, 23, 6, 7, 130 ]

// callBack Every
const callBackEvery = (array, value) => {
    let result = true
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < value) {
            result = false
        }
    }
    return result
}
// newEvery
const newEvery = (array, value) => {
    let result = callBackEvery(array, value)
    return result
}
//      Deve retornar true
console.log("Every| todos os valores são maior que 10 ",newEvery ( arrayEvery1, 10) )
//      Deve retornar false
console.log("Every| tem valor menor que 10 ", newEvery ( arrayEvery2, 10) )
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- Filter() ---//

let arrayFilter = [ 10, 54, 63, 8, 2, 62, 13, 1, 2, 97]
// callback filter()
const callBackFilter = (array, filter) => {
    let result = new Array
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > filter) {
            result.push(array[i])
        }
    }
    return result
}

const newFilter = ( array, value) => {

    let arrayFiltered = callBackFilter(array, value)

    return arrayFiltered
}

let newArrayFiltered = newFilter(arrayFilter, 10)
//      Deve retornar [ 10, 54, 63, 8, 2, 62, 13, 1, 2, 97]
console.log("Filter ", arrayFilter)
//      Deve retornar [ 10, 54, 63, 62, 13, 97 ]
console.log("Filter | Maiores que 10", newArrayFiltered)
console.log( "-------------------------------" )


// ///////////////////////////////////////////////////////////////////////////
// //--- concat() ---//

const arrayConcat1 = ['Rodrigo', 'Luiz', 'Andrade', 'de', 'Oliveira']
const arrayConcat2 = [12, 564, 23, 12, 76, 23, 96]

const newConcat = ( value1, value2) => {
    let arrayConcat = new Array

    for (let i = 0; i < value1.length; i++) {
        arrayConcat.push(value1[i])
    }
    for (let i = 0; i < value2.length; i++) {
        arrayConcat.push(value2[i])
    }
    return arrayConcat
}

let newArrayConcat = newConcat(arrayConcat1, arrayConcat2)

console.log("Concat ",newArrayConcat)
console.log( "-------------------------------" )

// ///////////////////////////////////////////////////////////////////////////
// //--- includes() ---//

const arrayIncludes = [ 30, 15, 34, 12, 70, 46 ]

const newIncludes = (array, value) => {
    let result = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            result = true
        }
    }
    return result
}
console.log("Includes ", newIncludes ( arrayIncludes, 34 ) )


console.log( "-------------------------------" )


// ///////////////////////////////////////////////////////////////////////////
// //--- indexOf() ---//

//   repliquei para testar caso haja números repetidos no 
const arrayIndexOf = [ 10, 20, 30, 40, 50, '###' ,10, 20, 30, 40, 50]

const newIndexOf = (array, value) => {
    let result = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            result = i
            break
        }
    }
    return result
}
//          deve retornar 2
console.log("IndexOf ", newIndexOf( arrayIndexOf, 50 ) )

console.log( "-------------------------------" )


// // ///////////////////////////////////////////////////////////////////////////
// // //--- join() ---//

let arrayJoin = ['Rodrigo', 'Luiz', 'Andrade']

const newJoin = (array, value) => {
    let join = new String

    for (let i = 0; i < array.length; i++) {

        if (value === undefined) { value = ',' }

        join += `${array[i]}`
            
        if (i + 1 < array.length) { join+= value }
    }
    return join
}
console.log("Join ", newJoin( arrayJoin ) )
console.log("Join ", newJoin( arrayJoin, '' ) )
console.log("Join ", newJoin( arrayJoin, ' ' ) )
console.log("Join ", newJoin( arrayJoin, '-' ) )

console.log( "-------------------------------" )


// ///////////////////////////////////////////////////////////////////////////
// //--- reduce() ---//
const arrayReduce = [ 1, 2, 3, 4]

// callBack do Reduce
const callBackReduce =(array) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result+= array[i]
    }
    return result
}

// newReduce
const newReduce = (array, value) => {
    if (value != undefined) {
        array.push(value)
    }
    let result = callBackReduce(array)
    
    return result
}

let resultReduce = newReduce(arrayReduce, 5)
console.log("Reduce ",resultReduce)

// Inicio KATA 07

let array1 = [54, 23, 62, 75, 132, 59]
let array2 = [44, 22, 66, 55, 11, 99]

/////////////////////////////////////////////////////////////////////////////
//--- forEach() ---//

const test = (elemento, i, array) => {
    console.log(`${elemento} - ${i} - ${array}`)
}

// Método forEach
array1.forEach(test)

// New forEach
const newForEach = ( vetor, FuncCallBack) => {
   
    for (let i = 0; i < vetor.length; i++) {
        FuncCallBack(vetor[i], i, vetor)
    }
}

newForEach(array1,test)


///////////////////////////////////////////////////////////////////////////
//--- fill() ---//
let arrayFill = [44, 22, 66, 55, 11, 99]


//Método  fill()
arrayFill.fill(1)
console.log(arrayFill)

// newFill()

const newFill = (valor) => {
    if (valor === NaN || valor === undefined) {
        valor = 0
    }
    for (let i = 0; i < arrayFill.length; i++) {
        arrayFill[i] = valor
    }
    console.log(arrayFill)
}
newFill(5)


///////////////////////////////////////////////////////////////////////////
//--- map() ---//

// callback
const testCallBack = value => {
    return value * 2
}
let ArreyMap01 = new Array
let ArreyMap02 = new Array

// método map()
ArreyMap01 = array1.map(testCallBack)
console.log(ArreyMap01)

// newMap()
const newMap = (array, test) => {
    for (let i = 0; i < array.length; i++) {
        ArreyMap02.push(test(array[i]))
    }
    console.log(ArreyMap02)
}
newMap(array2, testCallBack)


///////////////////////////////////////////////////////////////////////////
//--- Some() ---//


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
console.log(newSome(arrayTest, 10))


///////////////////////////////////////////////////////////////////////////
//--- Find() ---//

let arrayTestFind = [4, 5, 3, 200, 15, 3, 2, 1]

const newFind = (array, value) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > value) {
            return result = array[i]
        }
    }
    
}
// Deve retornar 200
console.log(newFind(arrayTestFind, 10))


///////////////////////////////////////////////////////////////////////////
//--- FindIndex() ---//

let arrayFindIndex = [4, 5, 3, 200, 15, 3, 2, 1]

const newFindIndex = (array, value) => {
    let index = 0
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > value) {
            index = i
            break
        }
    }
    // Deve retornar 3
    console.log(index)
    return index
}
newFindIndex(arrayFindIndex, 10)


///////////////////////////////////////////////////////////////////////////
//--- every() ---//

let arrayEvery1 = [ 22, 34, 45, 23, 67, 87, 130 ]
let arrayEvery2 = [ 22, 34, 4, 23, 6, 7, 130 ]

const newEvery = (array, value) => {
    let result = true
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < value) {
            result = false
        }
    }
    return result
}
//      Deve retornar true
console.log(newEvery ( arrayEvery1, 10) )
//      Deve retornar false
console.log(newEvery ( arrayEvery2, 10) )

///////////////////////////////////////////////////////////////////////////
//--- Filter() ---//

let arrayFilter = [ 10, 54, 63, 8, 2, 62, 13, 1, 2, 97]

const newFilter = ( array, value) => {
    let arrayFiltered = new Array

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] >= value) {
            arrayFiltered.push(array[i])
        }
    }
    return arrayFiltered
}

let newArrayFiltered = newFilter(arrayFilter, 10)
//      Deve retornar [ 10, 54, 63, 8, 2, 62, 13, 1, 2, 97]
console.log(arrayFilter)
//      Deve retornar [ 10, 54, 63, 62, 13, 97 ]
console.log(newArrayFiltered)



///////////////////////////////////////////////////////////////////////////
//--- concat() ---//

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

console.log(newArrayConcat)



///////////////////////////////////////////////////////////////////////////
//--- includes() ---//

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
console.log( newIncludes ( arrayIncludes, 34 ) )


///////////////////////////////////////////////////////////////////////////
//--- indexOf() ---//

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
console.log( newIndexOf( arrayIndexOf, 10 ) )



// ///////////////////////////////////////////////////////////////////////////
// //--- join() ---//

let arrayJoin = ['Rodrigo', 'Luiz', 'Andrade']

const newJoin = (array, value) => {
    let join = new String

    for (let i = 0; i < array.length; i++) {

        if (value === NaN || value === undefined) { value = ',' }

        join += `${array[i]}`
            
        if (i + 1 < array.length) { join+= value }
    }
    return join
}
console.log( newJoin(arrayJoin) )

// ///////////////////////////////////////////////////////////////////////////
// //--- reduce() ---//

const arrayReduce = [ 1, 2, 3, 4]
const newReduce = (array, value) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {

        if (value != undefined) {
            array.push(value)
        }

        result+= array[i]
    }
    return result
}
let resultReduce = newReduce(arrayReduce, 5)

console.log(resultReduce)
console.log(resultReduce, '')
console.log(resultReduce, ' ')
console.log(resultReduce, '-')
console.log(resultReduce, '#')
console.log(resultReduce, '_')

// ///////////////////////////////////////////////////////////////////////////
// //--- slice() ---//






// ///////////////////////////////////////////////////////////////////////////
// //--- flat() ---//







// ///////////////////////////////////////////////////////////////////////////
// //--- flatMap() ---//






// ///////////////////////////////////////////////////////////////////////////
// //--- Array.of() ---//






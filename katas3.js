const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(result){
    console.log(result)
    return false;
}
function kata1(min, max) {
    // implemente o código do kata 1 aqui
    let result = [];
    for(let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
showResults(kata1(1, 25));
function kata2(min, max) {
    // implemente o código do kata 2 aqui
    let result = [];
    for(let i = max; i >= min; i--) {
        result.push(i);
    }
    return result;
}
showResults(kata2(1, 25));
function kata3(min, max) {
    return kata2(min, max);
}
showResults(kata3(-25, -1));
function kata4(min, max) {
    // implemente o código do kata 4 aqui
    return kata1(min, max);
}
showResults(kata4(-25, -1));
function kata5(min, max) {
    // implemente o código do kata 5 aqui
    let result = [];
    for(let i = max; i >= min; i--){
       if(i%2!=0){
        result.push(i);
       }
    }
    return result;
}
showResults(kata5(-25, 25));
function kata6(min, max) {
    // implemente o código do kata 6 aqui
    let result = [];
    for (let i = min; i <= max; i++) {
        if (i%3 == 0) {
            result.push(i)
        }
    }
    return result;
}
showResults(kata6(3, 100));
function kata7(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (i%7 == 0) {
            result.push(i)
        }
    }
    return result;
}
showResults(kata7(7, 100));
function kata8(min, max) {
    // implemente o código do kata 7 aqui
     let result = [];
     for (let i = max; i >= min; i--) {
         if (i % 3 == 0 || i % 7 == 0) {
             result.push(i)
         }
     }
     return result;
}
showResults(kata8(3, 100));
function kata9(min, max) {
   let result = [];
     for (let i = min; i <= max; i++) {
         if (i % 2 != 0 && i % 5 == 0) {
             result.push(i)
         }
     }
     return result;
}
showResults(kata9(5, 100));
function kata10(arr) {
    // implemente o código do kata 9 aqui
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i])
    }
    return result;
}
showResults(kata10(sampleArray));
function kata11(arr) {
    // implemente o código do kata 10 aqui
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}
showResults(kata11(sampleArray));
function kata12(arr) {
    // implemente o código do kata 11 aqui
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;
}
showResults(kata12(sampleArray));
function kata13(arr) {
    // implemente o código do kata 12 aqui
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 8 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}
showResults(kata13(sampleArray));
function kata14(arr) {
    // implemente o código do kata 13 aqui
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * arr[i]);
    }
    return result;
}
showResults(kata14(sampleArray));
function kata15(min, max) {
    // implemente o código do kata 15 aqui
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
showResults(kata15(1, 20));
function kata16(arr) {
    // implemente o código do kata 16 aqui
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
showResults(kata16(sampleArray));
function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

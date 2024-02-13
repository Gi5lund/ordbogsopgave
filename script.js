
// "use strict";
// let globalArray = [];

// function binarySearchFunction(value,values,strcmp){
//     let start=0;
//     let end=values.length-1;
// let mid=Math.floor((start+end)/2);
// while(start<=end){
//         if(strcmp(values[mid],value)===0){
//         return mid;}
//     if(strcmp(values[mid],value)<0){
//         start=mid+1;
//         mid=Math.floor((start+end)/2);
//     }
//      if(strcmp(values[mid],value)>0){
//         end=mid-1;
//         mid=Math.floor((start+end)/2);}
//     }
//     return -1;
// }  
    

//     const response = fetch("data/ddo_fullforms_2023-10-11.csv")
//     const data = response.text();
//     const arrayOfWords= data.split("\n").map(line => {
//         const parts = line.split("\t");
//         return {
//             variant: parts[0],
//             headword: parts[1],
//             homograph: parts[2],
//             partofspeech: parts[3],
//             id: parts[4]
//         };
//     });
//     globalArray = arrayOfWords;
   
    




// function strcmp(search,check) {
//     return search.localeCompare(check.variant, 'da');
//   }
"use strict";
let globalArray = [];

async function fetchDataAndProcess() {
    const response = await fetch("data/ddo_fullforms_2023-10-11.csv");
    const data = await response.text();
    const arrayOfWords = data.split("\n").map(line => {
        const parts = line.split("\t");
        return {
            variant: parts[0],
            headword: parts[1],
            homograph: parts[2],
            partofspeech: parts[3],
            id: parts[4]
        };
    });
    globalArray = arrayOfWords;
}
function perfFind(){
performance.mark('start-index');
globalArray.find(word => word.variant === "hestevogne");
performance.mark('end-index');
performance.measure('Finding index', 'start-index', 'end-index').duration;
console.log(performance.getEntriesByName('Finding index'));
}
function perfBinary(){

performance.mark('start-binary-search');
binarySearchFunction("hestevogne", globalArray, strcmp);
performance.mark('end-binary-search');
performance.measure('Binary search', 'start-binary-search', 'end-binary-search').duration;
console.log(performance.getEntriesByName('Binary search'));
}

function binarySearchFunction(value, values, strcmp) {
    let start = 0;
    let end = values.length - 1;
    let mid = Math.floor(start+(end-start) / 2);
    while (start <= end) {
        if (strcmp(values[mid], value) === 0) {
            return mid;
        }
        if (strcmp(values[mid], value) < 0) {
            start = mid + 1;
            mid = Math.floor(start+(end-start) / 2);
        }
        if (strcmp(values[mid], value) > 0) {
            end = mid - 1;
            mid = Math.floor(start+(end-start) / 2);
        }
    }
    return -1;
}


function strcmp(search, check) {
    if (typeof search === 'object' && search.variant) {
        return search.variant.localeCompare(check, 'da');
    } else {
        return String(search).localeCompare(check, 'da');
    }
}


// Call the async function to fetch and process data
fetchDataAndProcess();
// performance.mark('start-index');
// globalArray.find(word => word.variant === "hestevogne");
// performance.mark('end-index');
// performance.measure('Finding index', 'start-index', 'end-index').duration;
// console.log(performance.getEntriesByName('Finding index'));

// performance.mark('start-binary-search');
// binarySearchFunction("hestevogne", globalArray, strcmp);
// performance.mark('end-binary-search');
// performance.measure('Binary search', 'start-binary-search', 'end-binary-search').duration;
// console.log(performance.getEntriesByName('Binary search'));

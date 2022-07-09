//1
function curDate(value) {

    let d = new Date();
    let year = d.getFullYear();
    let month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1);

    let day = (d.getDate() < 10 ? '0' : '') + d.getDate();
    console.log(day + "/" + month + "/" + year);
}
console.log(curDate());

// 2
function curTime() {
    let d = new Date();
    let h = d.getHours();
    let m = (d.getMinutes() < 10 ? '0' : '') + (d.getMinutes());
    let s = (d.getSeconds() < 10 ? '0' : '') + (d.getSeconds());
    console.log(h + ":" + m + ":" + s);

}
console.log(curTime());

// 3
// function weekday() {
//     let d = new Date();
//     for (let i = 0; i < 7; i++) {
//         let day = d.getDay();
        
        
//     }

// }



//5  array
const users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
   ];

function avgAge(users) {
    const total = users.reduce(function(total,users) {
        return total += users.age;
    }, 0);
    return total/users.length;
}


//7 datetime

function humanize(date) {
    const now = new Date();

    const diff = Math.floor(now.getTime() - date.getTime() / 1000);

    if ( diff < 5 ) return "just now";

    else if ( diff < 60) return "${diff} second ago";

    else if ( diff < 3600) return "${Math.floor(diff / 60 )} minutes";

    else if ( diff < 86400) return "${Math.floor(diff / 3600)} hours";

    else if ( diff < 2592000) return "${Math.floor( diff / 86400)} days ago";

    else if ( diff < 946080000) 
        return " ${Math.floor(x:diff / 2592000 )} month ago";

    else return "Long time ago";
}

const now = new Date();
console.log(humanize(now));






















// let arr = ([1, 2, 3], [3, 4, 5]);
// arr1 = [1, 2, 3];
// arr2 = [3, 4, 5];


// function intersection(arr1, arr2) {
//     result = [];
//     count = 0;
//    for (let i = 0; i < arr.length; i++) {
//         if ( arr1[i] == arr2[i]) {
//             result[count] = arr1[i]
//             count++;
//         }
    
//    } return result;
    
// }
// console.log(intersection([1, 2, 3], [3, 4, 5]));

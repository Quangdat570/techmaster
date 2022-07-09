// object - trạng thái ( property) --- hành vi(method)

// let mySelf = {
//     name: "dat",
//     age: 23,
//     gender: "nam",
//     playgame: function () {
//         console.log("Playgame");
//     },

//     mid: function () {
//         console.log("Mid or AFK");
//     },
// };

// eat() {
//    console.log()
// }

// console.log(mySelf.name);
// mySelf.mid();

// DOT NOTATION => obj.key / obj.method()

// DOT NOTATION => obj["key"] / obj["method"] ()

// tên thuộc tính không giới hạn như là tên biến => lưu theo dạng chuỗi



// const key = prompt("nhập một giá trị bất kỳ về bản thân");
// console.log(mySelf[key]);


//--------------------------------
// thêm giá trị
// mySelf.job = student;
// xóa giá trị delete mySelf.name;
// duyệt qua các thuộc tính trong đối tượng


// for ( let key in mySelf) {
//    console.log(mySelf[key])   in ra giá trị trong obj

// console.log( key + ": " + mySelf[key]);

//}
//


// // This------------------------------------------------
// let dog = {
//     name: "bingo",
//     age:1,
//     breed: "béc-giê",
//     legs: 4,
//     brak() {
//         console.log(this.name + " is barking");
//     },
//     run() {
//         console.log(this.name + " is running on " + this.legs + " legs")
//     },

//     crazy() {
//         this.brak();
//         this.run();
//     },
//     // tự động gọi khi cần chuyển về dạng nguyên thủy
//     toString() {
//         return this.name;
//     },
//     //
//     valueOf() {
//         return this.name;
//     },

// };
// dog.crazy();
// console.log(String(dog));
// console.log(dog - 1);

// --------------------------------------------------
// function Book(isbn, author, title, page) {
//     this.isbn = isbn;
//     this.author = author;
//     this.title = title;
//     this.page = page;
// }
// const book1  = new Book("1", "dat", "javascript", "10");

// console.log(book1);

// //
// let Dog() {
//     this.name = name;
//     this.age = age;
// }
// Dog.prototype.bark() {
//     console.log(this.name + " is barking");
// }

//----------------------
// function Weapon(type, damage, speed) {
//     this.type = type;
//     this.damage = damage;
//     this.speed = speed;
// };

// function Character(name, level, blood, amor, Weapon) {
//     this.name = name;
//     this.level = level;
//     this.blood = blood;
//     this.amor = amor;
//     this.Weapon = Weapon;

// };

// Character.prototype.attack = function (other) {
//     const damaged = this.Weapon.damage - other.amor;
//     other.blood -= damaged;
// }
// Character.prototype.changeWeapon = function (newWeapon) {
//     this.Weapon = newWeapon;
// }
// const knife = new Weapon("Kiếm", 100, 2.3);
// const gun = new Weapon("gậy", 70, 1.2);

// const yasuo = new Character("yasuo", 6, 1200, 200, knife);
// const lux = new Character("lux", 5, 100, 140, gun);

// console.log(yasuo);
// console.log(lux);

// yasuo.attack(lux);

//------------------------------------------------------------

// function Dogs(name, age, breed, gender, color, legs)  {

//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.gender = gender;
//     this.color = color;
//     this.legs = legs;
//     " favorite food" : " milk",

//     eat() {
//         console.log( this.name + " is eating " dog["favorite food"] + " , yum yum...");
//     },

//     run() {
//         console.log(this.name + " is running on " + this.legs + "legs.." );
//     },

//     berk() {
//         console.log(" woof woof woof...")
//     },
// };

// dog.eat();


let dog = {
    name: "john",
    age: 2,
    breed: "pitbull",
    gender: "female",
    color: "yelow",
    legs: 4,
    "favorite food": " milk",
    eat() {
        console.log(this.name + " is eating " + dog["favorite food"] + " , yum yum...");
    },

    run() {
        console.log(this.name + " is running on " + this.legs + " legs.." );
},
        
    bark() {
        console.log("woof woof woof...");

},
    crazy() {
         this.bark();
         this.run();
    },
   
};



console.log(dog);
console.log(dog.name);
console.log(dog["favorite food"]);
dog.color = "brown";
dog.age = 4 ;
dog.eat();
dog.run();

for ( let key in dog) {
    console.log(key);
}

for ( let key in dog) {
    console.log(dog[key]);
}

dog.isCrazy = "angry";



console.log(dog.isCrazy);

if ( "isCrazy" in dog) {
   for (let i = 1; i <=5; i++) {
    console.log(dog.run() + dog.bark());
    
   }
} else {
    console.log(dog["name"] + " is not crazy" );
}
function reverseCrazy(str) {

    var newIsCrazy = "";
   for (let i = str.length-1; i >=0 ; i--) {
        newIsCrazy += str[i];  
   }
   return newIsCrazy;
}

console.log(reverseCrazy("angry"));

dog.crazy();
delete dog.isCrazy;
dog.crazy();


// for (const item in dog) {
//     console.log(item + " :" + dog[item]);
// }
// for (const item in dog) {
//     if (dog.hasOwnProperty.call(dog, item)) {
//         console.log( item);
        
//     }
// }


let clone = {};
for (let item in dog) {
    clone[item] = dog[item];
}

clone.name = " mikey";
console.log(dog);
console.log(clone);
let copy = {};

for ( let key in dog) {
    copy[key] = dog[key];
}
copy.name = "katakuri";
console.log(copy);
console.log(dog);



//-------------------------------------------------------------------------------
//1
const guess_list = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
};

function greeting(name) {
    if ( name in guess_list) {
        console.log("Hi, I'm " + name + " , and I'm from " + guess_list[name]);
    } else {
        console.log("Hi, I'm a guess...");
    }
}
greeting("Karla");

//2 
const family = {
    Susan:32,
    Fred: 34,
};
let a;
let b;
let years = 0;
function afterNYear(family, years) {
    a = family.Susan + years;
    b = family.Fred + years;
    years++;
    console.log("Susan" + " : " + a, ", Fred" + ": " +b);
}


console.log(afterNYear(family,10));

//3

const scores = { A: 100, B: 14, C: 9, D: 28, E: 145, F: 12, G: 3, H:10, I: 200, J: 100, K: 114,L: 100, M: 25, N: 450, O: 80, P: 2, Q: 12, R: 400,S: 113, T: 405, U: 11, V: 10,W: 10, X: 3, Y: 210, Z:23 
}

function calcNameScore(name) {
    
    
    for ( let char of scores) {
        // lọc qua từng chữ cái trong tên
        char = char.toUpperCase();
        // chuyển thành chữ cái viết hoa
        // lấy điểm tương ứng qua score
        const point = scores[char]
        // cộng dồn
       totalPoint +=point
       
    }
    
}
console.log(calcNameScore("M"));

//4
// const obj = { 
//     a : 1,
//     b : 2,
//     c : 3,
// };

// function invert(object) {
//     for ( let object in obj) {
//         for (let i = 0; i <obj.length - 1; i++) {
//             for (let j = i; j < obj.length; j++) {
//                 if ( obj[j] < obj[i]) {
//                     let t = obj[i];
//                     obj[i] = obj[j];
//                     obj[j] = t;
//                 }
                
//             }
            
//         }
//     }
    
// }

// console.log(obj);

 function invert(object) {
    const reverse = {};
    for ( let key in object) {
        reverse[object[key]] = key;
    }
    return reverse;
}
console.log(invert({a : 1}));

//6
const items = {
    "Gucci Fur": 3000,
    "Icecream": 4,
    "Dolce Gabana Heels": 4000,
    "Humbergur": 10
   };

function expensiveItems(items) {
    const result = {};
    for (  let key in items) {
        if ( items[key] >= 1000) result[key] = items[key];
    }
    return result;
}











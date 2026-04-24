//配列の宣言
let sampleArray = new Array();

// 配列の要素
let fruits = ["りんご","みかん","ぶどう"];

console.log(fruits);

//配列の要素を出力 インデックス(番号)/添字/添え字
console.log(fruits[0]);//りんご

//配列の要素の追加
fruits.push("バナナ");
console.log(fruits);

fruits.unshift("もも");
console.log(fruits);
console.log(fruits[0]);

fruits[4]="なし";

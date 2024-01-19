'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// テスト関数、タイトル関数、はtest-boilerplate.jsに記載。
//
title("ウォーミングアップ");
const arrayOfObjects = [
    { name: "alice", favoriteColor: "green" },
    { name: "bob", favoriteColor: "blue" },
];

// ここにコードを書きましょう
// function calc(...num, str) {
//     return obj["str"];
// }
function getNames(array) {
    // const result = [];
    // for (const obj of array) {
    //     result.push(obj["name"]);
    // }
    // return result;
    return array.map(function (obj) {
        return obj["name"];
    });
    // return array.map(calc(..."name"));
}
// function getFavoriteColors(array) {
//     const result = [];
//     for (const obj of array) {
//         result.push(obj["favoriteColor"]);
//     }
//     return result;
// }
const getFavoriteColors = array => array.map(elem => elem.favoriteColor)

test(getNames(arrayOfObjects), ["alice", "bob"]);
test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

title("講義　フィルター関数");

function evenArray(array) {
    const result = [];
    for (const num of array) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
test(evenArray([2, 3, 4, 5, 6]), [2, 4, 6]);

function greaterThanThreeArray(array) {
    //何かする
    const result = [];
    // for (let i = array.length - 3; i < array.length; i++) {
    //     result.push(array[i]);
    // }
    for (const num of array) {
        if (num > 3) {
            result.push(num);
        }
    }
    return result;
}
test(greaterThanThreeArray([2, 3, 4, 5, 6]), [4, 5, 6]);

function isEven(element) {
    return element % 2 === 0; //filter関数は真偽値が引数になるから
}

const originalArray = [2, 3, 4, 5, 6];

const filteredArray = originalArray.filter((num) => num % 2 === 0);

test(filteredArray, [2, 4, 6]); // 偶数を返す
title("講義　アロー関数")
const func = (num1, num2) => num1 + num2;
test(func(2, 3), 5);

// const func1 = name1 => { 'Hello, ${name1}!' };

// test(func1("Taka"), "Hello, Taka!");
// console.log("OK?",func1("Taka"));

title("基礎演習　１");
/**
 * @param {number} num
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
function isMultipleOfTen(num) {
    return num % 10 === 0;
}
test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
function getQuestions(array) {
    return array
        .filter(str => str.substr(0, 1) === str.substr(0, 1).toUpperCase())
        .filter(str => str.endsWith("?"));
}
const arrayOfStrings3 = [
    "Hi, there.",
    "What did you read?",
    "My name is JavaScript",
    "Do you cook?",
];

test(getQuestions(arrayOfStrings3), [
    "What did you read?",
    "Do you cook?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you cook?",
]);

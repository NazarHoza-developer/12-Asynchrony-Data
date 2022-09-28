function getPartOfString() {
    return String.fromCharCode(
        Date.now().toString().split("").reverse().join("").substr(0, 5)
    );
}

 async function getRandomChinese(length, time) {
   let counter = 0;
   let result = "";
   const generateWord = () => {
    return new Promise  ((res) => {
        setTimeout (() => {
            res(getPartOfString());
        }, time);
    });
   };
 for (let i = 0; i < length; i++)  {
    result += await generateWord();
    counter++;
 }
 return result;
}
getRandomChinese(5, 50).then((res) => {
    console.log(res);
})

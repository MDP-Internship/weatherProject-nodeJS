setTimeout(() => {
    console.log(3)
}, 2000);

setTimeout(() => {
    console.log(1)
}, 4000);
console.log(2)



// node.js asenkron biçimde çalışır yani bir yerden veri getirirken diğerinin gelmesini beklemez o veriyi getirirken diğer işlemleri de yapar.
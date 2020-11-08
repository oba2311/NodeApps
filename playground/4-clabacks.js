// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0,
//     };

//     callback(data);
//   }, 1000);
// };

// geocode("Tel-Aviv", (dataFromGeogode) => {
//   console.log(dataFromGeogode);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    let summ = a + b;
    callback(summ);
  }, 1000);
};

add(1, 4, (sum) => {
  console.log(sum);
});

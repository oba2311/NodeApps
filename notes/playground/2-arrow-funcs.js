// const square = function (x) {
//   return x ** 2;
// };

// const squareArrow = (x) => x ** 2;

// console.log(square(3));
// console.log(squareArrow(3));

const event = {
  name: "party",
  guestList: ["asdf", "a234sdf"],
  printGuestList() {
    console.log("guest list for " + this.name);
    this.guestList.forEach((element) => {
      console.log(element, "is attending", this.name);
    });
  },
};

event.printGuestList();

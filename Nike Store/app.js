const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const product = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenproduct = product[0]

const currentproductImg = document.querySelector(".productImg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolor = document.querySelectorAll(".color");
const currentproductsize = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the choosen product
      choosenproduct=product[index]

      //change text of current product
      currentproducttitle.textContent = choosenproduct.title
      currentproductprice.textContent = "$" + choosenproduct.price
      currentproductImg.src = choosenproduct.colors[0].img

      //assing new colors
      currentproductcolor.forEach((color, index) => {
        color.style.backgroundColor = choosenproduct.colors[index].code;
      });
    });
});

currentproductcolor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = choosenproduct.colors[index].img;
  });
});


currentproductsize.forEach((size, index) => {
   size.addEventListener("click", ()=>{
  currentproductsize.forEach((size) => {
    size.style.backgroundColor = "white";
    size.style.color = "black";
});
size.style.backgroundColor = "black";
size.style.color = "white";
});
});


const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",() => {
payment.style.display="flex"
})

close.addEventListener("click",() => {
  payment.style.display="none"
  })


const buybtn = document.querySelector(".buybtn");
buybtn.addEventListener("click",() => {
  product.style.display="flex"
  })
  

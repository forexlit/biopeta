export const PRODUCTS = [
  {
    id: 1,
    title: "2 x Anti-Shedding Cream 3.3oz (93g)",
    subtitle: "Great for Regular Use",
    badge: "Most popular",
    popular: true,
    gift: true,
    border: "border border-2 border-yellow-300",
    options: [
      {
        optionId: 11,
        title: "3-Months Supply",
        bottles: 3,
        price: 79.98,
        oldPrice: 139.98,
        total: 131.97,
        oldTotal: 179.97,
        list: [
          {
            title: "2 bottles delivered",
          },
        ],
        image: "/product/biopeta/2free.png",

        orderUrl: "https://buy.stripe.com/3csdRw7lrbNr5ZS9AE",
      },
    ],
  },
  {
    id: 2,
    title: "3 x Anti-Shedding Cream 3.3oz (93g)",
    subtitle: "For sustainable results",
    badge: "Best value",
    border: "border-2 border-green-400",
    gift: true,
    options: [
      {
        optionId: 21,
        title: "6-Months Supply",
        price: 99.99,
        oldPrice: 209.97,
        total: 203.94,
        oldTotal: 359.94,
        list: [
          {
            title: "3 bottles delivered",
          },
        ],
        image: "/product/biopeta/3free.png",
        orderUrl: "https://buy.stripe.com/fZe9Bg0X38Bfewo6ot",
      },
    ],
  },
  {
    id: 3,
    title: "1 x Anti-Shedding Cream 3.3oz (93g)",
    subtitle: "Ideal solution for trying out",
    badge: "",
    border: "border-2 border-green-400",
    options: [
      {
        optionId: 31,
        title: "1-Month Supply",
        price: 39.99,
        oldPrice: 69.99,
        total: 69.99,

        list: [
          {
            title: "1 bottle delivered",
          },
        ],
        image: "/product/biopeta/1left.png",

        orderUrl: "https://buy.stripe.com/4gw28ObBH4kZ4VO9AD",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Cortiway + Sleep Boost",
  //   subtitle: "Ashwagandha",
  //   badge: "For Weight Loss",
  //   border: "border-2 border-green-400",
  //   options: [
  //     {
  //       optionId: 21,
  //       title: "3-Months Supply",
  //       price: 43.99,
  //       oldPrice: 59.99,
  //       list: [
  //         {
  //           title: "6 Bottles",
  //         },
  //         {
  //           title: "New Formula",
  //         },
  //       ],
  //       image: "/3bottles.png",
  //       orderUrl: "https://Biopeta.com/product/11",
  //     },
  //     {
  //       optionId: 22,
  //       title: "6-Months Supply",
  //       price: 43.99,
  //       oldPrice: 59.99,
  //       list: [
  //         {
  //           title: "6 Bottles",
  //         },
  //         {
  //           title: "New Formula",
  //         },
  //       ],
  //       image: "/3bottles.png",
  //       orderUrl: "https://Biopeta.com/product/12",
  //     },
  //   ],
  // },
];

export const WEIGHTLOSS = [
  {
    id: 1,
    title: "Commit & Thrive",
    subtitle: "3-Months Supply",
    badge: "Most popular",
    popular: true,
    border: "border border-2 border-yellow-300",
    options: [
      {
        optionId: 11,
        title: "3-Months Supply",
        bottles: 3,
        price: 33.99,
        oldPrice: 49.99,
        priceWeight: 29.99,
        oldPriceWeight: 39.99,
        list: [
          {
            title: "3 bottles will be delivered",
          },
          {
            title: "60-Day 100% Money-Back Guarantee",
          },
        ],
        image: "/product/3bottles.png",
        orderUrl: "https://buy.stripe.com/6oE4ir4Cl21J2OIfZ5",
      },
      // {
      //   optionId: 12,
      //   title: "6-Months Supply",
      //   price: 33.99,
      //   bottles: 6,
      //   oldPrice: 59.99,
      //   list: [
      //     {
      //       title: "6 Bottles",
      //     },
      //     {
      //       title: "New Formula",
      //     },
      //   ],
      //   image: "/6bottles.png",
      //   orderUrl: "https://Biopeta.com/product/12",
      // },
    ],
  },
  {
    id: 2,
    title: "Transform & Maintain",
    subtitle: "6-Months Supply",
    badge: "Best value",
    border: "border-2 border-green-400",
    options: [
      {
        optionId: 21,
        title: "6-Months Supply",
        price: 28.99,
        oldPrice: 49.99,
        priceWeight: 19.99,
        oldPriceWeight: 39.99,
        list: [
          {
            title: "6 bottles will be delivered",
          },
          {
            title: "New formula with black pepper!",
          },
        ],
        image: "/product/11.png",
        orderUrl: "https://buy.stripe.com/28o5mv9WFdKr4WQdQY",
      },
      // {
      //   optionId: 22,
      //   title: "6-Months Supply",
      //   price: 43.99,
      //   oldPrice: 59.99,
      //   list: [
      //     {
      //       title: "6 Bottles",
      //     },
      //     {
      //       title: "New Formula",
      //     },
      //   ],
      //   image: "/3bottles.png",
      //   orderUrl: "https://Biopeta.com/product/12",
      // },
    ],
  },
  {
    id: 3,
    title: "Try Out",
    subtitle: "1-Month Supply",
    badge: "",
    border: "border-2 border-green-400",
    options: [
      {
        optionId: 21,
        title: "1-Month Supply",
        price: 49.99,
        oldPrice: 49.99,
        priceWeight: 39.99,
        oldPriceWeight: 39.99,
        list: [
          {
            title: "1 bottle of Cortiway Ashawagandha",
          },
          {
            title: "2 bottles of Cortiway Fat Burner",
          },
          {
            title: "Start Seeing Results!",
          },
        ],
        image: "/product/2weight.png",
        orderUrl: "https://buy.stripe.com/fZeg193yhbCj4WQ3ci",
      },
      // {
      //   optionId: 22,
      //   title: "6-Months Supply",
      //   price: 43.99,
      //   oldPrice: 59.99,
      //   list: [
      //     {
      //       title: "6 Bottles",
      //     },
      //     {
      //       title: "New Formula",
      //     },
      //   ],
      //   image: "/3bottles.png",
      //   orderUrl: "https://Biopeta.com/product/12",
      // },
    ],
  },
  // {
  //   id: 4,
  //   title: "Cortiway + Sleep Boost",
  //   subtitle: "Ashwagandha",
  //   badge: "For Weight Loss",
  //   border: "border-2 border-green-400",
  //   options: [
  //     {
  //       optionId: 21,
  //       title: "3-Months Supply",
  //       price: 43.99,
  //       oldPrice: 59.99,
  //       list: [
  //         {
  //           title: "6 Bottles",
  //         },
  //         {
  //           title: "New Formula",
  //         },
  //       ],
  //       image: "/3bottles.png",
  //       orderUrl: "https://Biopeta.com/product/11",
  //     },
  //     {
  //       optionId: 22,
  //       title: "6-Months Supply",
  //       price: 43.99,
  //       oldPrice: 59.99,
  //       list: [
  //         {
  //           title: "6 Bottles",
  //         },
  //         {
  //           title: "New Formula",
  //         },
  //       ],
  //       image: "/3bottles.png",
  //       orderUrl: "https://Biopeta.com/product/12",
  //     },
  //   ],
  // },
];

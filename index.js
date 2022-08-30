class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(order) {
    // if (this.menu.item !== )
    const orders = this.menu.find((item) => item.item === order);

    if (orders.price !== undefined) {
      this.orders.push(order);
    } else console.log("M1.:", "this item is currently unavailable");
  }

  fulfillOrder(item) {
    if (this.orders.length !== 0) {
      for (const item of this.orders) {
        console.log(`M2.: "The ${item} is ready!"`);
        this.orders.shift();
      }
    } else console.log(`M2.: "All orders have been fulfilled!"`);
  }

  listOrders() {
	  if (this.orders.length !== 0) {
    console.log("M3.:", this.orders);
  } else {
	  console.log("M3", []);
  }
}

  dueAmount() {

	let total = 0;
		this.orders.forEach((item) => {
			// console.log(item);
		for (const val of this.menu) {
			if (val.item === item) {
				total += val.price;
			}
		}
	})
	console.log(`M4.: Total price due ${total}`);

  }

  

  cheapestItem() {
	//   const cheap = Math.min(this.menu.price)
	//   console.log(cheap);

	// const min = Math.min(...menuArr1.menu.map(item => item.price))
	// console.log(min);
	// return min

	const result = this.menu.reduce((acc,item) => {
		acc.push(item.price)
		return acc
	}, [])
	const cheapPrice = Math.min(...result);
	// console.log(cheapPrice);

	const cheapItem = this.menu.find(item => {
		if(item.price === cheapPrice) {
			console.log("M5.:", item.item);
		}
	
	})
  }

  

  drinksOnly() {

	const drinks = this.menu .filter(item => {
		if (item.type === "Drink") {
			return item
		}
	}).map((item) => item.item)

  }

  foodOnly() {
	const food = this.menu .filter(item => {
		if (item.type === "Food") {
			return item
		}
	}).map((item) => item.item)

  }
}


// const shopName = new CoffeeShop ("Lala's Cafe")
const menuArr1 = new CoffeeShop("Lala's Cafe", [
  {
    item: "Cookie",
    type: "Food",
    price: 3.5,
  },
  {
    item: "Tea",
    type: "Drink",
    price: 2.5,
  },
  {
    item: "Croissant",
    type: "Food",
    price: 2,
  },
  {
    item: "Macchiato",
    type: "Drink",
    price: 4,
  },
]);

menuArr1.addOrder("Cookie");
menuArr1.addOrder("Tea");
// menuArr1.addOrder("Croissant");

// menuArr1.fulfillOrder();
// menuArr1.fulfillOrder();
// menuArr1.fulfillOrder();

menuArr1.listOrders();
menuArr1.dueAmount();
menuArr1.cheapestItem()
menuArr1.drinksOnly()
menuArr1.cheapestItem()
menuArr1.drinksOnly()
menuArr1.foodOnly ()
console.log(menuArr1);

// console.log(menuArr1.menu);

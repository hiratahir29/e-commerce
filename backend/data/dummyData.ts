// data/dummyData.js

export const sample_data = {
  users: [
    {
      name: "John Wick",
      email: "john@gmail.com",
      password: "123456",
      role: "admin"
    },
     {
      name: "Hira",
      email: "hira@gmail.com",
      password: "123456",
      role: "user"
    }
  ],
  products:  [
  {
    name: "Gaming Laptop",
    description: "High performance laptop for gaming",
    price: 1499.99,
    currency: "USD",
    category: "Electronics",
    image: "../src/assets/images/monitor.jpg",
    rating: 4.8,
    quantity: 10,
    inStock: true,
    comments: [
      {
        name: "Alice",
        comment: "Amazing performance!",
        rating: 5.0,
      },
      {
        name: "Bob",
        comment: "Battery could be better.",
        rating: 4.0,
      },
    ],
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 199.99,
    currency: "USD",
    category: "Electronics",
    image: "../src/assets/images/headphone.jpg",
    rating: 4.5,
    quantity: 25,
    inStock: true,
    comments: [
      {
        name: "Charlie",
        comment: "Very comfortable and clear sound.",
        rating: 5.0,
      },
    ],
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking smart watch with heart rate monitor",
    price: 149.99,
    currency: "USD",
    category: "Wearables",
    image: "../src/assets/images/watch.jpg",
    rating: 4.2,
    quantity: 30,
    inStock: true,
    comments: [],
  },
  {
    name: "Keyboard",
    description: "Portable Bluetooth speaker with rich sound",
    price: 59.99,
    currency: "USD",
    category: "Audio",
    image: "../src/assets/images/keyboard.jpg",
    rating: 4.3,
    quantity: 50,
    inStock: true,
    comments: [
      {
        name: "Dave",
        comment: "Great value for money.",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Power Bank",
    description: "Execellent battery life with portable feature",
    price: 79.99,
    currency: "USD",
    category: "Audio",
    image: "../src/assets/images/powerbank.jpg",
    rating: 4.3,
    quantity: 50,
    inStock: false,
    comments: [
      {
        name: "John",
        comment: "Great value for money.",
        rating: 4.5,
      },
    ],
  },
]
}

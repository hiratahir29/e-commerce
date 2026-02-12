// data/dummyData.js
export const products = [
    {
        name: "Gaming Laptop",
        description: "High performance laptop for gaming",
        price: 1499.99,
        currency: "USD",
        category: "Electronics",
        image: "./src/assets/images/gaming-laptop.jpg",
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
        image: "./src/assets/images/headphones.jpg",
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
        image: "./src/assets/images/smart-watch.jpg",
        rating: 4.2,
        quantity: 30,
        inStock: true,
        comments: [],
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with rich sound",
        price: 59.99,
        currency: "USD",
        category: "Audio",
        image: "./src/assets/images/bluetooth-speaker.jpg",
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
];

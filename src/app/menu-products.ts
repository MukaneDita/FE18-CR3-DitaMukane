export let menuProducts = [
    {
        name: "Baked Rigatoni",
        image: "rigatoni.jpg",
        description: "Spicy Italian sausage & meat sauce tossed & topped with mozzarella, Parmesan & ricotta",
        price: 13.50,
        availability: false
    }, {
        name: "Shrimp Fra Diavolo",
        image: "shrimpPasta.jpg",
        description: "garlic shrimp & crushed red pepper with penne in spicy rosa sauce",
        price: 15,
        availability: true
    }, {
        name: "The Cannellioni",
        image: "cannellioni.jpg",
        description: "An egg noodle stufed with beef, veal and chicken, baked with meat sauce and cream sauce",
        price: 14.50,
        availability: true
    }, {
        name: "Gabriello Ravioli",
        image: "ravioli.jpg",
        description: "Handmade noodles stuffed with a blend of fresh beef and veal and prepared in famous meat sauce",
        price: 14.50,
        availability: false
    }, {
        name: "Margherita",
        image: "margharita.jpg",
        description: "Fresh mozzarella, fresh basil & our authentic pizza sauce",
        price: 10.30,
        availability: true
    }, {
        name: "Pepperoni",
        image: "peperoni.jpg",
        description: "Oven baked, homemade pizza base cooked in a tray, with the following toppings: Pizza sauce, mozzarella cheese & pepperoni",
        price: 12,
        availability: true
    }, {
        name: "Spicy Arrabbiata",
        image: "arrabbiata.jpg",
        description: "Spicy Italian sausage, pepperoni, caramelized red onions, Gorgonzola, mozzarella, provolone & our authentic pizza sauce",
        price: 12.50,
        availability: false
    }, {
        name: "Lasagna",
        image: "lasagna.jpg",
        description: "towering layers of meat sauce, ricotta, mozzarella, provolone & Parmesan",
        price: 13.50,
        availability: true
    },
];

export interface IProducts {
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
}
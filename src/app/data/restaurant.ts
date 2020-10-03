export const restaurant = {
    name: 'Buongiorno',
    info: {
        address: {},
        phone: '',
        web: '',
        email: '',
        hours: '',
        social: [
            {
                name: 'twitter',
                link: ''
            },
            {
                name: 'Facebook',
                link: ''
            },
        ]
    },
    menu: [
        {
            type: "Lunch",
            description: 'Lunch served 11am-4pm',
            submenu: [
                {
                    name: 'salads',
                    description: 'Served with 2 rolls',
                    items: [
                        {
                            name: 'Garden salad',
                            description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                            price: 9.99,
                            priceArr: []
                        }
                    ]
                },
                {
                    name: 'salads',
                    description: 'Served with 2 rolls',
                    items: [
                        {
                            name: 'Garden salad',
                            description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                            price: 9.99,
                            priceArr: []
                        }
                    ]
                },
            ]
        },
        {
            type: 'Regular',
            description: '',
            submenu: [
                {
                    name: 'PIZZA',
                    description: 'Hand tossed new york style',
                    items: [
                        {
                            name: 'Traditional cheese pizza',
                            description: 'Thin crust hand tossed pizza, topped with mozzarella and pizza sauce. Add any topping from large selection',
                            price: '',
                            priceArr: [
                                {
                                    amount: 9.99,
                                    size: 'Small 12"'
                                },
                                {
                                    amount: 12.99,
                                    size: 'Medium 14"'
                                },
                                {
                                    amount: 15.99,
                                    size: 'Large"'
                                },
                            ]
                        },
                        {
                            name: 'Meat lovers pizza',
                            description: 'Mozzarella, pizza sauce, pepperoni, sausage meatball, ham and bacon',
                            price: '',
                            priceArr: [
                                {
                                    amount: 9.99,
                                    size: 'Small 12"'
                                },
                                {
                                    amount: 12.99,
                                    size: 'Medium 14"'
                                },
                                {
                                    amount: 15.99,
                                    size: 'Large"'
                                },
                            ]
                        },
                        {
                            name: 'Arugula',
                            description: 'Mozzarella cheese, fresh tomatoes, basil pesto topped with chilled arugula leaves drizzled with balsamic vinaigrette and olive oil. ',
                            price: '',
                            priceArr: [
                                {
                                    amount: 9.99,
                                    size: 'Small 12"'
                                },
                                {
                                    amount: 12.99,
                                    size: 'Medium 14"'
                                },
                                {
                                    amount: 15.99,
                                    size: 'Large"'
                                },
                            ]
                        },
                    ],
                    modifiers: [
                        {
                            name: 'toppings',
                            category: [
                                {
                                    name: 'veggie',
                                    price: 2.99,
                                    items: [
                                        'broccoli', 'mush'
                                    ]
                                },
                                {
                                    name: 'meat',
                                    price: 2.99,
                                    items: [
                                        'roni', 'meatball'
                                    ]
                                }
                            ]
                            
                        }
                    ]
                },
            ]
        },
    ]
}
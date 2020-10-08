export const restaurants = [   
    {
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
        dailySpecials: {
            name: 'Takeout Special',
            description: 'Large cheese pizza with 2 toppings',
            price: 9.99
        },
        menus: [
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
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            }                            
                        ]
                    },
                    {
                        name: 'Subs',
                        description: '',
                        items: [
                            {
                                name: 'House philly steak',
                                description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                                price: 9.99,
                                priceArr: []
                            }
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
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
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            }                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Allora Pizza & Pasta',
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
        dailySpecials: {
            name: 'Takeout Special',
            description: 'Large cheese pizza with 2 toppings',
            price: 9.99
        },
        menus: [
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
                        ],
                        mods: [                           
                            {
                                name: 'Dressings',
                                price: 0,
                                items: [
                                    'balsamic', 'ranch', 'blue cheese'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 0,
                                items: [
                                    'Chicken', 'Tuna', 'Salmon'
                                ]
                            }                            
                        ]
                    },
                    {
                        name: 'Subs',
                        description: '',
                        items: [
                            {
                                name: 'House philly steak',
                                description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                                price: 9.99,
                                priceArr: []
                            }
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
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
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            }                            
                        ]
                    },
                    {
                        name: 'Pasta',
                        description: 'Served with soup or salad and two garlic rolls',
                        items: [
                            {
                                name: 'Pasta marinara',
                                description: 'Thin crust hand tossed pizza, topped with mozzarella and pizza sauce. Add any topping from large selection',
                                price: 12.99,
                                priceArr: [
                                    {
                                        amount: 3.99,
                                        size: 'Add Meatballs'
                                    },
                                    {
                                        amount: 3.99,
                                        size: 'Add Sausage'
                                    },
                                    {
                                        amount: 3.99,
                                        size: 'Add chicken'
                                    },
                                ]
                            },
                        ],
                        mods: [                           
                            {
                                name: 'Pasta choice',
                                price: 0,
                                items: [
                                    'Penne', 'Spaghetti', 'Fettuchini'
                                ]
                            },
                            {
                                name: 'Side salad',
                                price: 0,
                                items: [
                                    'Garden slad', 'ceasar salad'
                                ]
                            },                            
                            {
                                name: 'Soup',
                                price: 0,
                                items: [
                                    'Pasta fajioli', 'Minestrone', 'chicken noodle'
                                ]
                            },                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Uncle Joe\'s',
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
        dailySpecials: {
            name: 'Takeout Special',
            description: 'Large cheese pizza with 2 toppings',
            price: 9.99
        },
        menus: [
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
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            }                            
                        ]
                    },
                    {
                        name: 'Subs',
                        description: '',
                        items: [
                            {
                                name: 'House philly steak',
                                description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                                price: 9.99,
                                priceArr: []
                            }
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
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
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            }                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'La Fogata',
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
        dailySpecials: {
            name: 'Takeout Special',
            description: 'Large cheese pizza with 2 toppings',
            price: 9.99
        },
        menus: [
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
                        ],
                        mods: [                           
                                                       
                        ]
                    },
                    {
                        name: 'Subs',
                        description: '',
                        items: [
                            {
                                name: 'House philly steak',
                                description: 'Iceberg and romaine lettuce, hard boiled egg, tomato, onion, cucumber, carrots black olives and pepperoncini',
                                price: 9.99,
                                priceArr: []
                            }
                        ],
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush'
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
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
                        mods: [                           
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                ]
                            },
                            {
                                name: 'meat toppings',
                                price: 2.99,
                                items: [
                                    'roni', 'meatball'
                                ]
                            },                            
                            {
                                name: 'veggie toppings',
                                price: 2.99,
                                items: [
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                    'broccoli', 'mush', 'broccoli', 'mush',
                                ]
                            },                        
                        ]
                    },
                ]
            },
        ]
    },
    

]
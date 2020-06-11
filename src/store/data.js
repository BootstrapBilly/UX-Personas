const initialState = {//set the initial state

    1 : {

        name:"SARAH JACKSON" ,
        occupation:"LAW STUDENT" ,

        bio: "When Sarah is not studying, she likes to party with friends, go to the gym and browse instagram. She has recently started taking the gym more seriously and is looking to gain knowledge about healthy foods.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 2],
            ["Meal ideas", 2],
        ],

        quote:"I want to eat healther, but I don't know what to cook.",

        goals:[
            "To cook healthier meals more often (Do)",
            "To feel inspired to cook (Feel)",
            "To be fit and healthy (Be)"
        ],

        frustrations:[
            "Healthy food can be expensive",
            "Not knowing what to cook",
        ],

        environment:[
            "Lives with 4 housemates in a room share",
            "Shops for herself only",
            "Cooks in a very busy shared kitchen",
            "Uses a phone and laptop"
        ],

        age:"21" ,
        location:"ESSEX" ,
        status:"SINGLE" ,
        color_1:"#af6d77" ,
        color_2:"#f7c1c9" ,
        image:"student.png"
        
    },

    2 : {

        name:"JIMMY SINGH" ,
        occupation:"MARKETING DIRECTOR" ,

        bio: "When Sarah is not studying, she likes to party with friends, go to the gym and browse instagram. She has recently started taking the gym more seriously and is looking to gain knowledge about healthy foods.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 2],
            ["Meal ideas", 2],
        ],

        quote:"I want to eat healther, but I don't know what to cook.",

        goals:[
            "To cook healthier meals more often (Do)",
            "To feel inspired to cook (Feel)",
            "To be fit and healthy (Be)"
        ],

        frustrations:[
            "Healthy food can be expensive",
            "Not knowing what to cook",
        ],

        environment:[
            "Lives with 4 housemates in a room share",
            "Shops for herself only",
            "Cooks in a very busy shared kitchen",
            "Uses a phone and laptop"
        ],

        age:"32" ,
        location:"LONDON" ,
        status:"MARRIED" ,
        color_1:"#329d9c" ,
        color_2:"#61c47a" ,
        image:"professional.png"
        
    },

    3 : {

        name:"3" ,
        occupation:"LAW STUDENT" ,

        bio: "When Sarah is not studying, she likes to party with friends, go to the gym and browse instagram. She has recently started taking the gym more seriously and is looking to gain knowledge about healthy foods.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 2],
            ["Meal ideas", 2],
        ],

        quote:"I want to eat healther, but I don't know what to cook.",

        goals:[
            "To cook healthier meals more often (Do)",
            "To feel inspired to cook (Feel)",
            "To be fit and healthy (Be)"
        ],

        frustrations:[
            "Healthy food can be expensive",
            "Not knowing what to cook",
        ],

        environment:[
            "Lives with 4 housemates in a room share",
            "Shops for herself only",
            "Cooks in a very busy shared kitchen",
            "Uses a phone and laptop"
        ],

        age:"21" ,
        location:"ESSEX" ,
        status:"SINGLE" ,
        color_1:"#4d446f" ,
        color_2:"#8a5082" ,
        image:"student.png"
        
    },

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {


        default:

            return state;
    }

}

export default authReducer

const initialState = {//set the initial state

    1 : {

        name:"OBI THE STUDENT" ,
        occupation:"LAW STUDENT" ,

        bio: "When Obi is not studying, she likes to party with friends, go to the gym and browse instagram. She has recently started taking the gym more seriously and is looking to gain knowledge about healthy foods.",

        skills:[
            ["Tech Savy", 5],
            ["Cooking", 1],
            ["Meal ideas", 1],
        ],

        quote:"I want to eat healther, but I don't know what to cook.",

        goals:[
            "To cook healthier meals more often (Do)",
            "To feel confident to cook (Feel)",
            "To be fit and healthy (Be)"
        ],

        frustrations:[
            "Healthy food can be expensive",
            "Some dishes seem very complicated",
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
        image:"student.png",

        persona_type:"SUPPLEMENTAL",
        persona_type_color:"black"
        
    },

    2 : {

        name:"JIMMY THE PROFESSIONAL" ,
        occupation:"DIRECTOR" ,

        bio: "Jimmy is a very busy corporate director working for a large company in London. The limited time he gets on his lunch break often encourages him to turn to fast food. He would like to eat less junk food and more healthy meals.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 3],
            ["Meal ideas", 2],
        ],

        quote:"It's too easy to eat fast food during my lunch break.",

        goals:[
            "To cook fresh meals more often (Do)",
            "To feel in control of his diet (Feel)",
            "To live a healthy lifestyle (Be)"
        ],

        frustrations:[
            "Too busy to cook fresh meals",
            "Not knowing what to cook",
        ],

        environment:[
            "Lives with his wife and child",
            "Shops for 3",
            "Takes turns cooking with his wife",
            "Uses a mainly a phone"
        ],

        age:"41" ,
        location:"LONDON" ,
        status:"MARRIED" ,
        mother:"FATHER" ,
        color_1:"#329d9c" ,
        color_2:"#61c47a" ,
        image:"professional.png",

        persona_type:"SUPPLEMENTAL",
        persona_type_color:"black"
        
    },

    3 : {

        name:"TOM THE GRADUATE" ,
        occupation:"ANALYST" ,

        bio: "Tom is a economics graduate who is now working for a large company in the Newcastle city center. He plays for a sunday league football team and likes to party on the weekend. He often buys his lunch from a supermarket.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 2],
            ["Meal ideas", 2],
        ],

        quote:"I'm getting bored of meal deals, its time for a change.",

        goals:[
            "Eat less processed food (Do)",
            "Feel better about his food choices (Feel)",
            "Save money and be healthier (Be)"
        ],

        frustrations:[
            "Doesn't have much time for fresh cooking",
            "Spends lot's of money on meal deals",
        ],

        environment:[
            "Lives with his friend in a flat",
            "Shops for only himself",
            "Cooks in a standard kitchen",
            "Uses a phone and laptop"
        ],

        age:"29" ,
        location:"NEWCASTLE" ,
        status:"SINGLE" ,
        color_1:"#4d446f" ,
        color_2:"#8a5082" ,
        image:"primary.png",

        persona_type:"PRIMARY",
        persona_type_color:"gold"
        
    },

    4 : {

        name:"JENNY THE MUM" ,
        occupation:"BUSINESS OWNER" ,

        bio: "Jenny runs a cake making business and most of her work involves making professional wedding cakes. She has recently been diagnosed with diabetes and is looking to reverse it through making changes to her eating habits.",

        skills:[
            ["Tech Savy", 2],
            ["Cooking", 4],
            ["Meal ideas", 3],
        ],

        quote:"I want to change my life for the better by eating healthier.",

        goals:[
            "Change her sugary food habits (Do)",
            "To feel healthier (Feel)",
            "To reverse her diabetes (Be)"
        ],

        frustrations:[
            "Finds it hard to give up sugary foods",
            "Has to cook for the whole family",
        ],

        environment:[
            "Lives with her husband and 2 children",
            "Husband does the shopping",
            "Cooks in a large, well equiped kitchen",
            "Uses a phone and tablet"
        ],

        age:"47" ,
        location:"SHEFFIELD" ,
        status:"MARRIED" ,
        mother:"MOTHER" ,
        color_1:"#2193b0 " ,
        color_2:"#6dd5ed" ,
        image:"special.png",

        persona_type:"SECONDARY",
        persona_type_color:"#e6e6e6"
        
    },


}

const authReducer = (state = initialState, action) => {

    switch (action.type) {


        default:

            return state;
    }

}

export default authReducer

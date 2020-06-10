const initialState = {//set the initial state

    student : {

        name:"SARAH JACKSON" ,
        occupation:"LAW STUDENT" ,

        bio: "When Sarah is not studying, she likes to party with friends, go to the gym and browse instagram. She has recently started taking the gym more seriously and is looking to gain knowledge about healthy foods.",

        skills:[
            ["Tech Savy", 4],
            ["Cooking", 2],
            ["Meal ideas", 2],
        ],

        quote:"I want to eat healther, but I don't know what to cook.",

        age:"21" ,
        location:"ESSEX" ,
        status:"SINGLE" ,
        color_1:"#329d9c" ,
        color_2:"#61c47a" ,
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

//Variable
let button = document.getElementById("gerar");

//Function to generate the 5 random numbers
function get_numbers(){

    //Container to hold random numbers
    let number_container = [];

    //Generate 5 random numbers
    for(let i = 0; i < 5; i++){
        //Get random numbers up to 100
        let random = Math.floor(Math.random() * 99);

        //Ignore 0
        if(random == 0){
            random = Math.floor(Math.random() * 99);
        }

        //Push random number
        number_container.push(random);
    }

    unique(number_container);

    //Display result area
    document.getElementById("result").style.display = "block";

    //Display random numbers
    document.getElementById("fill").innerHTML = number_container;

}

//Function to make sure every number is unique
function unique(array){

    array.sort((a,b)=>a-b);

    for(let i = 0; i <= array.length; i++){

        if(array[i-1] === array[i]){

            console.log(`same number found. 
                        NUMBER[I-1] PREVIOUS: ${array[i-1]}
                        NUMBER[I] PREVIOUS: ${array[i]}`
                        );

            array[i] = Math.floor(Math.random() * 99);

            console.log(`same number found. 
                        NUMBER[I-1] AFTER: ${array[i-1]}
                        NUMBER[I] AFTER: ${array[i]}`
                        );

            unique(array);
        }

    }

}

//Add event listener on button click
button.addEventListener("click",get_numbers);
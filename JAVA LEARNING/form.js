// retreaving the elemnts
const submit = () =>{

const fNameElement = document.getElementById("fname")
const lNameElement = document.getElementById("lname")
const emailElement = document.getElementById("email")
const numberElement = document.getElementById("number")


// Retreieve the values from the elements above
const fname = fNameElement.value;
const lname = lNameElement.value;
const email = emailElement.value;
const number = numberElement.value;
const submit = [fname, lname, email, number]

    if (fname == '') {
        alert('please enter your first name')
   
    }

    
    if (lname == '') {
        alert('please enter your last name')
   
    }

    if (email == '') {
        alert('please provide email')
   
    }
    if (number == '') {
        alert('please provide number')
   
    }
    

    else{
        alert('congratulations yourdetails have been received')
    }

    console.log(submit)
}









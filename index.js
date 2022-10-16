
let homescoreEl = 0
let guestscoreEl = 0

document.getElementById("homescore-el") = homescoreEl 
document.getElementById("guestscore-el") = guestscoreEl 



function plusOne(){
    let plusOne = 1  
    homescoreEl += plusOne 
 homescoreEl.textContent = homescoreEl + plusOne 
 guestscoreEl += plusOne 
 guestscoreEl.textContent = guestscoreEl + plusOne 
 console.log(plusOne)

}

function plusTwo(){
    let plusTwo = 2  
    homescoreEl += plusTwo
 homescoreEl.textContent = homescoreEl + plusTwo
 guestscoreEl += plusTwo
 guestscoreEl.textContent = guestscoreEl + plusTwo
 console.log(plusTwo)
}

function plusThree(){
    let plusThree = 3 
    homescoreEl += plusThree
 homescoreEl.textContent = homescoreEl + plusThree
 guestscoreEl += plusThree
 guestscoreEl.textContent = guestscoreEl + plusThree
 console.log(plusThree)
}


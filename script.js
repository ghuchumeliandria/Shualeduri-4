let input = document.getElementById("input")
let form = document.getElementById("form");
let invalidText = document.getElementById("invalidText")
// let index = "name"
// let p = document.getElementById("paragraph")
// let s = document.getElementById("meore")
// let img = document.getElementById("img")
// async function getData() {
//     let data = await fetch(`https://api.github.com/users/${input.value}`)
//     let users = await data.json()
  
//     p.textContent = users.login
//     img.src = users.avatar_url
//     // })
// }


// form.addEventListener('submit' , (value) =>{
//     getData();
//     value.preventDefault();
// })
form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    errorText();



    input.value = "";
})
function errorText(){
    if(input.value == "" ){
        invalidText.style.display = "block"
        
    }else{
        invalidText.style.display = "none"
    }
}


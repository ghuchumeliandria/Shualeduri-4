const input = document.getElementById("input");
const form = document.getElementById("form");
const invalidText = document.getElementById("invalidText");
const username = document.getElementById("username");
const profilePic = document.getElementById("profilePicture");
const nickname = document.getElementById("nickname");
const date = document.getElementById("date");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const follower = document.getElementById("follower");
const following = document.getElementById("following");
const locationT = document.getElementById("location");
const twitterUser = document.getElementById("twitterUser");
const link = document.getElementById("link");
const git = document.getElementById("@git");
const secondDate = document.getElementById("secondDate")
const secondBio = document.getElementById("secondBio")
const secondNickname = document.getElementById("secondNickname")
const light = document.getElementById("light")
let modeBtn = document.getElementById("modeBtn");
let booleanText = true;


async function getData() {
  try {
    let data = await fetch(`https://api.github.com/users/${input.value}`);
    let user = await data.json();
    
    username.textContent = user.name;
    profilePic.src = user.avatar_url;
    nickname.textContent = `@${user.login}`;
    secondNickname.textContent = `@${user.login}`;
    date.textContent = "Joined " + user.created_at.slice(0,user.created_at.length - 10);
    secondDate.textContent = "Joined " + user.created_at.slice(0,user.created_at.length - 10)
    repos.textContent = user.public_repos;
    follower.textContent = user.followers;
    following.textContent = user.following;
    link.textContent = "Not available";
    git.textContent = "Not available";
    light.textContent = ""
    if (user.bio == null ) {
      bio.textContent = "This profile has no bio";
      secondBio.textContent = "This profile has no bio"
    } else {
      bio.textContent = user.bio;
      secondBio.textContent = user.bio
    }
    if (user.location == null) {
      locationT.textContent = "Not Available";
    } else {
      locationT.textContent = user.location;
    }
    if (user.twitter_username == null) {
      twitterUser.textContent = "Not Available";
    } else {
      twitterUser.textContent = user.twitter_username;
    }
  } catch (error) {}
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorText();
  getData();

  input.value = "";
});

function errorText() {
  if (input.value == "") {
    invalidText.style.display = "block";
  } else {
    invalidText.style.display = "none";
  }
}

if(localStorage.getItem("darkmode") === 'true' ){
  document.body.classList.add("dark")
}
modeBtn.addEventListener("click" , () =>{
  document.body.classList.toggle("dark")
  changeText() 
  localStorage.setItem("darkmode" , document.body.classList.contains("dark"))  
})

function changeText (){
  if(booleanText){
    light.textContent = "DARK"
  }else{
    light.textContent = "LIGHT"
  }
  booleanText = !booleanText
}

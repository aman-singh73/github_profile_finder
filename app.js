let user_input=document.querySelector('#input')
const userImage=document.querySelector('.main-info')
const bio=document.querySelector('#bio')
const repos = document.querySelector("#repo")
const followers = document.querySelector("#followers")
const following = document.querySelector("#following")

const fetchUser=(username)=>{
    fetch(`https://api.github.com/users/${username}`)
    .then((data)=>data.json())
    .then((jsonData)=>{
        if(jsonData.message=='not found'){
            alert('user not found');
            return;
        } else {
            userImage.innerHTML=`<img src="${jsonData.avatar_url}" id="profile-img">
            <span class="name" id="name">${jsonData.name}</span>
            <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a>`;
            bio.innerHTML=jsonData.bio;
            repos.innerHTML=jsonData.public_repos;
            followers.innerHTML=jsonData.followers;
            following.innerHTML=jsonData.following;

        }
    })
    .catch((error)=>{
        console.log('catch'+error.message);
    });
}

const getUser=()=>{
    let username=user_input.value.trim();
    if(username.length==0){
        alert("invalid username");
    } else {
        fetchUser(username)
    }
    user_input.value=" ";
}
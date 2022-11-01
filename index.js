const mainInput = document.getElementById('nome');
const userName = document.getElementById('userName');
const userRepos = document.getElementById('repos');
const userFollowers = document.getElementById('followers');
const pfp = document.getElementById('userPfp');

const form = document.querySelector('.form')


async function getUsers(user){
    const APIResponse = await fetch(`https://api.github.com/users/${user}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderContent = async(user) =>{
    userName.innerHTML = 'loading...'
    const data = await getUsers(user)

    if(data){
        userName.innerHTML = data.login
        userRepos.innerHTML = data.public_repos
        userFollowers.innerHTML = data.followers
        pfp.src = data.avatar_url
        mainInput.value = ''
    }else{
        userName.innerHTML = 'Not found :('
        userRepos.innerHTML = ''
        userFollowers.innerHTML = ''
        pfp.style.display = 'none';
    }

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        renderContent(mainInput.value)
    })
}

renderContent(getUsers)
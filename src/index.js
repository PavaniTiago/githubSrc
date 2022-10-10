
const url = 'https://api.github.com/users/PavaniTiago';

async function getUsers(){
    await fetch(url)
    .then(res =>{
        return res.json()
    }) 
    .then(response => {
        document.getElementById('userName').innerHTML = response.login
        document.getElementById('repos').innerHTML = response.public_repos
        document.getElementById('followers').innerHTML = response.followers

    })
    .catch(e => console.log(e))
}

getUsers()
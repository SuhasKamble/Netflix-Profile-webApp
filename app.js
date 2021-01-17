const profiles = document.querySelector('.profiles')
const addBtn = document.querySelector('.addBtn')


let profileUsers = ["Suhas","Rohit","Salman","Ajay"]

const showUser=()=>{
    profileUsers.map((user)=>{
        profiles.insertAdjacentHTML("afterbegin",`
        
  <button class="btn profile-1"><span>${user}</span></button>
        `)
    })
}


const addUser = ()=>{
    let newUser = prompt("Please enter your name")

    if(newUser!=null && !profileUsers.includes(newUser)){
        profileUsers.push(newUser)
        console.log(newUser)
        
        profiles.insertAdjacentHTML("afterbegin",`
        <button class="btn profile-1"><span>${newUser}</span></button>
        `)
    }
    else{
        alert("Username already exists")
    }

}


addBtn.addEventListener('click',addUser)

showUser()

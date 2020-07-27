window.onload = () =>{
    let regForm = document.querySelector('form')
    regForm.addEventListener('submit', getRegData)
}

const getRegData = () =>{
    event.preventDefault()
    let data = new FormData(event.target)
    let regName =   data.get("reg_name")
    let regEmail =  data.get("reg_email")
    let regPasswd = data.get("reg_pwd")
    
    if(regName === "" || regEmail === "" || regPasswd === ""){
        alert("All fields must be filled")
    }
    else{
        let userEntData = {
            FullName:regName,
            Email:regEmail,
            Password:regPasswd
        }
        let flag = false
        let allRegUsers = regUsers.allData()
        if(allRegUsers.length === 0){
            regUsers.addUser(userEntData)
        }
        else{
            for (let i = 0; i < allRegUsers.length; i++){
                if(allRegUsers[i].Email === userEntData.Email){
                    alert("The Email is already used")
                }
                else if(i === allRegUsers.length - 1){
                    flag = true
                    alert("Successfully registered")
                    break
                }
            }
            if(flag){
                regUsers.addUser(userEntData)
            }
        }
        
    }
}
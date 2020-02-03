// https://github.com/settings/applications/1081288
//our entry point
//init github
const github = new Github()
const ui = new UI()
//search input
const searchUser=document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value

    if(userText !== ''){
        //make http call
github.getUser(userText)
        //which will return a promise i.e above which will give us a data
        .then(data => {
            
            if(data.profile.message === "Not Found"){
                //show alert
               ui.showAlert('User not found', 'alert alert-danger')
            }else {
            //show profile
             ui.showProfile(data.profile);
             ui.showRepos(data.repos);
        }
        })

       
    }else{
        //clear ui
        ui.clearProfile()
    }
})
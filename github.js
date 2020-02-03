class Github {
constructor(){
    this.client_id='1977312125751348c95b'
    this.client_secret='5054d4de3fde97aead394ee0a7d27a9c53952792';
    //amount of repos to display
    this.repos_count=5;
    this.repos_sort="created: asc"

}
async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page={this.repos_count}&sort=&{this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
//this will give us the json data
    const profile= await profileResponse.json();
    const repos= await reposResponse.json();
    return{
    //   profile: profile  in es6, you can write it has profile alone,since they are the same
    profile,
    repos
    }
}
}
class GitHub {
  constructor () {
    this.client_id = '414a19c0ee101a8d373a'
    this.client_secret = 'b34391dc4c285abf31d500cb9d1f441485ef907a'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser (user) {
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret=${this.client_secret}`)
    
    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${this.client_id}&client_secret=${this.client_secret}`)

    const profileData = await profileResponse.json()
    const reposData = await repoResponse.json()

    return {
      profile: profileData,
      repos: reposData 
    }
  }
}
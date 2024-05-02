const baseURL =
  process.env === "production"
    ? "https:keithbkelly.com"
    : "http://localhost:3066"

class Auth {
  constructor() {
    this.accessToken = ""
    this.refreshToken = ""
    this.authenticated = false
  }

  async login(accessToken) {
    const result = await (
      await fetch(`${baseURL}/admin/refresh_token`, {
        method: "POST",
        credentials: "include",
      })
    ).json()

    this.accessToken = result.accessToken
    this.refreshToken = result.refreshToken
    console.log(this.accessToken)
    this.authenticated = true
  }

  logout() {
    this.accessToken = ""
    this.refreshToken = ""
    this.authenticated = false
    console.log(this)
  }

  isAuthenticated() {
    return this.authenticated
  }
}

const auth = new Auth()
export default auth

export const isLoggedIn = () => {
  return false
}

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {

    async session({ session, token, user }) {

      try{
        console.log('session sucess => ', session)
        return {
          ...session,
          id: token.sub,
          jti: token.jti
        }
      }catch {
        console.log('session error => ', token)
        return {
          ...session,
          id: null
        }
      }

    },

    async signIn({ user, account, profile, email, credentials} ) {

      const { mail } = user

      try{
        console.log('signIn sucess => ', user)
        return true
      }catch(err) {
        console.log('signIn error => ', err)
        return false
      }

    }

  }

})

import { loginUser } from "@/action/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials)
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      return !!user
    },
    async session({ session, token }) {
      if (token) {
        session.email = token.email
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
      }
      return token
    }
  }
}
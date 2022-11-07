import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { verify } from 'argon2'

import { prisma } from './prisma'
import { loginSchema } from './validation/auth'

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const creds = await loginSchema.parseAsync(credentials)

        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        })

        if (!user) {
          return null
        }

        const isValidPassword = await verify(user.password, creds.password)

        if (!isValidPassword) {
          return null
        }

        return {
          id: user.id.toString(),
          email: user.email,
          username: user.username,
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        return { ...session, id: token.id }
      }

      return session
    },
  },
  jwt: {
    secret: 'super-secret',
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: '/',
    newUser: '/sign-up',
  },
}

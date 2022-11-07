import SuperJSON from 'superjson'
import { initTRPC } from '@trpc/server'
import { Context } from './context'

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
})

// We explicitly export the methods we use here
// This allows us to create reusable & protected base procedures
export const middleware = t.middleware
export const router = t.router
export const publicProcedure = t.procedure

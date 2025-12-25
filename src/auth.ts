import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { DefaultSession } from 'next-auth'

import { prisma } from '@/database'

declare module 'next-auth' {
    // 拓展全局User对象
    interface User {}

    // 拓展全局Account对象
    interface Account {}

    // 拓展全局Session对象
    interface Session {
        user: {} & DefaultSession['user'] // 合并原生Session的user对象定义
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: []
})

// @ts-nocheck
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import 'dotenv/config'

import { PrismaClient } from './prisma/client'

// 定义全局类型，防止 TS 报错
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// 创建单例函数
const prismaClientSingleton = () => {
    const connectionString = `${process.env.DATABASE_URL}`

    const adapter = new PrismaBetterSqlite3({ url: connectionString })

    // 将适配器传给 PrismaClient
    return new PrismaClient({
        adapter,
        log: ['query', 'error', 'warn'] // 开发时开启日志，方便调试
    })
}

// 如果全局已有实例则复用，否则新建
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}

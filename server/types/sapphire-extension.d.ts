import { PrismaClient } from '@prisma/client';

declare module '@sapphire/framework' {
    interface SapphireClient {
        prisma: PrismaClient;
    }
}

declare module 'discord.js' {
    interface Client {
        prisma: PrismaClient;
    }
}

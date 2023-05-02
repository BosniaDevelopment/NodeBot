export interface IGuildInfo {
    botPermissions: string;
    textChannels: Record<`${number}`, string>;
}

export interface IBotStats {
    servers: number;
    users: number;
}

export abstract class BotService {
    abstract getGuildInfo(guildId: string): Promise<IGuildInfo>;
    abstract getBotStats(): Promise<IBotStats>;
}

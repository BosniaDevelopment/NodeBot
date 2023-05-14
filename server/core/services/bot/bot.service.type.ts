export interface IGuildInfo {
    botPermissions: string;
    textChannels: Record<`${number}`, string>;
}

export interface IBotStats {
    tag: string;
    id: string;
    servers: number;
    users: number;
}

export interface IBotService {
    getGuildInfo(guildId: string): Promise<IGuildInfo>;
    getBotStats(): Promise<IBotStats>;
}

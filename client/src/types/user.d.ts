declare interface User {
	readonly info: Readonly<{
		id: string;
		username: string;
		discriminator: string;
		avatar?: string;
	}>;

    readonly guilds: IGuild[];
}

export enum Permission {
	Administrator = 8,
	ManageServer = 5,
}

export type Format = 'gif' | 'png' | 'jpeg' | 'dynamic';

export class Guild implements IGuild {
	public readonly id!: string;
	public readonly icon!: string;
	public readonly name!: string;
	public readonly owner?: boolean;
	public readonly permissions: number = 0;

	public static from(guildInfo: IGuild) {
		return new Guild(guildInfo);
	}

	public constructor({ permissions, ...guildInfo }: IGuild) {
		this.permissions = +permissions;
		Object.assign(this, guildInfo);
	}

	public get iconUrl(): string {
		return this.displayIconUrl('dynamic');
	}

	public hasPermission(permission: Permission): boolean {
		if (this.owner) return true;
		else return (this.permissions & (1 << permission)) === 1 << permission;
	}

	public displayIconUrl(format: Format = 'dynamic'): string {
		if (!this.icon)
			return 'https://cdn.discordapp.com/icons/1096509092215935066/a2909fc5aa9b768075f474577f498d24.webp';

		const base = `https://cdn.discordapp.com/icons/${this.id}/${this.icon}`;

		if (format === 'dynamic') {
			if (this.icon.startsWith('a_')) format = 'gif';
			else format = 'png';
		}

		return `${base}.${format}`;
	}
}

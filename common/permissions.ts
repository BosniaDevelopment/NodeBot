const Permissions = {
	Administrator: 3n,
	ManageServer: 5n
};

export const permissions = (raw: string | number | bigint) => new Permission(raw);

export class Permission {
	public static readonly Flags = Permissions;

	public bits: bigint;

	public constructor(raw: string | number | bigint) {
		this.bits = BigInt(raw);
	}

	private _has(permission: bigint): boolean {
		return !!(this.bits >> permission & 1n);
	}

	public has(permission: bigint): boolean {
		return this._has(Permission.Flags.Administrator) || this._has(permission);
	}
}

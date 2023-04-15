declare interface IGuild {
    readonly id: string;
    readonly icon: string;
    readonly name: string;
    readonly owner?: boolean;
    readonly permissions: number;
}

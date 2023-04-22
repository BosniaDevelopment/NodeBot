import { PrismaClient } from '@prisma/client';

const testGuildId = '1096509092215935066';

const client = new PrismaClient();

async function main() {
	await client.$connect();

	const testGuildConfig = await client.server.findFirst({
		where: {
			id: testGuildId
		},
	});

	if (testGuildConfig !== null) return;

	await client.server.create({
		data: {
			id: testGuildId,
		},
	});
}

main()
	.then(async () => {
		await client.$disconnect();
	})
	.catch(async (error: Error) => {
		console.error(error);
		await client.$disconnect();
		process.exit(1);
	});

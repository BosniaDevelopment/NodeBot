import { Injectable } from '@nestjs/common';
import { Server } from '@prisma/client';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class GuildConfigService {
	public constructor(private readonly prisma: PrismaService) {}

	public async getConfig(id: number) {
		return await this.prisma.server.findFirst({ where: { id } });
	}

	public async edit(config: Server) {
		await this.prisma.server.update({ where: { id: config.id }, data: config });
	}
}

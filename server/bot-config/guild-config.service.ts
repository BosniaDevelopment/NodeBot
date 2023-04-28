import { Injectable } from '@nestjs/common';
import { Server } from '@prisma/client';
import { PrismaService } from '@/core/services/prisma.service';

@Injectable()
export class GuildConfigService {
	public constructor(private readonly prisma: PrismaService) {}

	public async getConfig(id: string) {
		return await this.prisma.server.findFirst({ where: { id } });
	}

	public async edit({ id, ...config }: Server) {
		await this.prisma.server.update({ where: { id }, data: config });
	}
}

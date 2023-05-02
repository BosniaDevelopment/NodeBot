import { INestApplication, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { Redis } from 'ioredis';
import { createPrismaRedisCache } from 'prisma-redis-middleware';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	private readonly logger = new Logger(PrismaClient.name);

	public constructor(private readonly config: ConfigService) {
		super();
	}

	public addRedisCache(redisUri: string) {
		const redis = new Redis(redisUri);

		redis.on('connect', () => {
			this.logger.log('Connected to redis cache server');
		});

		this.$use(createPrismaRedisCache({
			storage: {
				type: 'redis',
				options: {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					client: redis,
					invalidation: { referencesTTL: 300 },
				},
			},
			cacheTime: 300
		}));
	}

	public async onModuleInit() {
		const redisUri = this.config.get<string | void>('REDIS_URI');

		if (redisUri) {
			this.addRedisCache(redisUri);
		}

		await this.$connect();
	}

	public async enableShutdownHooks(app: INestApplication) {
		this.$on('beforeExit', () => app.close());
	}
}

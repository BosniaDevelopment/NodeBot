import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from '../auth.guard';

/**
 * Can be used only with AuthGuard
 */
export const Guilds = createParamDecorator((_: void, ctx: ExecutionContext) => {
	return ctx.switchToHttp().getRequest<FastifyRequest>()[AuthGuard.guilds];
});

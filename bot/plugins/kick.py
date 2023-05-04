from crescent import command
from crescent import Context

from bot.utils.plugins import Plugin

plugin = Plugin()


@plugin.include
@command(name="kick", description="")
class KickCommand:
    @staticmethod
    async def callback(ctx: Context) -> None:
        await ctx.respond(ctx.locale)

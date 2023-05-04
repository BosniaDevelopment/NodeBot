from crescent import command
from crescent import Context

from bot.utils.plugins import Plugin

plugin = Plugin()


@plugin.include
@command(name="timeout", description="")
class TimeoutCommand:
    @staticmethod
    async def callback(ctx: Context) -> None:
        await ctx.respond(ctx.locale)

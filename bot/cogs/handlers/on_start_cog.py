import discord
from discord.ext import commands
from rich import print as pprint


class OnStartCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        from bot.config import NODEBOT_API_LISTEN_SYMBOL
        pprint(f"[green]Started[/] as [italic]{self.bot.user.name}#{self.bot.user.discriminator}[/]")
        await self.bot.change_presence(
            activity=discord.Activity(type=discord.ActivityType.listening, name="xMml")
        )

        print(NODEBOT_API_LISTEN_SYMBOL)


def setup(bot: commands.Bot):
    bot.add_cog(OnStartCog(bot))

""""""

from discord import Cog, Bot, Activity, ActivityType
from rich import print

from bot import __version__


class OnStartCog(Cog):
    """"""

    def __init__(self, bot: Bot):
        """"""
        self.bot = bot

    @Cog.listener()
    async def on_ready(self):
        """"""
        username = self.bot.user.name
        discriminator = self.bot.user.discriminator

        print(f"[green]Started[/] as [italic]{username}#{discriminator}[/]")

        activity = Activity(name=f"v{__version__}",
                            type=ActivityType.listening)

        await self.bot.change_presence(activity=activity)


def setup(bot: Bot):
    """"""
    bot.add_cog(OnStartCog(bot))

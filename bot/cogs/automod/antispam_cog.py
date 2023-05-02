import discord
from discord.ext import commands
from bot.locale import LocaledEmbed, LocaledOption
from bot.modules.db.request_status import RequestStatus
from bot.modules.db.servers.servers_service import ServerService


class AntiSpamCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message: discord.Message):
        print(message)


def setup(bot: commands.Bot):
    print(LocaledOption('name').on_guild_join_message)
    bot.add_cog(AntiSpamCog(bot))

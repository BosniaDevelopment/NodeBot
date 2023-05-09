import discord
from discord.ext import commands


class AntiSpamCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message: discord.Message):
        ...


def setup(bot: commands.Bot):
    bot.add_cog(AntiSpamCog(bot))

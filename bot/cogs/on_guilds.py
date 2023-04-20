import discord
from discord.ext import commands
from bot.locale import Localed


class OnGuildsCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_guild_join(self, guild: discord.Guild):
        await guild.system_channel.send(Localed(guild.preferred_locale).on_guild_join_message)


def setup(bot: commands.Bot):
    bot.add_cog(OnGuildsCog(bot))

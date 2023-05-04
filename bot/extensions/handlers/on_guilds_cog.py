import discord
from discord.ext import commands
from bot.locale import LocaledEmbed
from bot.modules.db.request_status import RequestStatus
from bot.modules.db.servers.servers_service import ServerService


class OnGuildsCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_guild_join(self, guild: discord.Guild):
        if (creation_status := await ServerService(id=str(guild.id)).create()) is RequestStatus.exists:
            await guild.system_channel.send(
                embed=LocaledEmbed(guild.preferred_locale).on_old_guild_join_message
            )
        elif creation_status is RequestStatus.success:
            discord.Embed()
            await guild.system_channel.send(
                embed=LocaledEmbed(guild.preferred_locale).on_guild_join_message
            )


def setup(bot: commands.Bot):
    bot.add_cog(OnGuildsCog(bot))

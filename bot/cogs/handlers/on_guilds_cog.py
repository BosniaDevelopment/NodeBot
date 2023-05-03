""""""

from discord import Cog, Bot, Guild, Embed
from bot.locale import locales
from bot.modules.db.request_status import RequestStatus
from bot.modules.db.servers.servers_service import ServerService
from bot.utils.constants.colors import DEFAULT_EMBED_COLOR


class OnGuildsCog(Cog):
    """"""

    def __init__(self, bot: Bot):
        """"""
        self.bot = bot

    @Cog.listener()
    async def on_guild_join(self, guild: Guild):
        """"""
        server_service = await ServerService(id=str(guild.id)).create()

        if (creation_status := server_service) is RequestStatus.exists:
            ...
            code = guild.preferred_locale
            description = locales.on_guild_join_message[code]

            embed = Embed(
                title="",
                description=description,
                color=DEFAULT_EMBED_COLOR
            )

            await guild.system_channel.send(embed=embed)

        elif creation_status is RequestStatus.success:
            ...
            code = guild.preferred_locale
            description = locales.on_old_guild_join_message[code]

            embed = Embed(
                title="",
                description=description,
                color=DEFAULT_EMBED_COLOR
            )

            await guild.system_channel.send(embed=embed)


def setup(bot: Bot):
    """"""
    bot.add_cog(OnGuildsCog(bot))

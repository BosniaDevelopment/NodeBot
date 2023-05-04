from hikari import StartedEvent, StoppedEvent, GuildJoinEvent, Embed

from .utils.constants.colors import DEFAULT_EMBED_COLOR
from .modules.db.status import SUCCES, EXISTS
from .modules.db.servers.servers import ServerService

from .locale.handlers.on_guild_join import (
    OnNewGuildJoinEmbedDescriptionLocaleString,
    OnOldGuildJoinEmbedDescriptionLocaleString,
    OnGuildJoinEmbedTitleLocaleString
)


class Model:
    def __init__(self) -> None:
        ...

    async def on_start(self, _: StartedEvent) -> None:
        ...

    async def on_stop(self, _: StoppedEvent) -> None:
        ...

    @staticmethod
    async def on_guild_join(event: GuildJoinEvent) -> None:
        guild = await event.fetch_guild()
        system_channel = await guild.fetch_system_channel()

        id__ = str(guild.id)
        locale = guild.preferred_locale

        title = OnGuildJoinEmbedTitleLocaleString.build()[locale]

        if (creation_status := await ServerService(id=id__).create()) is EXISTS:
            description = OnOldGuildJoinEmbedDescriptionLocaleString.build()[locale]

            embed = Embed(
                title=title,
                description=description,
                color=DEFAULT_EMBED_COLOR
            )

        elif creation_status is SUCCES:
            description = OnNewGuildJoinEmbedDescriptionLocaleString.build()[locale]

            embed = Embed(
                title=title,
                description=description,
                color=DEFAULT_EMBED_COLOR
            )

        await system_channel.send(embed=embed)

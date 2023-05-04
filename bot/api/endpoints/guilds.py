from fastapi import APIRouter
from ..models.guild import GuildResponse


router = APIRouter()


@router.get("/{guildId}")
async def guilds(guildId: int) -> GuildResponse:
    from bot.commons.common import NodeBotBuilder
    guild = NodeBotBuilder.get_guild(guildId)

    return GuildResponse(
        botPermissions=guild.me.guild_permissions.value,
        textChannels={
            item.id: item.name for item in guild.text_channels
        }
    )

from fastapi import APIRouter
from ..models.stat import StatsResponse


router = APIRouter()


@router.get("/")
async def stat_root() -> StatsResponse:
    from bot.common.common import NodeBotBuilder

    return StatsResponse(
        tag=f'{NodeBotBuilder.user.name}#{NodeBotBuilder.user.discriminator}',
        id=str(NodeBotBuilder.user.id),
        servers=len(NodeBotBuilder.guilds),
        users=len(NodeBotBuilder.users)
    )

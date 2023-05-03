from fastapi import APIRouter
from ..models.stat import StatsResponse


router = APIRouter()


@router.get("/")
async def stat_root() -> StatsResponse:
    from bot.common import NodeBot

    return StatsResponse(
        tag=f'{NodeBot.user.name}#{NodeBot.user.discriminator}',
        id=str(NodeBot.user.id),
        servers=len(NodeBot.guilds),
        users=len(NodeBot.users)
    )

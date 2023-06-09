from fastapi import APIRouter
from ..models.stat import StatsResponse


router = APIRouter()


@router.get("")
async def stats_root() -> StatsResponse:
    from bot import NodeBot

    return StatsResponse(
        tag=f'{NodeBot.user.name}#{NodeBot.user.discriminator}',
        id=str(NodeBot.user.id),
        servers=len(NodeBot.guilds),
        users=len(NodeBot.users)
    )

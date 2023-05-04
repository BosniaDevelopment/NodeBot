from fastapi import APIRouter
from .endpoints import root, guilds, stat


router = APIRouter()
router.include_router(root.router)
router.include_router(guilds.router, prefix='/guilds')
router.include_router(stat.router, prefix='/stat')

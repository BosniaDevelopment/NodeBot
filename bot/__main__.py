from .bot import bot
from .utils.constants.presences import activity
from .utils.constants.presences import status


bot.run(
    activity=activity,
    status=status,
    asyncio_debug=True,
    propagate_interrupts=True,
    coroutine_tracking_depth=20,
)

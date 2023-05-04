from bot import __version__
from hikari import Status, Activity, ActivityType


status = Status.ONLINE
activity = Activity(
    name=f"v{__version__}",
    type=ActivityType.PLAYING
)

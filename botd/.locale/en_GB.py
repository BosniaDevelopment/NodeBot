from .locale import LocaleModel
from .locale import Locale
from .common import PANEL_URL

ON_GUILD_JOIN_MESSAGE = (
    "NodeBot is here! You can start setting it"
    f" up by visiting the [panel]({PANEL_URL})"
)
ON_OLD_GUILD_JOIN_MESSAGE = (
    "Hello again! NodeBot is already running on this server, but you"
    f" can change its configuration by visiting [panel]({PANEL_URL})"
)

en_GB_locale_model = LocaleModel(
    on_guild_join_message=ON_GUILD_JOIN_MESSAGE,
    on_old_guild_join_message=ON_OLD_GUILD_JOIN_MESSAGE
)

en_GB_locale = Locale("en-GB", en_GB_locale_model)

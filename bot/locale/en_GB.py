""""""

from .discord import discord_locales
from .common import PANEL_URL


ON_GUILD_JOIN_MESSAGE = (
    "NodeBot is here! You can start setting it"
    f" up by visiting the [panel]({PANEL_URL})"
)
ON_OLD_GUILD_JOIN_MESSAGE = (
    "Hello again! NodeBot is already running on this server, but you"
    f" can change its configuration by visiting [panel]({PANEL_URL})"
)

en_GB_on_guild_join_message = {discord_locales.UNITED_KINGDOM: ON_GUILD_JOIN_MESSAGE}
en_GB_on_old_guild_join_message = {discord_locales.UNITED_KINGDOM: ON_OLD_GUILD_JOIN_MESSAGE}
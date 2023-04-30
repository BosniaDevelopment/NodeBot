from bot.locale.locale import LocaleModel
from bot.locale.common_strings import CommonStrings


class en_US(LocaleModel):
    on_guild_join_message = f'NodeBot is here! You can start setting it up by visiting the ' \
                            f'[panel]({CommonStrings.nodebot_panel_url})'
    on_old_guild_join_message = f'Hello again! NodeBot is already running on this server, but you can change its ' \
                                f'configuration by visiting [panel]({CommonStrings.nodebot_panel_url})'

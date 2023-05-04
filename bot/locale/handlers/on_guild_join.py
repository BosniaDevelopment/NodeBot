from ..locales import LocaleString
from bot.common import PANEL_URL


class OnGuildJoinEmbedTitleLocaleString(LocaleString):
    _fallback = "on_guild_join_title"

    en_GB = "Hello"
    en_US = en_GB
    uk = "Привіт"
    ru = "Привет"


class OnNewGuildJoinEmbedDescriptionLocaleString(LocaleString):
    _fallback = "on_new_guild_join_description"

    en_GB = "NodeBot is here! You can start setting it up by visiting the [panel]({PANEL_URL})"
    en_US = en_GB
    uk = "NodeBot тут! Ви можете почати його налаштування відвідавши [панель]({PANEL_URL})"
    ru = "NodeBot здесь! Вы можете начать его настройку, посетив [панель]({PANEL_URL})"


class OnOldGuildJoinEmbedDescriptionLocaleString(LocaleString):
    _fallback = "locale_on_old_guild_join"

    en_GB = (
        "Hello again! NodeBot is already running on this server, "
        "but you can change its configuration by visiting [panel]({PANEL_URL})"
    )
    en_US = en_GB
    uk = (
        "Знову привіт! NodeBot вже працює на цьому сервері, але ви можете змінити його "
        f"конфігурацію, відвідавши [панель]({PANEL_URL})"
    )
    ru = (
        "Еще раз здравствуйте! NodeBot уже был на этом сервере, но вы всё равно "
        f"можете изменить его конфигурацию, посетив [панель]({PANEL_URL})"
    )

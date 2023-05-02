from .locale import LocaleModel
from .locale import Locale
from .common import PANEL_URL


ON_GUILD_JOIN_MESSAGE = (
    f"NodeBot тут! Ви можете почати його"
    f" налаштування відвідавши [панель]({PANEL_URL})"
)
ON_OLD_GUILD_JOIN_MESSAGE = (
    f"Знову привіт! NodeBot вже працює на цьому сервері, але ви можете"
    f" змінити його конфігурацію, відвідавши [панель]({PANEL_URL})"
)

uk_locale_model = LocaleModel(
    on_guild_join_message=ON_GUILD_JOIN_MESSAGE,
    on_old_guild_join_message=ON_OLD_GUILD_JOIN_MESSAGE
)

uk_locale = Locale("uk", uk_locale_model)

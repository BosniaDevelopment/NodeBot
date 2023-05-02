from .locale import LocaleModel
from .locale import Locale
from .common import PANEL_URL


ON_GUILD_JOIN_MESSAGE = (
    "NodeBot здесь! Вы можете начать его"
    f" настройку, посетив [панель]({PANEL_URL})"
)
ON_OLD_GUILD_JOIN_MESSAGE = (
    "Ещё раз здравствуйте! NodeBot уже был на этом сервере,"
    f" но Вы всё равно его настроить, посетив [панель]({PANEL_URL})"
)

ru_locale_model = LocaleModel(
    on_guild_join_message=ON_GUILD_JOIN_MESSAGE,
    on_old_guild_join_message=ON_OLD_GUILD_JOIN_MESSAGE
)

ru_locale = Locale("ru", ru_locale_model)

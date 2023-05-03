from bot.locale.locale import LocaleModel
from bot.locale.common_strings import CommonStrings


LC_uk = LocaleModel(
    on_guild_join_message=(
        f'NodeBot тут! Ви можете почати його налаштування відвідавши '
        f'[панель]({CommonStrings.nodebot_panel_url})'
    ),
    on_old_guild_join_message=(
        f'Знову привіт! NodeBot вже працює на цьому сервері, але ви можете змінити його '
        f'конфігурацію, відвідавши [панель]({CommonStrings.nodebot_panel_url})'
    )
)
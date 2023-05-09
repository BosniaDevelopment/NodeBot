from bot.locale.locale import LocaleModel
from bot.locale.common_strings import CommonStrings


LC_ru = LocaleModel(
    on_guild_join_message=(
        f'NodeBot тут! Ви можете почати його налаштування відвідавши '
        f'[панель]({CommonStrings.nodebot_panel_url})'
    ),
    on_old_guild_join_message=(
        f'Знову привіт! NodeBot вже працює на цьому сервері, але ви можете змінити його '
        f'конфігурацію, відвідавши [панель]({CommonStrings.nodebot_panel_url})'
    ),

    timeout_command_name='таймаут',
    timeout_command_description='Команда для тайм-аута участника',
    timeout_command_option_member='участник',
    timeout_command_option_member_description='УЧАСТНИК',
    timeout_command_option_reason='причина',
    timeout_command_option_reason_description='ПРИЧИНА',
    timeout_command_option_reason_default='Без причины',
    timeout_command_result_embed_title='Тайм-аут',
    timeout_command_result_embed_description='Модератор <@{moderator_id}> отправил в тайм-аут участника <@{member_id}>',
    timeout_command_result_embed_text_duration='Продолжительность',

    microseconds_nom='микросекунды',
    microseconds_pos='микросекунд',
    milliseconds_nom='миллисекунды',
    milliseconds_pos='миллисекунд',
    seconds_nom='секунды',
    seconds_pos='секунд',
    minutes_nom='минуты',
    minutes_pos='минут',
    hours_nom='часы',
    hours_pos='часов',
    days_nom='дни',
    days_pos='дней',
    weeks_nom='недели',
    weeks_pos='недель'
)

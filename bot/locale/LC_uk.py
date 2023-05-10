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
    ),

    timeout_command_name='таймаут',
    timeout_command_description='Команда для тайм-аута учасника',
    timeout_command_option_member='учасник',
    timeout_command_option_member_description='УЧАСНИК',
    timeout_command_option_reason='причина',
    timeout_command_option_reason_description='ПРИЧИНА',
    timeout_command_option_reason_default='Без причини',
    timeout_command_result_embed_title='Тайм-аут',
    timeout_command_result_embed_description='Модератор <@{moderator_id}> відправив в тайм-аут учасника <@{member_id}>',
    timeout_command_result_embed_text_duration='Тривалість',

    microseconds_nom='мікросекунди',
    microseconds_pos='мікросекунд',
    milliseconds_nom='мілісекунди',
    milliseconds_pos='мілісекунд',
    seconds_nom='секунди',
    seconds_pos='секунд',
    minutes_nom='хвилини',
    minutes_pos='хвилин',
    hours_nom='години',
    hours_pos='годин',
    days_nom='дні',
    days_pos='днів',
    weeks_nom='тижні',
    weeks_pos='тижнів',

    error='Помилка',
    unknown_error='Сталася невідома помилка',
    error_bot_does_not_have_enough_rights='Бот має недостатньо прав для виконання цієї дії',
    error_not_enough_rights='Недостатньо прав для виконання цієї дії'
)

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
    weeks_pos='недель',

    command_common_option_member='участник',
    command_common_option_member_description='Участник, к которому применить действие',
    command_common_option_reason='причина',
    command_common_option_reason_description='Причина применения',
    command_common_option_reason_default='Без причины',

    kick_command_name='выгнать',
    kick_command_description='Вымести участника с сервера',
    kick_command_result_embed_title='Выгон',
    kick_command_result_embed_description='Модератор <@{moderator_id}> вымел <@{member_id}>',

    error='Ошибка',
    unknown_error='Произошла неизвестная ошибка',
    error_bot_does_not_have_enough_rights='У бота недостаточно прав для выполнения этого действия',
    error_not_enough_rights='Недостаточно прав для выполнения этого действия'
)

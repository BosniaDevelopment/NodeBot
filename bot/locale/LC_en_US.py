from bot.locale.locale import LocaleModel
from bot.locale.common_strings import CommonStrings


LC_en_US = LocaleModel(
    on_guild_join_message=(
        f'NodeBot is here! You can start setting it up by visiting the '
        f'[panel]({CommonStrings.nodebot_panel_url})'
    ),
    on_old_guild_join_message=(
        f'Hello again! NodeBot is already running on this server, but you can change its '
        f'configuration by visiting [panel]({CommonStrings.nodebot_panel_url})'
    ),

    timeout_command_name='timeout',
    timeout_command_description='The command to timeout member',
    timeout_command_result_embed_title='Timeout',
    timeout_command_result_embed_description='Moderator <@{moderator_id}> sent into a timeout member <@{member_id}>',
    command_common_result_embed_text_duration='Duration',

    microseconds_nom='microseconds',
    microseconds_pos='microseconds',
    milliseconds_nom='milliseconds',
    milliseconds_pos='milliseconds',
    seconds_nom='seconds',
    seconds_pos='seconds',
    minutes_nom='minutes',
    minutes_pos='minutes',
    hours_nom='hours',
    hours_pos='hours',
    days_nom='days',
    days_pos='days',
    weeks_nom='weeks',
    weeks_pos='weeks',

    command_common_option_member='member',
    command_common_option_member_description='Member to apply the action to',
    command_common_option_reason='reason',
    command_common_option_reason_description='Reason for applying',
    command_common_option_reason_default='No reason',

    kick_command_name='kick',
    kick_command_description='Sweep away member from server',
    kick_command_result_embed_title='Kick',
    kick_command_result_embed_description='Moderator <@{moderator_id}> swept out <@{member_id}>',

    ban_command_name='ban',
    ban_command_description='Ban member from server',
    ban_command_result_embed_title='Ban',
    ban_command_result_embed_description='Moderator <@{moderator_id}> banned <@{member_id}>',

    error='Error',
    unknown_error='Unknown error',
    error_bot_does_not_have_enough_rights='Bot doesn\'t have enough rights to do this',
    error_not_enough_rights='Not enough rights to do this'
)

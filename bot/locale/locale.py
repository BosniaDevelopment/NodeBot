from dataclasses import dataclass
from discord import Embed
from typing import TypeVar


T = TypeVar("T", str, Embed, dict)


@dataclass
class LocaleModel:
    def get(self, name):
        return self.__getattribute__(name)

    on_guild_join_message: T
    on_old_guild_join_message: T

    timeout_command_name: T
    timeout_command_description: T
    timeout_command_option_member: T
    timeout_command_option_member_description: T
    timeout_command_option_reason: T
    timeout_command_option_reason_description: T
    timeout_command_option_reason_default: T
    timeout_command_result_embed_title: T
    timeout_command_result_embed_description: T
    timeout_command_result_embed_text_duration: T

    microseconds_nom: T
    microseconds_pos: T
    milliseconds_nom: T
    milliseconds_pos: T
    seconds_nom: T
    seconds_pos: T
    minutes_nom: T
    minutes_pos: T
    hours_nom: T
    hours_pos: T
    days_nom: T
    days_pos: T
    weeks_nom: T
    weeks_pos: T

    error: T
    unknown_error: T
    error_bot_does_not_have_enough_rights: T
    error_not_enough_rights: T

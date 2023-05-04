from dataclasses import dataclass
from discord import Embed
from typing import TypeVar


T = TypeVar("T", str, Embed, dict)


@dataclass
class LocaleModel(object):
    def get(self, name):
        return self.__getattribute__(name)

    on_guild_join_message: T
    on_old_guild_join_message: T

    command_option_member: T
    timeout_command_name: T
    timeout_command_description: T
    timeout_command_option_reason: T
    timeout_command_option_reason_description: T
    timeout_command_option_reason_default: T
    timeout_command_answer_embed_title: T
    timeout_command_answer_embed_description: T

    microseconds: T
    milliseconds: T
    seconds: T
    minutes: T
    hours: T
    days: T
    weeks: T

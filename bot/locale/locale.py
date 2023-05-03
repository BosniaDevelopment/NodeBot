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

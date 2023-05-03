""""""

from dataclasses import dataclass


@dataclass
class DiscordLocales:
    """"""

    UNITED_KINGDOM: str
    UNITED_STATES: str

    RUSSIAN: str
    UKRAINIAN: str


@dataclass
class Locales:
    """"""

    on_guild_join_message: dict[DiscordLocales, str]
    on_old_guild_join_message: dict[DiscordLocales, str]



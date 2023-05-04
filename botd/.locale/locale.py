""""""

from dataclasses import dataclass


@dataclass
class LocaleModel:
    """"""

    on_guild_join_message: str
    on_old_guild_join_message: str


@dataclass
class Locale:
    """"""

    code: str
    model: LocaleModel


@dataclass
class Locales:
    """"""

    en_GB: Locale
    en_US: Locale

    uk: Locale
    ru: Locale


def get_locale_from_str_by_code(locales: Locales, code: str) -> Locale:
    return locales.__getattribute__(code.replace("-", "_"))

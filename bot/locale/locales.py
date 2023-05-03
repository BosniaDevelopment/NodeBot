from discord import Embed

from .locale import LocaleModel

from .LC_en_US import LC_en_US
from .LC_ru import LC_ru
from .LC_uk import LC_uk


class Locales:

    ALL = ["_LC_en_US", "_LC_ru", "_LC_uk"]

    _LC_en_US = LC_en_US
    _LC_ru = LC_ru
    _LC_uk = LC_uk


class Localed(LocaleModel):
    def __init__(self, locale: str):
        self.locale = locale.replace('-', '_')

    def __getattribute__(self, item):
        try:
            return Locales().__getattribute__(object.__getattribute__(self, 'locale'))().get(item)
        except AttributeError:
            return Locales().__getattribute__('en_US')().get(item)


class LocaledEmbed(LocaleModel):
    def __init__(self, guild_default_locale: str):
        self.locale = get_locale(guild_default_locale)

    def __getattribute__(self, item) -> Embed:
        try:
            text = Locales().__getattribute__(object.__getattribute__(self, 'locale'))().get(item)
        except AttributeError:
            text = Locales().__getattribute__('en_US')().get(item)
        return Embed(description=text)


class LocaledOptionName(LocaleModel):
    def __getattribute__(self, item) -> dict:
        return {
            f'name_localizations': dict(
                map(
                    lambda i, j: (i, j),
                    [item.replace('_', '-') for item in list(Locales.ALL)],
                    [Locales().__getattribute__(loc)().get(item) for loc in list(Locales.ALL)]
                )
            )
        }


class LocaledOptionDescription(LocaleModel):
    def __getattribute__(self, item) -> dict:
        return {
            'description': Locales().__getattribute__('en_US')().get(item),
            f'description_localizations': dict(
                map(
                    lambda i, j: (i, j),
                    [item.replace('_', '-') for item in list(Locales.ALL)],
                    [Locales().__getattribute__(loc)().get(item) for loc in list(Locales.ALL)]
                )
            )
        }


def get_locale(guild_default_locale: str):
    # Will be implemented in future
    return guild_default_locale

import discord
from .locale import LocaleModel
from .en_US import en_US
from .uk import uk


class Locales:
    en_US = en_US
    uk = uk


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

    def __getattribute__(self, item) -> discord.Embed:
        try:
            text = Locales().__getattribute__(object.__getattribute__(self, 'locale'))().get(item)
        except AttributeError:
            text = Locales().__getattribute__('en_US')().get(item)
        return discord.Embed(description=text)


def get_locale(guild_default_locale: str):
    # Will be implemented in future
    return guild_default_locale

from discord import Embed, Guild

from .locale import LocaleModel
from .LC_en_US import LC_en_US
from .LC_ru import LC_ru
from .LC_uk import LC_uk


class Locales:
    ALL = ["en_US", "ru", "uk"]

    en_US = LC_en_US
    ru = LC_ru
    uk = LC_uk


class Localed:
    def __init__(self, locale: str):
        self.locale = locale.replace('-', '_')

    def get_locale(self) -> LocaleModel:
        return getattr(Locales(), self.locale)


class LocaledEmbed(LocaleModel):
    def __init__(self, locale: str):
        self.locale = locale

    def __getattribute__(self, item) -> Embed:
        return Embed(description=Localed(object.__getattribute__(self, 'locale')).get_locale().get(item))


class LocaledOptionName(LocaleModel):
    def __init__(self):
        pass

    def __getattribute__(self, item) -> dict:
        return {
            f'name_localizations': dict(
                map(
                    lambda i, j: (i, j),
                    [item.replace('_', '-') for item in list(Locales.ALL)],
                    [getattr(Locales(), loc).get(item) for loc in list(Locales.ALL)]
                )
            )
        }


class LocaledOptionDescription(LocaleModel):
    def __init__(self):
        pass

    def __getattribute__(self, item) -> dict:
        return {
            'description': Locales.en_US.get(item),
            f'description_localizations': dict(
                map(
                    lambda i, j: (i, j),
                    [item.replace('_', '-') for item in list(Locales.ALL)],
                    [getattr(Locales(), loc).get(item) for loc in list(Locales.ALL)]
                )
            )
        }


async def get_locale(guild: Guild):
    from prisma.enums import Locale as LocaleEnum
    from prisma.models import Server
    from prisma.types import ServerCreateInput
    from bot.modules.db.servers.servers_service import ServerService

    if config := await ServerService(**ServerCreateInput(id=str(guild.id))).get_config() is Server:
        if config.locale != LocaleEnum.default:
            return config.locale
        else:
            return guild.preferred_locale
    else:
        return guild.preferred_locale

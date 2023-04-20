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

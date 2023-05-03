""""""

from json import load
from pycord.i18n import I18n


PATH = "./bot/locale/locales"
ENCODING = "utf-8"


en_GB_stream = open(f"{PATH}/locales.en_GB.json", encoding=ENCODING)
en_US_stream = open(f"{PATH}/locales.en_US.json", encoding=ENCODING)
ru_stream = open(f"{PATH}/locales.ru.json", encoding=ENCODING)
uk_stream = open(f"{PATH}/locales.uk.json", encoding=ENCODING)

en_GB = load(en_GB_stream)
en_US = load(en_US_stream)
ru = load(ru_stream)
uk = load(uk_stream)

i18n = I18n(bot, en_GB=en_GB, en_US=en_US, ru=ru, uk=uk)

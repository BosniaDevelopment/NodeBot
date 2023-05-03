from .locale import Locales

from .en_GB import en_GB_locale
from .en_US import en_US_locale
from .ru import ru_locale
from .uk import uk_locale


locales = Locales(
    en_GB=en_GB_locale,
    en_US=en_US_locale,
    uk=uk_locale,
    ru=ru_locale,
)
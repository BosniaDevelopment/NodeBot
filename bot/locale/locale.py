""""""

from .locales import Locales

from .en_GB import en_GB_on_guild_join_message, en_GB_on_old_guild_join_message
from .en_US import en_US_on_guild_join_message, en_US_on_old_guild_join_message
from .ru import ru_on_guild_join_message, ru_on_old_guild_join_message
from .uk import uk_on_guild_join_message, uk_on_old_guild_join_message


on_guild_join_message = (
    en_GB_on_guild_join_message |
    en_US_on_guild_join_message |
    ru_on_guild_join_message |
    uk_on_guild_join_message
)
on_old_guild_join_message = (
    en_GB_on_old_guild_join_message |
    en_US_on_old_guild_join_message |
    ru_on_old_guild_join_message |
    uk_on_old_guild_join_message
)

locales = Locales(
    on_guild_join_message=on_guild_join_message,
    on_old_guild_join_message=on_old_guild_join_message
)
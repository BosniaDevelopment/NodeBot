""""""

# TODO:
# - Locales
# - Docs

from discord import command, option
from discord import Cog, Bot, Member, Embed, ApplicationContext

from datetime import timedelta
from typing import Final
from bot.utils.constants.colors import DEFAULT_EMBED_COLOR
from bot.utils.constants.titles import EMBED_TITLE_TEMPLATE

# EN: timeout
# RU: тайм-аут
# UA: ""
TIMEOUT_COG_COMMAND_NAME: Final[str] = ""

# EN: The command to timeout member
# RU: Команда для тайм-аута участника
# UA: ""
TIMEOUT_COG_COMMAND_DESCRIPTION: Final[str] = ""

# EN: member
# RU: участник
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_MEMBER_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_MEMBER_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_MEMBER_NAME.capitalize()

# EN: microseconds
# RU: микросекунды
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_MICROSECONDS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_MICROSECONDS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_MICROSECONDS_NAME

# EN: milliseconds
# RU: миллисекунды
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_MILLISECONDS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_MILLISECONDS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_MILLISECONDS_NAME.capitalize()

# EN: seconds
# RU: секунды
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_SECONDS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_SECONDS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_SECONDS_NAME.capitalize()

# EN: minutes
# RU: минуты
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_MINUTES_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_MINUTES_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_MINUTES_NAME.capitalize()

# EN: hours
# RU: часы
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_HOURS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_HOURS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_HOURS_NAME.capitalize()

# EN: days
# RU: дни
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_DAYS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_DAYS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_DAYS_NAME.capitalize()

# EN: weeks
# RU: недели
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_WEEKS_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_WEEKS_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_WEEKS_NAME.capitalize()

# EN: reason
# RU: причина
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_REASON_NAME: Final[str] = ""

TIMEOUT_COG_COMMAND_OPTION_REASON_DESCRIPTION = TIMEOUT_COG_COMMAND_OPTION_REASON_NAME.capitalize()

# EN: For no reason
# RU: Без причины
# UA: ""
TIMEOUT_COG_COMMAND_OPTION_REASON_DEFAULT: Final[str] = ""

# EN: Timeout
# RU: Тайм-аут
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_TITLE: Final[str] = ""

# EN: The moderator <@{moderator_id}> sent into a timeout member <@{member_id}>
# RU: Модератор <@{moderator_id}> отправил в тайм-аут участника <@{member_id}>
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION: Final[str] = ""

# EN: Duration
# RU: Продолжительность
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION: Final[str] = ""

# EN: microseconds
# RU: микросекунд
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MICROSECONDS: Final[str] = ""

# EN: milliseconds
# RU: миллисекунд
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MILLISECONDS: Final[str] = ""

# EN: seconds
# RU: секунд
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_SECONDS: Final[str] = ""

# EN: minutes
# RU: минут
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MINUTES: Final[str] = ""

# EN: hours
# RU: часов
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_HOURS: Final[str] = ""

# EN: days
# RU: дней
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_DAYS: Final[str] = ""

# EN: weeks
# RU: недель
# UA: ""
TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_WEEKS: Final[str] = ""

# Не трожь
COG_COMMAND_CALLBACK_EMBED_TITLE = EMBED_TITLE_TEMPLATE.format(
    emoji="🐷", title=TIMEOUT_COG_COMMAND_CALLBACK_EMBED_TITLE
)


class TimeoutCog(Cog):
    """"""

    def __init__(self, bot: Bot) -> None:
        """"""
        self.bot = bot

    @command(name=TIMEOUT_COG_COMMAND_NAME, description=TIMEOUT_COG_COMMAND_DESCRIPTION)
    @option(TIMEOUT_COG_COMMAND_OPTION_MEMBER_NAME, Member, description=TIMEOUT_COG_COMMAND_OPTION_MEMBER_DESCRIPTION)
    @option(TIMEOUT_COG_COMMAND_OPTION_MICROSECONDS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_MICROSECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_MILLISECONDS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_MILLISECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_SECONDS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_SECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_MINUTES_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_MINUTES_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_HOURS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_DAYS_DESCRIPTION, required=False,
            min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_DAYS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_DAYS_DESCRIPTION, required=False,
            min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_WEEKS_NAME, float, description=TIMEOUT_COG_COMMAND_OPTION_WEEKS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(TIMEOUT_COG_COMMAND_OPTION_REASON_NAME, str, description=TIMEOUT_COG_COMMAND_OPTION_REASON_DESCRIPTION,
            default=TIMEOUT_COG_COMMAND_OPTION_REASON_DEFAULT)
    async def callback(
            self,
            ctx: ApplicationContext,
            member: Member,
            microseconds: float,
            milliseconds: float,
            seconds: float,
            minutes: float,
            hours: float,
            days: float,
            weeks: float,
            reason: str
    ) -> None:
        """"""
        duration = timedelta(
            microseconds=microseconds,
            milliseconds=milliseconds,
            seconds=seconds,
            minutes=minutes,
            hours=hours,
            days=days,
            weeks=weeks
        )
        representations = {
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MICROSECONDS: microseconds,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MILLISECONDS: milliseconds,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_SECONDS: seconds,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MINUTES: minutes,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_HOURS: hours,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_DAYS: days,
            TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_WEEKS: weeks,
        }

        description_duration = ""

        for representation in representations.items():
            duration_representation, duration_value = representation

            if duration_value != 0:
                description_duration += f"`{duration_value}` {duration_representation} "

        description = TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION.format(
            moderator_id=ctx.user.id,
            member_id=member.id
        )
        description += f"\n\n*{TIMEOUT_COG_COMMAND_OPTION_REASON_DESCRIPTION}*: {reason}"
        description += f"\n*{TIMEOUT_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION}*: {description_duration}"

        embed = Embed(
            title=COG_COMMAND_CALLBACK_EMBED_TITLE,
            description=description,
            color=DEFAULT_EMBED_COLOR
        )

        await member.timeout_for(duration=duration, reason=reason)
        await ctx.respond(embed=embed)


def setup(bot: Bot):
    """"""
    bot.add_cog(TimeoutCog(bot))

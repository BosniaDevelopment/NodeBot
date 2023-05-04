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
LC_COG_COMMAND_NAME: Final[str] = ""

# EN: The command to timeout member
# RU: Команда для тайм-аута участника
# UA: ""
LC_COG_COMMAND_DESCRIPTION: Final[str] = ""

# EN: member
# RU: участник
# UA: ""
LC_COG_COMMAND_OPTION_MEMBER_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_MEMBER_DESCRIPTION = LC_COG_COMMAND_OPTION_MEMBER_NAME.capitalize()

# EN: microseconds
# RU: микросекунды
# UA: ""
LC_COG_COMMAND_OPTION_MICROSECONDS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_MICROSECONDS_DESCRIPTION = LC_COG_COMMAND_OPTION_MICROSECONDS_NAME

# EN: milliseconds
# RU: миллисекунды
# UA: ""
LC_COG_COMMAND_OPTION_MILLISECONDS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_MILLISECONDS_DESCRIPTION = LC_COG_COMMAND_OPTION_MILLISECONDS_NAME.capitalize()

# EN: seconds
# RU: секунды
# UA: ""
LC_COG_COMMAND_OPTION_SECONDS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_SECONDS_DESCRIPTION = LC_COG_COMMAND_OPTION_SECONDS_NAME.capitalize()

# EN: minutes
# RU: минуты
# UA: ""
LC_COG_COMMAND_OPTION_MINUTES_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_MINUTES_DESCRIPTION = LC_COG_COMMAND_OPTION_MINUTES_NAME.capitalize()

# EN: hours
# RU: часы
# UA: ""
LC_COG_COMMAND_OPTION_HOURS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_HOURS_DESCRIPTION = LC_COG_COMMAND_OPTION_HOURS_NAME.capitalize()

# EN: days
# RU: дни
# UA: ""
LC_COG_COMMAND_OPTION_DAYS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_DAYS_DESCRIPTION = LC_COG_COMMAND_OPTION_DAYS_NAME.capitalize()

# EN: weeks
# RU: недели
# UA: ""
LC_COG_COMMAND_OPTION_WEEKS_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_WEEKS_DESCRIPTION = LC_COG_COMMAND_OPTION_WEEKS_NAME.capitalize()

# EN: reason
# RU: причина
# UA: ""
LC_COG_COMMAND_OPTION_REASON_NAME: Final[str] = ""

LC_COG_COMMAND_OPTION_REASON_DESCRIPTION = LC_COG_COMMAND_OPTION_REASON_NAME.capitalize()

# EN: For no reason
# RU: Без причины
# UA: ""
LC_COG_COMMAND_OPTION_REASON_DEFAULT: Final[str] = ""

# EN: Timeout
# RU: Тайм-аут
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_TITLE: Final[str] = ""

# EN: The moderator <@{moderator_id}> sent into a timeout member <@{member_id}>
# RU: Модератор <@{moderator_id}> отправил в тайм-аут участника <@{member_id}>
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION: Final[str] = ""

# EN: Duration
# RU: Продолжительность
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION: Final[str] = ""

# EN: microseconds
# RU: микросекунд
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MICROSECONDS: Final[str] = ""

# EN: milliseconds
# RU: миллисекунд
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MILLISECONDS: Final[str] = ""

# EN: seconds
# RU: секунд
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_SECONDS: Final[str] = ""

# EN: minutes
# RU: минут
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MINUTES: Final[str] = ""

# EN: hours
# RU: часов
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_HOURS: Final[str] = ""

# EN: days
# RU: дней
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_DAYS: Final[str] = ""

# EN: weeks
# RU: недель
# UA: ""
LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_WEEKS: Final[str] = ""

# Не трожь
COG_COMMAND_CALLBACK_EMBED_TITLE = EMBED_TITLE_TEMPLATE.format(
    emoji="🐷", title=LC_COG_COMMAND_CALLBACK_EMBED_TITLE
)


class TimeoutCog(Cog):
    """"""

    def __init__(self, bot: Bot) -> None:
        """"""
        super().__init__()

        self.bot = bot

    @command(name=LC_COG_COMMAND_NAME, description=LC_COG_COMMAND_DESCRIPTION)
    @option(LC_COG_COMMAND_OPTION_MEMBER_NAME, Member, description=LC_COG_COMMAND_OPTION_MEMBER_DESCRIPTION)
    @option(LC_COG_COMMAND_OPTION_MICROSECONDS_NAME, float, description=LC_COG_COMMAND_OPTION_MICROSECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_MILLISECONDS_NAME, float, description=LC_COG_COMMAND_OPTION_MILLISECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_SECONDS_NAME, float, description=LC_COG_COMMAND_OPTION_SECONDS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_MINUTES_NAME, float, description=LC_COG_COMMAND_OPTION_MINUTES_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_HOURS_NAME, float, description=LC_COG_COMMAND_OPTION_DAYS_DESCRIPTION, required=False,
            min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_DAYS_NAME, float, description=LC_COG_COMMAND_OPTION_DAYS_DESCRIPTION, required=False,
            min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_WEEKS_NAME, float, description=LC_COG_COMMAND_OPTION_WEEKS_DESCRIPTION,
            required=False, min_value=1, default=0)
    @option(LC_COG_COMMAND_OPTION_REASON_NAME, str, description=LC_COG_COMMAND_OPTION_REASON_DESCRIPTION,
            default=LC_COG_COMMAND_OPTION_REASON_DEFAULT)
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
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MICROSECONDS: microseconds,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MILLISECONDS: milliseconds,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_SECONDS: seconds,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_MINUTES: minutes,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_HOURS: hours,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_DAYS: days,
            LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION_WEEKS: weeks,
        }

        description_duration = ""

        for representation in representations.items():
            duration_representation, duration_value = representation

            if duration_value != 0:
                description_duration += f"`{duration_value}` {duration_representation} "

        description = LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION.format(
            moderator_id=ctx.user.id,
            member_id=member.id
        )
        description += f"\n\n*{LC_COG_COMMAND_OPTION_REASON_DESCRIPTION}*: {reason}"
        description += f"\n*{LC_COG_COMMAND_CALLBACK_EMBED_DESCRIPTION_DURATION}*: {description_duration}"

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

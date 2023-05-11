import discord.errors
from discord import command, option
from discord import Cog, Bot, Member, Embed, ApplicationContext

from datetime import timedelta

from bot.locale import Localed, LocaledOptionName, LocaledOptionDescription, get_locale
from bot.utils.constants.colors import DEFAULT_EMBED_COLOR, ERROR_EMBED_COLOR
from bot.utils.constants.titles import EMBED_TITLE_TEMPLATE


class TimeoutCog(Cog):
    def __init__(self, bot: Bot) -> None:
        self.bot = bot

    @command(name='timeout', **LocaledOptionName().timeout_command_name,
             **LocaledOptionDescription().timeout_command_description)
    @option(name='member', **LocaledOptionName().command_common_option_member, type=Member,
            **LocaledOptionDescription().command_common_option_member_description)
    @option(name='microseconds', **LocaledOptionName().microseconds_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='milliseconds', **LocaledOptionName().milliseconds_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='seconds', **LocaledOptionName().seconds_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='minutes', **LocaledOptionName().minutes_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='hours', **LocaledOptionName().hours_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='days', **LocaledOptionName().days_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='weeks', **LocaledOptionName().weeks_nom, type=float,
            required=False, min_value=1, default=0)
    @option(name='reason', **LocaledOptionName().command_common_option_reason, type=str,
            **LocaledOptionDescription().command_common_option_reason_description,
            default='DEFAULT_REASON')
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
        await ctx.defer()

        localed_text = Localed(await get_locale(ctx.guild)).get_locale()

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
            localed_text.microseconds_pos: microseconds,
            localed_text.milliseconds_pos: milliseconds,
            localed_text.seconds_pos: seconds,
            localed_text.minutes_pos: minutes,
            localed_text.hours_pos: hours,
            localed_text.days_pos: days,
            localed_text.weeks_pos: weeks,
        }

        description_duration = ""

        for representation in representations.items():
            duration_representation, duration_value = representation

            if duration_value != 0:
                description_duration += f"`{duration_value}` {duration_representation} "

        description = localed_text.timeout_command_result_embed_description.format(
            moderator_id=ctx.user.id,
            member_id=member.id
        )
        reason = reason if reason != 'DEFAULT_REASON' else localed_text.command_common_option_reason_default
        description += f"\n\n*{localed_text.command_common_option_reason_description}*: {reason}"
        description += f"\n*{localed_text.timeout_command_result_embed_text_duration}*: {description_duration}"

        try:
            await member.timeout_for(duration=duration, reason=reason)
            await ctx.respond(embed=Embed(
                title=EMBED_TITLE_TEMPLATE.format(
                    emoji="🐷", title=localed_text.timeout_command_result_embed_title
                ),
                description=description,
                color=DEFAULT_EMBED_COLOR
            ))
        except discord.errors.Forbidden:
            await ctx.respond(embed=Embed(
                title=EMBED_TITLE_TEMPLATE.format(
                    emoji="💔", title=localed_text.error
                ),
                description=localed_text.error_bot_does_not_have_enough_rights,
                color=ERROR_EMBED_COLOR
            ))
        except Exception as e:
            from bot.modules.exceptions import PrettyException
            print(PrettyException(e).pretty_exception)
            await ctx.respond(embed=Embed(
                title=EMBED_TITLE_TEMPLATE.format(
                    emoji="💔", title=localed_text.error
                ),
                description=localed_text.unknown_error,
                color=ERROR_EMBED_COLOR
            ))


def setup(bot: Bot):
    bot.add_cog(TimeoutCog(bot))

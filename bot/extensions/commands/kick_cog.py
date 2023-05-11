import discord.errors
from discord import command, option
from discord import Cog, Bot, Member, Embed, ApplicationContext

from bot.locale import Localed, LocaledOptionName, LocaledOptionDescription, get_locale
from bot.utils.constants.colors import DEFAULT_EMBED_COLOR, ERROR_EMBED_COLOR
from bot.utils.constants.titles import EMBED_TITLE_TEMPLATE


class KickCog(Cog):
    def __init__(self, bot: Bot) -> None:
        self.bot = bot

    @command(name='kick', **LocaledOptionName().kick_command_name,
             **LocaledOptionDescription().kick_command_description)
    @option(name='member', **LocaledOptionName().command_common_option_member, type=Member,
            **LocaledOptionDescription().command_common_option_member_description)
    @option(name='reason', **LocaledOptionName().command_common_option_reason, type=str,
            **LocaledOptionDescription().command_common_option_reason_description,
            default='DEFAULT_REASON')
    async def callback(
            self,
            ctx: ApplicationContext,
            member: Member,
            reason: str
    ) -> None:
        await ctx.defer()

        localed_text = Localed(await get_locale(ctx.guild)).get_locale()

        description = localed_text.kick_command_result_embed_description.format(
            moderator_id=ctx.user.id,
            member_id=member.id
        )
        reason = reason if reason != 'DEFAULT_REASON' else localed_text.command_common_option_reason_default
        description += f"\n\n*{localed_text.command_common_option_reason_description}*: {reason}"

        try:
            await member.kick(reason=reason)
            await ctx.respond(embed=Embed(
                title=EMBED_TITLE_TEMPLATE.format(
                    emoji="🐷", title=localed_text.kick_command_result_embed_title
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
    bot.add_cog(KickCog(bot))

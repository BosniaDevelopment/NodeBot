from discord import command, option
from discord import Cog, Bot, Member, ApplicationContext
from bot.locale import LocaledOptionName, LocaledOptionDescription


class TestLocaledCog(Cog):
    def __init__(self, bot: Bot) -> None:
        super().__init__()

        self.bot = bot

    @command(name='get_member', **LocaledOptionDescription().get_member_command_description)
    @option(type=Member, name='member', **LocaledOptionName().member_option_name,
            **LocaledOptionDescription().member_option_description)
    async def callback(self, ctx: ApplicationContext, member: Member) -> None:
        await ctx.respond(member)


def setup(bot: Bot):
    """
    This cog and command `get_member` will be removed later!
    """
    bot.add_cog(TestLocaledCog(bot))

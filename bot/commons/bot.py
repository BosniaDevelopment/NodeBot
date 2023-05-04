import discord
from discord.ext import commands

from bot.utils.coglib import CogLoader


class NodeBotBuilder(commands.Bot):
    def __init__(self, command_prefix="/", intents=discord.Intents.all(), help_command=None):
        super().__init__(
            command_prefix=command_prefix,
            intents=intents,
            help_command=help_command
        )

        CogLoader.load_cogs(self)

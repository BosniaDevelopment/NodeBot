import discord
from discord.ext import commands


class NodeBot:
    def __init__(self):
        self.bot = commands.Bot(
            command_prefix="/",
            intents=discord.Intents.all(),
            help_command=None
        )

        for f in self.loader_funcs:
            f(self.bot)

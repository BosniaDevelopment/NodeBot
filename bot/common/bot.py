import discord
from discord.ext import commands

from bot.utils.extensionslib import ExtensionsManager


class ExtendedBot(commands.Bot):
    def __init__(self, intents: discord.Intents, *args, **kwargs):
        super().__init__(intents=intents, *args, **kwargs)

        self._extensions_manager = ExtensionsManager(self)

    async def start(self, token: str, *, reconnect: bool = True) -> None:
        self._extensions_manager.load()
        await super().start(token, reconnect=reconnect)


NodeBot = ExtendedBot(discord.Intents.all())

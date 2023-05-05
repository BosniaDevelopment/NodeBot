from discord import Bot
from discord import Intents

from os import listdir
from os.path import isdir
from typing import Any


class ExtensionsManager:
    def __init__(self, bot: Bot) -> None:
        self.bot = bot

    def load(self, path: str, module: str) -> None:
        for item in listdir(path):
            absolute = f"{path}\\{item}"
            submodule = f"{module}.{item}"

            if isdir(absolute):
                self.load(path, submodule)
            else:
                extension = submodule[:-3]
                self.bot.load_extension(extension)


class SubBot(Bot):
    def __init__(self, intents: Intents, *args, **kwargs):
        super().__init__(intents=intents, *args, **kwargs)

        self._extensions_manager = ExtensionsManager(self)

    def run(self, token: str, *args: Any, **kwargs: Any) -> None:
        self._extensions_manager.load(".\\bot\\extensions")
        return super().run(token, *args, **kwargs)


NodeBot = SubBot(Intents.all)
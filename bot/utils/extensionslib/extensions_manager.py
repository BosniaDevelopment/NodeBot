from discord.ext import commands
import glob
import os.path
from rich import print


class ExtensionsManager:
    def __init__(self, bot: commands.Bot) -> None:
        self.bot = bot

    def load(self) -> None:
        loaded = 0
        for module in glob.glob('**/*_cog.py', recursive=True):
            self.bot.load_extension(os.path.relpath(module).replace('/', '.').replace('\\', '.')[:-3])
            loaded += 1
        print(f'Loaded {loaded} extensions')

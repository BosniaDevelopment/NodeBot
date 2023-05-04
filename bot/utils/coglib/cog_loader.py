import os
import discord
from rich import print


class CogLoader:
    @staticmethod
    def load_cogs(bot: discord.Bot, cogs_module: str = 'bot.cogs'):
        loaded = 0

        path = os.path.join(os.getcwd(), 'bot')
        for root, dirs, files in os.walk(os.path.join(path, "cogs")):
            for file in files:
                filepath = os.path.join(root, file)
                if not filepath.endswith('_cog.py'):
                    continue

                relative_path = os.path.relpath(
                    filepath,
                    start=os.path.join(path, "cogs")
                ).replace("/", ".").replace("\\", ".")

                bot.load_extension(f'{cogs_module}.{relative_path[:-3]}')
                loaded += 1

        print(f'Loaded {loaded} cogs')

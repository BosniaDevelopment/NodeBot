import os
import discord
from rich import print


class CogLoader:
    @staticmethod
    def load_cogs(bot: discord.Bot):
        loaded = 0

        path = os.path.join(os.getcwd(), 'bot')

        for root, dirs, files in os.walk(os.path.join(path, "extensions")):
            for file in files:
                filepath = os.path.join(root, file)
                if not filepath.endswith('_cog.py'):
                    continue

                start = os.path.join(path, "extensions")

                relative_path = (
                    os.path.relpath(filepath, start=start)

                    .replace("/", ".")
                    .replace("\\", ".")
                )

                bot.load_extension(f'bot.extensions.{relative_path[:-3]}')
                loaded += 1

        print(f'Loaded {loaded} extensions')

import os
import discord
from discord.ext import commands
from .config import TOKEN
from pathlib import Path
from rich import print

bot = commands.Bot(
    command_prefix="/",
    intents=discord.Intents.all(),
    help_command=None
)


path = Path(__file__).parent.resolve()
cogs_list = os.listdir(os.path.join(path, "cogs"))
for items in cogs_list:
    if items.endswith(".py"):
        bot.load_extension(f"cogs.{items[:-3]}")


@bot.event
async def on_ready():
    print(f"[white]Started as[/] [italic]{bot.user.name}#{bot.user.discriminator}[/]")
    await bot.change_presence(
        activity=discord.Activity(type=discord.ActivityType.listening, name="xMml")
    )


def start():
    bot.run(TOKEN)

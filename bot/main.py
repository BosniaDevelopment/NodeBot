def start():
    bot.run(TOKEN)


def main():
    from rich import print
    print('[italic]Preparing[/]')

    from .common import NodeBot
    from .config import TOKEN

    print('[bold]Starting bot...[/]')

    exec(start.__code__, {'bot': NodeBot, 'TOKEN': TOKEN} | globals() | locals())

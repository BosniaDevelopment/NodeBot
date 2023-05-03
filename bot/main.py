def start():
    from .config import TOKEN
    bot.run(TOKEN)


def main():
    print('[italic]Preparing[/]')

    from .common import NodeBot

    print('[bold]Starting bot...[/]')

    exec(start.__code__, {'bot': NodeBot} | globals() | locals())

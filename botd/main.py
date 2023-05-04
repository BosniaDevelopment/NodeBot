def start():
    import asyncio

    asyncio.run_coroutine_threadsafe(bot.start(TOKEN), asyncio.get_running_loop())


def main():
    from rich import print

    print('[italic]Preparing bot[/]')

    from .common import NodeBot
    from .config import TOKEN

    print('[bold]Starting bot...[/]')

    exec(start.__code__, {'bot': NodeBot, 'TOKEN': TOKEN} | globals() | locals())

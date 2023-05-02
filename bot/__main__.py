from rich import print


if __name__ == '__main__':
    print('[italic]Preparing[/]')

    from .main import start
    from .common import NodeBot

    print('[bold]Starting bot...[/]')

    exec(start.__code__, {'bot': NodeBot} | globals() | locals())

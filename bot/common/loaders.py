async def start_bot():
    from rich import print

    print('[italic]Preparing bot[/]')

    from .common import NodeBot
    from .config import TOKEN

    print('[bold]Starting bot...[/]')

    await NodeBot.start(TOKEN)


def start_server():
    import uvicorn

    from bot.api import server
    from .config import NODEBOT_API_PORT
    uvicorn.run(app=server.app, host='0.0.0.0', port=NODEBOT_API_PORT)

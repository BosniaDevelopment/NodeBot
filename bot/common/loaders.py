async def start_bot():
    from rich import print

    print('[italic]Preparing bot[/]')

    from .bot import NodeBot
    from ..modules.config import TOKEN

    print('[bold]Running bot...[/]')

    await NodeBot.run(TOKEN)


def start_server():
    from uvicorn import run

    from bot.api import server
    from ..modules.config import NODEBOT_API_PORT

    run(app=server.app, host='0.0.0.0', port=NODEBOT_API_PORT)

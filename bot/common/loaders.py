async def start_bot():
    from rich import print
    import asyncio

    print('[italic]Preparing bot[/]')

    from bot.common.bot import NodeBot
    from bot.common.config import TOKEN

    print('[bold]Starting bot...[/]')

    asyncio.run_coroutine_threadsafe(NodeBot.start(TOKEN), asyncio.get_running_loop())


def start_server():
    from uvicorn import run

    from bot.api import server
    from bot.common.config import NODEBOT_API_PORT

    run(app=server.app, host='0.0.0.0', port=NODEBOT_API_PORT)

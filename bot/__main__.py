if __name__ == '__main__':
    import uvicorn
    from bot.api import server
    from .config import NODEBOT_API_PORT
    uvicorn.run(app=server.app, host='0.0.0.0', port=NODEBOT_API_PORT)

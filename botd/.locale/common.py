from bot import config


PANEL_URL = f'{config.NBOT_REDIRECT_URI.format(PORT=config.NBOT_SERVER_PORT)}'

from bot.commons import config


class CommonStrings:
    nodebot_panel_url = f'{config.NBOT_REDIRECT_URI.format(PORT=config.NBOT_SERVER_PORT)}'

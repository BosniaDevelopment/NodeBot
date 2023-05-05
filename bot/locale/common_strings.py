from bot.common import config


class CommonStrings:
    nodebot_panel_url = f'{config.NODEBOT_PANEL_ENDPOINT.format(PORT=config.NODEBOT_SERVER_PORT)}'

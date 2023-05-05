from os import getenv
from typing import Final
from dotenv import load_dotenv


load_dotenv()

TOKEN: Final[str] = getenv('NBOT_TOKEN')

DB_URL: Final[str] = getenv('DATABASE_URL')

NODEBOT_PANEL_ENDPOINT: Final[str] = getenv('PANEL_ENDPOINT')
NODEBOT_SERVER_PORT: Final[int] = int(getenv('PORT'))

NODEBOT_API_PORT: Final[int] = int(getenv('NODEBOT_API_PORT'))
NODEBOT_API_LISTEN_SYMBOL: Final[str] = getenv('NODEBOT_API_LISTEN_SYMBOL')

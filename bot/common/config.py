import os
from typing import Final
from dotenv import load_dotenv


load_dotenv()

TOKEN: Final[str] = os.getenv('NBOT_TOKEN')

DB_URL: Final[str] = os.getenv('DATABASE_URL')

NBOT_REDIRECT_URI: Final[str] = os.getenv('NBOT_REDIRECT_URI')
NBOT_SERVER_PORT: Final[int] = int(os.getenv('PORT'))

NODEBOT_API_PORT: Final[int] = int(os.getenv('NODEBOT_API_PORT'))
NODEBOT_API_LISTEN_SYMBOL: Final[str] = os.getenv('NODEBOT_API_LISTEN_SYMBOL')

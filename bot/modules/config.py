from os import environ
from typing import Final

from dotenv import load_dotenv

load_dotenv()

TOKEN: Final[str] = environ["token"]

DATABASE_URL: Final[str] = environ['DATABASE_URL']

NODEBOT_REDIRECT_URI: Final[str] = environ['NBOT_REDIRECT_URI']
NODEBOT_SERVER_PORT: Final[int] = int(environ['PORT'])
NODEBOT_API_PORT: Final[int] = int(environ['NODEBOT_API_PORT'])
NODEBOT_API_LISTEN_SYMBOL: Final[str] = environ['NODEBOT_API_LISTEN_SYMBOL']

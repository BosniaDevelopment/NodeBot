import os
from dotenv import load_dotenv
load_dotenv()

DB_URL = os.getenv('DATABASE_URL')
TOKEN = os.getenv('NBOT_TOKEN')
NBOT_REDIRECT_URI = os.getenv('NBOT_REDIRECT_URI')
NBOT_SERVER_PORT = int(os.getenv('PORT'))
NODEBOT_API_PORT = int(os.getenv('NODEBOT_API_PORT'))
NODEBOT_API_LISTEN_SYMBOL = os.getenv('NODEBOT_API_LISTEN_SYMBOL')

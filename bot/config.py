import os
from dotenv import load_dotenv
load_dotenv()

DB_URL = os.getenv('DATABASE_URL')
TOKEN = os.getenv('NBOT_TOKEN')

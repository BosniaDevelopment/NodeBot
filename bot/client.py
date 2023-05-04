from hikari import StartedEvent, StoppedEvent
from crescent import Client

from .bot import bot
from .model import Model


model = Model()

client = Client(bot, model)

bot.subscribe(StartedEvent, model.on_start)
bot.subscribe(StoppedEvent, model.on_stop)

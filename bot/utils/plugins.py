from hikari import GatewayBot
from crescent import Plugin

from bot.model import Model


Plugin = Plugin[GatewayBot, Model]

from .disps.injector import inject
from .modules.db.db import db

NodeBot = inject()().bot

__all__ = ['NodeBot', 'db']

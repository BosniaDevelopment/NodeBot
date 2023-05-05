from bot.modules.db import db
from bot.modules.db.request_status import RequestStatus

import prisma
from prisma.models import Server
from prisma.types import ServerCreateInput

from typing import Unpack


class ServerService:
    def __init__(self, **kwargs: Unpack[ServerCreateInput]):
        self.id = kwargs['id']

    async def create(self):
        status = RequestStatus.not_finished
        try:
            await db.connect()
            await Server.prisma().create(data=ServerCreateInput(
                id=str(self.id),
            ))
            status = RequestStatus.success
        except prisma.errors.UniqueViolationError:
            status = RequestStatus.exists
        except Exception as e:
            from bot.modules.exceptions import PrettyException
            print(PrettyException(e).pretty_exception)
            status = RequestStatus.error
        finally:
            await db.disconnect()
            return status

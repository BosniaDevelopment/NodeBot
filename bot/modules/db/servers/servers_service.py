from bot.commons.common import prisma
from bot.modules.db.request_status import RequestStatus
import prisma
from prisma.models import Server
from prisma.types import ServerCreateInput
from typing_extensions import Unpack


class ServerService:
    def __init__(self, **kwargs: Unpack[ServerCreateInput]):
        self.id = kwargs['id']

    async def create(self):
        status = RequestStatus.not_finished
        try:
            await prisma.connect()
            await Server.prisma().create(data=ServerCreateInput(
                id=str(self.id),
            ))
            status = RequestStatus.success
        except prisma.errors.UniqueViolationError:
            status = RequestStatus.exists
        except Exception as e:
            from bot.modules.exc import PrettyException
            print(PrettyException(e).pretty_exception)
            status = RequestStatus.error
        finally:
            await prisma.disconnect()
            return status

from prisma.models import Server
from prisma.types import ServerCreateInput
from prisma.errors import UniqueViolationError

from typing import Unpack

from ..database import db
from ..status import NOT_FINISHED, SUCCES, EXISTS, ERROR


class ServerService:
    def __init__(self, **kwargs: Unpack[ServerCreateInput]) -> None:
        self.id = kwargs["id"]

    async def create(self) -> None:
        status = NOT_FINISHED

        try:
            await db.connect()
            await Server.prisma().create(data=ServerCreateInput(
                id=self.id
            ))
            
            status = SUCCES

        except UniqueViolationError:
            status = EXISTS

        except Exception as e:
            status = ERROR

        finally:
            await db.disconnect()
            return status

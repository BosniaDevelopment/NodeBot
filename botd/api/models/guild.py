from pydantic import BaseModel


class GuildResponse(BaseModel):
    botPermissions: int
    textChannels: dict[str, str]

from pydantic import BaseModel


class StatsResponse(BaseModel):
    tag: str
    id: str
    servers: int
    users: int

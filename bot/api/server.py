from fastapi import FastAPI
from .routers import router
from ..commons import loaders

app = FastAPI(on_startup=[loaders.start_bot])
app.include_router(router)

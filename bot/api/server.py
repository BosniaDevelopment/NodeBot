from fastapi import FastAPI
from .routers import router
from bot import main


app = FastAPI(on_startup=[main.main])
app.include_router(router)

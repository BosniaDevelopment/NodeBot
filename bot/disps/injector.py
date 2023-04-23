import os
import importlib
from pathlib import Path
from .dispmain import NodeBot
from dyndesign import mergeclasses


def inject() -> NodeBot:
    nodebot = NodeBot

    path = Path(__file__).parent.resolve()
    for root, dirs, files in os.walk(os.path.join(path)):
        for file in files:
            filepath = os.path.join(root, file)
            if not filepath.endswith('_disp.py'):
                continue
            relative_path = os.path.relpath(
                filepath, start=os.path.join(path)
            ).replace("/", ".").replace("\\", ".")
            nodebot = mergeclasses(nodebot, importlib.import_module(f'bot.disps.{relative_path[:-3]}').getobject())

    return nodebot

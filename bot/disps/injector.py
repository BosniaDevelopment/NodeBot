import os
import importlib
from pathlib import Path
from typing import Type
from .dispmain import NodeBot
from dyndesign import mergeclasses


def inject() -> Type[NodeBot] | type:
    nodebot = NodeBot
    nodebot.loader_funcs = list()

    path = Path(__file__).parent.resolve()
    for root, dirs, files in os.walk(os.path.join(path)):
        for file in files:
            filepath = os.path.join(root, file)
            if not filepath.endswith('_disp.py'):
                continue
            relative_path = os.path.relpath(
                filepath, start=os.path.join(path)
            ).replace("/", ".").replace("\\", ".")
            nodebot = mergeclasses(nodebot, (mod := importlib.import_module(f'bot.disps.{relative_path[:-3]}'))
                                   .getobject())
            nodebot.loader_funcs.append(mod.getloader())

    return nodebot

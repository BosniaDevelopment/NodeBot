from ...utils.coglib import cog_loader


def getobject():
    return cog_loader.CogLoader


def getloader():
    return cog_loader.CogLoader.load_cogs

class LocaleModel(object):
    def get(self, name):
        return self.__getattribute__(name)

    on_guild_join_message: str

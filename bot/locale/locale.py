import discord


t = str | discord.Embed | dict


class LocaleModel(object):
    def get(self, name):
        return self.__getattribute__(name)

    on_guild_join_message: t
    on_old_guild_join_message: t
    get_member_command_description: t
    member_option_name: t
    member_option_description: t

from sqlitedict import SqliteDict


class CacheDb(SqliteDict):
    def __init__(self, tablename: str):
        super().__init__(filename=':memory:', tablename=tablename, autocommit=True)

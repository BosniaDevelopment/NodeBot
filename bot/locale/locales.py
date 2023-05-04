from dataclasses import dataclass

from .locale import LocaleString


@dataclass
class LocaleCommand:
    name: LocaleString
    description: LocaleString


LocaleOption = LocaleCommand

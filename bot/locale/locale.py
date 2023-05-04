from crescent import LocaleBuilder

from dataclasses import dataclass


@dataclass
class LocaleString(LocaleBuilder):
    _fallback: str

    en_GB: str
    en_US: str

    ru: str
    uk: str

    def build(self) -> dict[str, str]:
        return {
            "en-GB": self.en_GB,
            "en-US": self.en_US,
            "ru": self.ru,
            "uk": self.uk
        }

    @property
    def fallback(self) -> str:
        return self._fallback

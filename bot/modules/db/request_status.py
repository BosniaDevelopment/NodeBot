from typing import TypeVar
from dataclasses import dataclass


class RequestStatus:
    not_finished = TypeVar('not_finished')
    success = TypeVar('success')
    error = TypeVar('error')
    exists = TypeVar('exists')

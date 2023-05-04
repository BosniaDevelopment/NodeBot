from typing import TypeVar


class RequestStatus:
    not_finished = TypeVar('not_finished')
    success = TypeVar('success')
    error = TypeVar('error')
    exists = TypeVar('exists')

from typing import TypeVar


class RequestStatus:
    not_finished = TypeVar('not_finished')
    not_found = TypeVar('not_found')
    success = TypeVar('success')
    error = TypeVar('error')
    exists = TypeVar('exists')

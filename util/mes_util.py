import requests


def rep_prefix(string, prefix, rep, start_index=0, end_index=-1):
    flag = False
    for i in prefix:
        if not string[start_index:end_index].find(i) == -1:
            flag = True
            break
    if flag:
        return string
    else:
        return rep + string


def access(address, data, method):
    if str(method).upper() == 'POST'.upper():
        _result = requests.post(url=address, json=data)
    else:
        if address[-2:-1] == '/':
            address = address[0:-2]
        address += '?'
        for i in data.keys():
            address += i
            address += '='
            address += data[i]
            address += '&'
        if address[-2:-1] == '&':
            address = address[0:-2]
        _result = requests.get(url=address)
    return _result

from flask import Flask, render_template, Response, request
import json
from util import mes_util

app = Flask(__name__)


@app.route('/access', methods=['get'])
def access():
    try:
        method = request.method
        if method == 'GET':
            _data = request.args
        else:
            _data = request.form
        _url = _data['url']
        _url = mes_util.rep_prefix(string=_url,
                                   prefix=['http://', 'https://'],
                                   rep='http://',
                                   end_index=8)
        _method = _data['method']
        _keys = _data['keys']
        _values = _data['values']
        dis = {}
        _keys = str(_keys).split(',')
        _values = str(_values).split(',')
        if type(_keys) is list:
            for x, y in enumerate(_keys):
                dis[y] = _values[x]
        else:
            dis[_keys] = _values
        _result = mes_util.access(address=_url, method=_method, data=dis)
        _result.encoding = 'utf-8'
    except Exception as e:
        return Response(str(e), mimetype='application/text')
    return Response(json.dumps(_result.text), mimetype='application/json')


@app.route('/')
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()

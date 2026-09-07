"""How often each ball has come up across every UK49s draw on record."""
import requests, collections
draws = requests.get('https://bettip.co.za/api/v1/uk49s/draws.json', timeout=30).json()['data']
count = collections.Counter(n for d in draws for n in d['numbers'])
for ball, n in count.most_common(10):
    print(ball, n)

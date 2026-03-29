import json
import os
import uuid
import urllib.request
import urllib.error
import base64

def handler(event: dict, context) -> dict:
    """Создание платежа в ЮКасса для оплаты товара Lunex"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    product_name = body.get('name', 'Товар Lunex')
    price = body.get('price', 0)
    return_url = body.get('return_url', 'https://lunex.poehali.dev')

    shop_id = os.environ['YOOKASSA_SHOP_ID']
    secret_key = os.environ['YOOKASSA_SECRET_KEY']

    credentials = base64.b64encode(f"{shop_id}:{secret_key}".encode()).decode()

    payload = {
        "amount": {
            "value": f"{price:.2f}",
            "currency": "RUB"
        },
        "confirmation": {
            "type": "redirect",
            "return_url": return_url
        },
        "capture": True,
        "description": f"Lunex — {product_name}"
    }

    req = urllib.request.Request(
        'https://api.yookassa.ru/v3/payments',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Basic {credentials}',
            'Content-Type': 'application/json',
            'Idempotence-Key': str(uuid.uuid4())
        },
        method='POST'
    )

    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())

    confirmation_url = result['confirmation']['confirmation_url']

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': confirmation_url})
    }

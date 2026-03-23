import requests

url = "https://newsapi.org/v2/everything"
parameters = {
    "q": "China AND (robotics OR AI)",
    "apiKey": "29478dcdb6614ca7b25587d460752180",
    "language": "en",
    "sortBy": "publishedAt",
    "pageSize": 10
}

response = requests.get(url, params=parameters)
data = response.json()

articles = data["articles"]

for article in articles:
    print(f"{article['title']}")
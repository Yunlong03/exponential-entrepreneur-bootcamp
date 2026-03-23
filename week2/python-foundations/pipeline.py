import requests
from bs4 import BeautifulSoup

# ===== STEP 1: SCRAPE COMPANIES =====
# (pull from scraper.py — fetch the page, parse h3 headings, keep first 10)
url = "https://www.registrationchina.com/articles/top-10-robot-companies-in-china/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
headings = soup.find_all("h3")
companies = []
for heading in headings[:10]:
    companies.append(heading.text)

# ===== STEP 2: FETCH NEWS =====
# (pull from news.py — call NewsAPI, get articles)
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
news=[]
for article in articles:
    news.append({
        "title": article["title"],
        "source": article["source"]["name"],
        "date": article["publishedAt"]
    })


# ===== STEP 3: BUILD HTML REPORT =====
html = """<!DOCTYPE html>
<html>
<head>
    <title>Dragon S AI — Daily Brief</title>
    <style>
        body { font-family: Arial; background: #0a0a0f; color: #e0e0e0; padding: 40px; }
        h1 { color: #00f0ff; }
        h2 { color: #00a8ff; border-bottom: 1px solid #00a8ff33; padding-bottom: 8px; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 40px; }
        th { background: #00a8ff; color: #0a0a0f; padding: 12px; text-align: left; }
        td { border-bottom: 1px solid #00a8ff33; padding: 10px; }
        a { color: #00f0ff; text-decoration: none; }
    </style>
</head>
<body>
    <h1>Dragon S AI — Daily Intelligence Brief</h1>

    <h2>Chinese Robotics Companies</h2>
    <table>
        <tr><th>Company Name</th></tr>
"""

# Loop through scraped companies, add rows
for company in companies:
    html = html + f"<tr><td>{company}</td></tr>"

html = html + """    </table>
    <h2>Latest China Robotics & AI News</h2>
    <table>
        <tr><th>Date</th><th>Source</th><th>Title</th></tr>
"""

# Loop through news articles, add rows
for story in news:
    html = html + f"<tr><td>{story['date']}</td><td>{story['source']}</td><td>{story['title']}</td></tr>"

html = html + """    </table>
</body>
</html>"""


# ===== STEP 4: SAVE =====
# Write html to pipeline_report.html

output = open("pipeline.html", "w")
output.write(html)
output.close()
import requests
import csv
from bs4 import BeautifulSoup

# Fetch and parse
url = "https://www.registrationchina.com/articles/top-10-robot-companies-in-china/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# First, let's see all the h3 headings (company names are in h3 tags)
headings = soup.find_all("h3")

# Open file and write header — ONCE, before the loop
file = open("companies.csv", "w")
writer = csv.writer(file)
writer.writerow(["Company Name"])

# Loop — write each company
for heading in headings[:10]:
    writer.writerow([heading.text])

# Close — ONCE, after the loop    
file.close()


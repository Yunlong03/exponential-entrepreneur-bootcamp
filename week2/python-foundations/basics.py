# === VARIABLES ===
tracker_name = "China AI Deal Flow Tracker"
version = 1
print(tracker_name,version)

# === # === LIST OF DICTIONARIES (your mini database) ===
# Add 3-4 Chinese robotics/AI companies you know
# Each company needs: name, sector, funding_m, city
companies = [
    {"name": "HaiRobotics", "sector": "Robotics", "funding_m": "280", "city": "Shenzhen"},
    {"name": "MagicStore", "sector": "AI", "funding_m": "190", "city": "Hangzhou"},
    {"name": "UBTech Robotics", "sector": "Robotics", "funding": "1400", "city": "Shenzhen"},
    {"name": "Fourier Intelligence", "sector": "AI", "funding": "300", "city":"Shanghai"},
]

# === LOOP: print all companies ===
# Write a for loop that prints each company's name and sector
for company in companies:
    print(company["name"], company["sector"])

# === FUNCTION: filter by sector ===
# Write a function that takes the list and a sector name,
# returns only companies matching that sector
def filter_company(company_sector):
    results = []
    for company in companies:
        if company["sector"] == company_sector:
            results.append(company)
    return results
sector = input("Enter a sector: ")
print(filter_company(sector))



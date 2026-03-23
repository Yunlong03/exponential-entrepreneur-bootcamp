# Read the CSV
file = open("companies.csv")
lines = file.readlines()

# Start building HTML
html = """<!DOCTYPE html>
<html>
<head>
    <title>China Robotics Companies</title>
    <style>
        body { font-family: Arial; background: #0a0a0f; color: #00f0ff; padding: 40px; }
        table { border-collapse: collapse; width: 100%; }
        th { background: #00a8ff; color: #0a0a0f; padding: 12px; text-align: left; }
        td { border-bottom: 1px solid #00a8ff33; padding: 10px; }
    </style>
</head>
<body>
    <h1>China Robotics Companies</h1>
    <table>
        <tr><th>Company Name</th></tr>
"""
# Loop through companies (skip the header line)
for line in lines[1:]:
    line = line.strip()
    html = html + f"        <tr><td>{line}</td></tr>\n"

# Close the HTML
html = html + """    </table>
</body>
</html>"""
# Write to file
output = open("report.html", "w")
output.write(html)
output.close()

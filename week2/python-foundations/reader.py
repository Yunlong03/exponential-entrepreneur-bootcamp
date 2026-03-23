# === Python Reader
book = open("companies.txt")
lines = book.readlines()
for banana in lines:
    banana = banana.strip()
    banana = banana.split(",") # banana is no longer a string — it's a list 
    #So you went from string banana to list banana. It works, but naming it parts or fields after the split makes it clearer what you're dealing with.
    print(f"{banana[0]} | {banana[1]} | ${banana[2]}M | {banana[3]}")

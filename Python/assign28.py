# Program to find the number of times each letter appear in a string
a = input("Enter a string: ")

# Create an empty dictionary to store the count of each letter
count = {}

for char in a:
    if char in count:
        count[char] += 1
    else:
        count[char] = 1

# Print the count of each letter
for char, count in count.items():
    print(f"{char}: {count}")

# Program to print prime numbers from the list
num = input("Enter a list of numbers: ")
num = list(map(int, num.split()))
# Initialize an empty list to store the prime numbers
prime = []
# Iterate over each number in the list
for n in num:    
    if n > 1:
        for i in range(2, n):
            if n % i == 0:
                break
        else:
            prime.append(n)
# Print the list of prime numbers
print("List of prime numbers:", prime)

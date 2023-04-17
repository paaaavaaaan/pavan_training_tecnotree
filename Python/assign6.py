numbers = input("Enter a list of numbers: ").split()
numbers = [float(n) for n in numbers]
largest = max(numbers)
smallest = min(numbers)
print("The largest number in the list is:", largest)
print("The smallest number in the list is:", smallest)

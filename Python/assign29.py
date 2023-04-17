#Program to print square of the elements
num = input("Enter a list of numbers: ")
#split the input to string to list
num = list(map(int, num.split()))
squared = []
for n in num:
#Square the number and append it to the squared_list
    squared.append(n** 2)
print("List of squared numbers:", squared)

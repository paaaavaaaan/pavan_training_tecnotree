#program that returns sum of all even numbers
a = input("Enter the numbers").split()
a = [int(n) for n in a]#converts each element in the list to an integer
result = 0
for n in a:
    if n % 2 == 0:
        result += n

print("Sum of all the even numbers are :",result)

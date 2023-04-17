nums = input("Enter a list of numbers: ").split()
nums = [int(n) for n in nums]
even = sum(n for n in nums if n % 2 == 0)
print("The sum of all the even numbers in the list is:", even)

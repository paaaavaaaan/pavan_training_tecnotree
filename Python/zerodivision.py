a=float(input("Enter 1st number: "))
b=float(input("Enter 2nd number: "))
try:
    if b<=0:
        raise ValueError("Denominator must be positive")
    if a<=b:
        raise ValueError("Denominator must be less than numerator")
    c=a/b
except ValueError as error:
    print("Error:{error}")
except ZeroDivisionError:
    print("Enter non zero value for b")

print(c)



#//A simple example of a lambda function that squares a number:

square = lambda x: x**2
a=int(input("Enter input number"))
# call the lambda function
result = square(a)

# print the result
print(result)

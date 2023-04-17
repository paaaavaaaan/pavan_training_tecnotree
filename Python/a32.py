# A simple calculator program in Python
# Function to add two numbers
def add(x,y):
   return x + y
# Function to subtract two numbers
def subtract(x,y):
   return x-y
# Function to multiply two numbers
def multiply(x,y):
   return x*y
# Function to divide two numbers
def divide(x,y):
   return x/y
# Function to find the remainder of two numbers
def remainder(x,y):
   return x%y
# Main function
def main():
   print("Select operation.")
   print("a-Add")
   print("b-Subtract")
   print("c-Multiply")
   print("d-Divide")
   print("e-remainder")
   # Take input from the user
   choice = input("Enter choice(a,b,c,d,e): ")
   num1 = int(input("Enter first number: "))
   num2 = int(input("Enter second number: "))
   if choice == 'a':
      print(num1,"+",num2,"=", add(num1,num2))
   elif choice == 'b':
      print(num1,"-",num2,"=", subtract(num1,num2))
   elif choice == 'c':
      print(num1,"*",num2,"=", multiply(num1,num2))
   elif choice == 'd':
      print(num1,"/",num2,"=", divide(num1,num2))
   elif choice == 'e':
      print(num1,"/",num2,"=", remainder(num1,num2))
   else:
      print("Invalid input")
   
# Call the main function
main()
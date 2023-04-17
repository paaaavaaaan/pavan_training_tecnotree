#Program to palindromes
a= input("Enter a list of strings separated by spaces: ")
strings = a.split()
# Check each string to see if it is a palindrome
palindromes = []
for s in strings:
    if s==s[::-1]:
        palindromes.append(s)
print("The palindromes in the list are:", palindromes)

# Program that returns longest word in the list
list1 = input("Enter a list of words: ")
list1 = list1.split()
# Initialize a variable to store the longest word
longest = ""
for word in list1:
    if len(word) > len(longest):
        # Update the longest word variable
        longest = word
print("The longest word in the list is:", longest)

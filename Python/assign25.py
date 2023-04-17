# Returns a new list
list1 = input("Enter the first list of numbers: ")
list1 = list(map(int, list1.split()))
list2 = input("Enter the second list of numbers: ")
list2 = list(map(int, list2.split()))
common = []
#checks the common elements in both the list
for num in list1:
    if num in list2 and num not in common:
        common.append(num)
print("Common elements in both lists:", common)

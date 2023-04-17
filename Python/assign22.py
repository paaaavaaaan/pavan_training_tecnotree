# Program to remove vowels from the string
aa= input("Enter the string: ")
vowels = "aeiouAEIOU"
new=""

#check whether there is a vowel in the string
for a in aa:
    if(a=='a' or a=='e'  or a=='i' or a=='o'  or a=='u'):
        continue
    else:
     new += a
        
#print the result
print(new)  

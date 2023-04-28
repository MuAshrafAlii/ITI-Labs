import random

#  ---- Task 1
# def remove_adjacent_duplicates(numbers):
#     result = []
#     for number in numbers:
#         if len(result) == 0 or number != result[-1]:
#             result.append(number)
#     return result

# print(remove_adjacent_duplicates([1,2,3,3,6,7,2,5,5,8]))
#  ------------------------------


#  ---- Task 2
# def split_string(x,y):
#     a_front=x[:(len(x)//2)+len(x)%2]
#     a_back=x[(len(x)//2)+len(x)%2:]
#     b_front=y[:(len(y)//2)+len(y)%2]
#     b_back=y[(len(y)//2)+len(y)%2:]

#     return a_front + b_front + a_back + b_back

# a=input("please enter a: ")
# b=input("please enter b: ")
# print(split_string(a,b))
#  ------------------------------


#  ---- Task 3
# def test_distinct(data):
#   if len(data) == len(set(data)):
#     return True
#   else:
#     return False

#print(test_distinct([1,2,3,4]))
#print(test_distinct([1,2,3,4,2,7]))
#  ------------------------------


#  ---- Task 4
# def bubbleSort(list):
#     n = len(list)
#     for i in range(n-1):
#         for j in range(0, n-i-1):
#             if list[j] > list[j + 1]:
#                 list[j], list[j + 1] = list[j + 1], list[j]
#     return list
 
# print(bubbleSort([64, 34, 25, 12, 22, 11, 90]))
#  ------------------------------


#  ---- Task 5
# n = random.randint(1, 100)
# tries = 0
# guess = int(input("Enter an integer from 1 to 100: "))
# guesses = []
# while True:
#     if guess > 100:
#         print("You can only guess in a range of 100")
#         guess = int(input("Enter an integer from 1 to 100: "))

#     elif guess in guesses:
#         print("You guessed %d before" % (guess))
#         guess = int(input("Enter an integer from 1 to 100: "))

#     elif tries == 10:
#         print("You Finished your 10 guesses")
#         q = input("Do you want to play again? (Y/N)" )
#         if(q == "N" or q == "n"):
#             print("BYEEE")
#             break
#         elif(q == "Y" or q == "y"):
#             tries = 0
#             guesses = []
#             n = random.randint(1, 100)
#             guess = int(input("Enter an integer from 1 to 100: "))
#         else:
#             print("Answer should be Y or N")

#     elif guess < n:
#         print ("guess is low")
#         tries+=1
#         guesses.append(guess)
#         guess = int(input("Enter an integer from 1 to 100: "))

#     elif guess > n:
#         print ("guess is high")
#         tries+=1
#         guesses.append(guess)
#         guess = int(input("Enter an integer from 1 to 100: "))

#     elif guess == n and tries < 11:
#         print ("you guessed it right!")
#         guesses = []
#         n = random.randint(1, 5)
#         guess = int(input("Enter an integer from 1 to 100: "))
#  ------------------------------
#  ---- Task 1
# fname = input("First Name : ")
# lname = input("Last Name : ")
# print ("Hello  " + lname + " " + fname)
#  ------------------------------


#  ---- Task 2
# a = int(input("integer : "))
# n = int( "%s" % a )
# nn = int( "%s%s" % (a,a) )
# nnn = int( "%s%s%s" % (a,a,a) )
# print (n+nn+nnn)
#  ------------------------------


#  ---- Task 3
# print("""
# a string that you "don't" have to escape
# This
# is a  ....... multi-line
# heredoc string --------> example
# """)
#  ------------------------------


#  ---- Task 4
# pi = 3.1415926535897931
# r= 6.0
# v= 4.0/3.0 * pi * r**3
# print('The volume of the sphere is: ',v)
#  ------------------------------


#  ---- Task 5
# b = int(input("base : "))
# h = int(input("height : "))
# area = 1/2 * b * h
# print("area = ", area)
#  ------------------------------


#  ---- Task 6
# n=5
# for i in range(n):
#     for j in range(i):
#         print ('* ', end="")
#     print('')

# for i in range(n,0,-1):
#     for j in range(i):
#         print('* ', end="")
#     print('')
#  ------------------------------


#  ---- Task 7
# word = input("Input a word to reverse: ")
# print(word[::-1])
#  ------------------------------


#  ---- Task 8
# for x in range(6):
#     if (x == 3 or x==6):
#         continue
#     print(x,end=' ')
#  ------------------------------


#  ---- Task 9
# x,y=0,1

# while y<50:
#     print(y, end=", ")
#     x,y = y,x+y
#  ------------------------------


#  ---- Task 10
# s = input("Input a string: ")
# digits = letters =0
# for c in s:
#     if c.isdigit():
#         digits+=1
#     elif c.isalpha():
#         letters+=1
# print("Letters", letters)
# print("Digits", digits)
#  ------------------------------
# -------------- no2 ---------------

# def multiple_string str,n 
#     return str *n
# end 

# print multiple_string('hi-', 1),"\n"
# print multiple_string('hi-', 2),"\n"
# print multiple_string('hi-', 3),"\n"
# print multiple_string('hi-', 4),"\n"
# print multiple_string('hi-', 5),"\n"

# -------------- no2 ---------------

# def check_if(str)
#     return str[0, 2] == "if";
#  end
#  print check_if("ifelse"),"\n"
#  print check_if("endif"),"\n"

# -------------- no3 ---------------

# def front_back(word)
#     word[-1] << word[1...-1] << word[0]
# end
# print front_back("Python"),"\n"
# print front_back("Java"),"\n"

# -------------- no4 ---------------

# def last_first(str)
#     len = str.length() - 1;
# 	return (str[len] + str + str[len]);
# end
# print last_first("abc"),"\n"
# print last_first("abcd"),"\n"
# print last_first("java")


# -------------- no5 ---------------

# year = [2012, 1500, 1600, 2020]
# year.each do |y|
#   if y % 400 == 0
#   	 puts y.to_s + ' is leap year'
#     elsif y % 4==0 && y % 100 != 0 
#       puts y.to_s + ' is leap year'
#   else  puts y.to_s + ' is not leap year'
#   end
# end

# -------------- no6 ---------------

# def rotate_array(nums)
#     rotated = nums.rotate
# 	return rotated ;
# end
# print rotate_array([1, 2, 5]),"\n" 
# print rotate_array([1, 2, 3]),"\n" 
# print rotate_array([1, 2, 4]) 

# -------------- no7 ---------------
# def sum_array(nums)
#     sum = 0
#     i = 0
#     while i < nums.length
#             if(nums[i] == 17)
#              i= i + 1
#          else
#                 sum = sum + nums[i]
#          end
#          i += 1
#      end
#         return sum
#  end
#  print sum_array([3, 5, 17, 6]),"\n"
#  print sum_array([3, 5, 1, 17]),"\n"
#  print sum_array([3, 17, 1, 7]),"\n"

# -------------- no8 ---------------
  
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    nums.each_with_index do |num, i|
      number_to_find = target - num
      (i + 1).upto(nums.length - 1) do |j|
        return [i, j] if number_to_find == nums[j]
      end
    end
    nil
  end


  print two_sum([2,7,11,15],9),"\n"
  print two_sum([3,2,4],6)
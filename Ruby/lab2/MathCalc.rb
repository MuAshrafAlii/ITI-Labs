# -------------------- 2 -------------------

class MathCalc
 
    def calc(first_number,second_number,operator)
       
       raise ArgumentError.new("Invalid type for first_number") unless first_number.is_a?(Numeric)
       raise ArgumentError.new("Invalid type for second_number") unless second_number.is_a?(Numeric)
       raise ArgumentError.new("Invalid operator") unless ["+", "-", "*", "/"].include?(operator)
       raise ZeroDivisionError.new("Division by zero not allowed") if operator == "/" && second_number == 0
   
       # Perform the arithmetic operation using the eval method
       expression = "#{first_number} #{operator} #{second_number}"
       eval(expression)
     rescue ArgumentError, ZeroDivisionError => e
       puts e.message
     rescue => e
       puts "An error occurred: #{e.message}"
     end
   
  end


  math = MathCalc.new
puts math.calc(4, 2, "+")    # 6
puts math.calc(4, 2, "-")    # 2
puts math.calc(4, 2, "*")    # 8
puts math.calc(4, 2, "/")    # 2.0
puts math.calc(4, 0, "/")    # ZeroDivisionError: Division by zero not allowed
puts math.calc("4", 2, "+")  # ArgumentError: Invalid type for num1
puts math.calc(4, 2, "**")   # ArgumentError: Invalid operator

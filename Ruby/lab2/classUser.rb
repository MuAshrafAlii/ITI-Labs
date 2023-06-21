# -------------------- 1 -------------------

class User
    @@name = "user"
    def initialize(name="ahmed")
      @name=name
      
    end
  
    def self.name
      @@name
    end
    def self.name=(new_name)
      @@name=new_name
    end
    def name=(new_name)
      @name = new_name
    end
  
    def name
      @name
    end
  
  end
  
  puts User.name
  puts User.name="mohamed"
  abdo = User.new()
  puts abdo.name
  puts abdo.name="khalid"
katz_deli = [];

 def line(katz_deli)
   line_array = []
   if katz_deli.length == 0
     puts "The line is currently empty."
   else
     katz_deli.each.with_index(1) do |name, index|
       line_array.push("#{index}. #{name}")
    }

  def take_a_number(katz_deli, name)
   katz_deli << name
  puts "Welcome, #{name}. You are number #{katz_deli.size} in line."

 }
 def now_serving(katz_deli)
   if katz_deli.count == 0
     puts "There is nobody waiting to be served!"
   else
   puts "Currently serving #{katz_deli[0]}."
 katz_deli.shift
}

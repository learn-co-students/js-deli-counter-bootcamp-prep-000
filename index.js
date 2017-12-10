katz_deli = []

def line(katz_deli)
  line_list = "The line is currently:"
  if katz_deli.count < 1
    line_list = "The line is currently empty."
  else
    katz_deli.each_with_index do |name, index|
      place = index + 1
      line_list << " #{place}. #{name}"
  end
end
  puts line_list
end

def take_a_number(katz_deli, name)
  katz_deli << name
  place = katz_deli.index(name) + 1
  puts "Welcome, #{name}. You are number #{place} in line."
end

def now_serving(katz_deli)
  if katz_deli.count < 1
    puts "There is nobody waiting to be served!"
  else
    puts "Currently serving #{katz_deli[0]}."
    katz_deli.shift
  end
end

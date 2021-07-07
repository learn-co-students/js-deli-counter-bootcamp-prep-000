katz_deli = []

def line(queue)
  if queue.length == 0
      puts "The line is currently empty."
  else
    total = []
    queue.each_with_index do |person, index|
    total << " #{index + 1}. #{person}"
    end
    puts "The line is currently: " + result.join
  end
end

def take_a_number(line, person)
  line << person
  puts "Welcome, #{person}. You are number #{line.length} in line."
end

def now_serving(line)
  if line.length
  when 0
    puts "There is nobody waiting to be served!"
  else
    puts "Currently serving #{line[0]}."
    line.shift
  end
end

def even_fibonacci_numbers(n):
    last, second_last = 0, 1
    total = 0

    while last < n + 1:
        if last % 2 == 0:
            total += last

        second_last, last = last, last + second_last

    return total

print(even_fibonacci_numbers(4000000))

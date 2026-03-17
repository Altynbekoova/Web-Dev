binary_str = input()
decimal_num = 0
power = len(binary_str) - 1

for digit in binary_str:
    if digit == '1':
        decimal_num += 2 ** power
    power -= 1

print(decimal_num)
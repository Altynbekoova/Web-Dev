def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

a = float(input("a: "))
n = int(input("n: "))

print(power(a, n))
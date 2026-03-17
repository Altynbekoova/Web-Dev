def xor(x, y):
    return x != y

if __name__ == "__main__":
    data = input().split()
    if len(data) == 2:
        x = bool(int(data[0]))
        y = bool(int(data[1]))
        
        result = xor(x, y)
        print(int(result))
        
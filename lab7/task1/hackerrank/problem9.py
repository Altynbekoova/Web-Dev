if __name__ == '__main__':
    n = int(input())
    lst = []
    
    for _ in range(n):
        command_line = input().split()
        cmd = command_line[0]
        args = command_line[1:]
   
        if cmd == 'insert':
            lst.insert(int(args[0]), int(args[1]))
        elif cmd == 'append':
            lst.append(int(args[0]))
        elif cmd == 'remove':
            lst.remove(int(args[0]))
        elif cmd == 'pop':
            lst.pop()
        elif cmd == 'sort':
            lst.sort()
        elif cmd == 'reverse':
            lst.reverse()
        elif cmd == 'print':
            print(lst)
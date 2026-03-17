def make_chocolate(small, big, goal):
    big_to_use = min(big, goal // 5)
    remainder = goal - (big_to_use * 5)
    
    if small >= remainder:
        return remainder
    return -1
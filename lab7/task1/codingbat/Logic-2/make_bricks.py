def make_bricks(small, big, goal):
    num_big_used = min(big, goal // 5)

    remainder = goal - (num_big_used * 5)

    return small >= remainder
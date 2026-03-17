if __name__ == '__main__':
    n = int(input())
    
    scores = set(map(int, input().split()))
    sorted_scores = sorted(list(scores))

    print(sorted_scores[-2])
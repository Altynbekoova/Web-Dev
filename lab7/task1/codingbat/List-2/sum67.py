def sum67(nums):
    total = 0
    in_range = False
    
    for n in nums:
        if n == 6:
            in_range = True
        
        if not in_range:
            total += n
        
        if n == 7 and in_range:
            in_range = False
            
    return total
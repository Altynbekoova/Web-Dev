def close_far(a, b, c):
    def is_close(val, ref):
        return abs(val - ref) <= 1
    
    def is_far(val, ref1, ref2):
        return abs(val - ref1) >= 2 and abs(val - ref2) >= 2
  
    if is_close(b, a) and is_far(c, a, b):
        return True
    if is_close(c, a) and is_far(b, a, c):
        return True
        
    return False
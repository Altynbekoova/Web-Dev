def cat_dog(str):
    cat_count = 0
    dog_count = 0
 
    for i in range(len(str) - 2):
        substring = str[i:i+3]
        
        if substring == 'cat':
            cat_count += 1
        elif substring == 'dog':
            dog_count += 1
            
    return cat_count == dog_count
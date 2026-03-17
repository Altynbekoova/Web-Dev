def alarm_clock(day, vacation):
    is_weekday = 1 <= day <= 5
    
    if vacation:
        if is_weekday:
            return '10:00'
        else:
            return 'off'
    else:
        if is_weekday:
            return '7:00'
        else:
            return '10:00'
if __name__ == '__main__':
    students = []
    n = int(input())
    
    for _ in range(n):
        name = input()
        grade = float(input())
        students.append([name, grade])
        
    unique_grades = sorted(set(student[1] for student in students))
    second_lowest = unique_grades[1]
    runner_ups = [s[0] for s in students if s[1] == second_lowest]

    runner_ups.sort()
    for name in runner_ups:
        print(name)
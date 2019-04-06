
possibilities = {}
for die_1 in range(1,7):
    for die_2 in range(1,7):
        for die_3 in range(1,7):
        total = die_1 + die_2
        # print(f"{die_1} {die_2} : {total}")
        if total not in possibilities:
            possibilities[total] = 1
        else:
            possibilities[total] += 1
print(possibilities)

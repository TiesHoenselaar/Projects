possibilities_1 = {}
possibilities_2 = {}
possibilities_3 = {}

for die_1 in range(1,7):
    total_1 = die_1
    if total_1 not in possibilities_1:
        possibilities_1[total_1] = 1
    else:
        possibilities_1[total_1] += 1

    for die_2 in range(1,7):
        total_2 = die_1 + die_2
        if total_2 not in possibilities_2:
            possibilities_2[total_2] = 1
        else:
            possibilities_2[total_2] += 1

        for die_3 in range(1,7):
            total_3 = die_1 + die_2 + die_3
            if total_3 not in possibilities_3:
                possibilities_3[total_3] = 1
            else:
                possibilities_3[total_3] += 1


print("--- 1 die ---\n")
for key, value in possibilities_1.items():
    print(f"{key}:\t{value}")

print("\n--- 2 dice ---\n")
for key, value in possibilities_2.items():
    print(f"{key}:\t{value}")

print("")
print("\n--- 3 dice ---\n")
for key, value in possibilities_3.items():
    print(f"{key}:\t{value}")

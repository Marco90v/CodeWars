# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

# It should remove all values from list a, which are present in list b keeping their order.

# array_diff([1,2],[1]) == [2]
# If a value is present in b, all of its occurrences must be removed from the other:

# array_diff([1,2,2,2,3],[2]) == [1,3]


def array_diff(a,b):
    for x in b:
        while(a.count(x)>0):
            a.remove(x)
    return a

res0 = array_diff([1,2],[1])
print(res0)
res1 = array_diff([1,2,2], [1])
print(res1)
res2 = array_diff([1,2,2], [2])
print(res2)
res3 = array_diff([1,2,2], [])
print(res3)
res4 = array_diff([], [1,2])
print(res4)
res5 = array_diff([1,2,3], [1, 2])
print(res5)
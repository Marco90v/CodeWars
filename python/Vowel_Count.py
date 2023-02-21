# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    return len([l for l in sentence if l in "aeiou"])

res0 = get_count("aeiou")
print(res0)
res1 = get_count("y")
print(res1)
res2 = get_count("bcdfghjklmnpqrstvwxz y")
print(res2)
res3 = get_count("")
print(res3)
res4 = get_count("abracadabra")
print(res4)
#Python version 3
__author__ = 'noobcola'

# this function assumes our array is already sorted
def binary_search(arr, target):
    # start searching the entire array
    low = 0
    high = len(arr) - 1

    # while our array bounds are still valid
    while low <= high:
        # lets check the middle of our array bounds (low and high)
        mid = int((high + low) / 2)
        if arr[mid] == target:
            # we found our target
            return mid
        elif arr[mid] > target:
            # since our mid value is bigger than our target, the value might be located
            # to the left of middle, so lets search from array bounds low to mid -1
            high = mid - 1
        elif arr[mid] < target:
            # since our mid value is smaller than our target, the value might be located
            # to the right of middle, so lets search from array bounds mid + 1 to high
            low = mid + 1

    # If the bounds are invalid, that means our search has failed, since we've checked every possible sorted value
    return -1

if __name__ == "__main__":
    #Example cases

    test = [1, 2, 3, 4, 5]
    target = 5
    position = binary_search(test, 5)

    if position > -1:
        #We found the target in array
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        #Target value not found
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 2, 3, 4, 5]
    target = 6
    position = binary_search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 2, 3, 4, 5]
    target = 0
    position = binary_search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 2, 3, 4, 5, 6]
    target = 1
    position = binary_search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 3, 3, 5, 7, 10, 14, 15, 21]
    target = 14
    position = binary_search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 3, 3, 5, 7, 10, 14, 15, 21]
    target = 4
    position = binary_search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at index %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))


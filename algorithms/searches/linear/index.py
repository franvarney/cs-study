#Python version 3
__author__ = 'noobcola'

def search(arr, target):
    for i, value in enumerate(arr):
        if target == value:
            return i

    # If we don't return an array position above, we never found target value in the array
    return -1


if __name__ == "__main__":
    #Example cases

    test = [1, 2, 3, 4, 5]
    target = 5
    position = search(test, 5)

    if position > -1:
        #We found the target in array
        print("Target %s found at position %s for array: %s" % (target, position, test))
    else:
        #Target value not found
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 2, 3, 4, 5]
    target = 6
    position = search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at position %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))

    test = [1, 2, 3, 4, 5, 1]
    target = 1
    position = search(test, target)

    #we found the target in array
    if position > -1:
        print("Target %s found at position %s for array: %s" % (target, position, test))
    else:
        print("Couldn't find target %s in array: %s" % (target, test))
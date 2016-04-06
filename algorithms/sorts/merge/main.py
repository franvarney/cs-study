def merge(array, low, mid, high):
    L = array[low:mid+1]  # Left subarray
    R = array[mid+1:high+1]  # Right subarray
    L += [9999999]  # Left sentinel element
    R += [9999999]  # Right sentinel element
    i = j = 0
    # Smaller first
    for k in range(low, high+1):
        if L[i] <= R[j]:
            array[k] = L[i]
            i += 1
        else:
            array[k] = R[j]
            j += 1


def merge_sort(array, low, high):
    if low < high:
        mid = (low + high) // 2
        # Recursively sort array[low...mid] and array[mid+1...high]
        merge_sort(array, low, mid)
        merge_sort(array, mid+1, high)
        # Merge the left and right sorted subarrays
        merge(array, low, mid, high)

array = [1, 5, 2, 4, 3]
print("Unsorted: {}".format(array))
merge_sort(array, 0, len(array)-1)
print("Sorted: {}".format(array))

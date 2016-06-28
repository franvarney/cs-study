const Assert = require('assert')

function singleNumber(nums) {
  if (!nums || !nums.length) return nums

  if (nums.length === 1) return nums[0]

  nums = nums.sort()

  var count = 0
  var lastNum

  for (var i = 0; i < nums.length; ++i) {
    if (lastNum !== nums[i]) {
      if (count && count < 3) return lastNum
      lastNum = nums[i], count = 0
    }

    ++count
  }

  return lastNum
}

Assert.equal(singleNumber([2,2,3,4]), 2)
Assert.equal(singleNumber([4,5,4,4,5,1,1,5]), 1)

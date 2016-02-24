// Answer #1
function format(start, end) {
  var formatted = start.toString();
  if (end) formatted += '->' + end;
  return formatted;
}

function push(start, end, result) {
  if (start !== end) result.push(format(start, end));
  else result.push(format(start));
}

function summaryRanges(nums) {
  if (!nums || !nums.length) return nums;

  var start = nums[0], end = nums[0];
  var result = [];

  for (var i = 1; i < nums.length; ++i) {
    if ((end + 1) === nums[i]) ++end;
    else {
      push(start, end, result);
      end = nums[i];
      start = end;
    }
  }

  push(start, nums[i - 1], result);

  return result;
}

console.log(summaryRanges([0,1,3,5,8,11]));
console.log(summaryRanges([0,1,2,4,5,7,8]));
console.log(summaryRanges([0,1,2,4,5,7,8,11]));

using System;
namespace CodeSolution
{
    public class Solution
    {
        public static string ReverseString(string s)
        {
            StringBuilder sb = new StringBuilder();
	    for(int i = s.Length; i > 0; i--){
	        sb.Append(s[i-1]);
            }
	}
        static void Main()
        {
            string x = "Test";
            string y = "tseT";
            System.Diagnostics.Debug.Assert(Solution.ReverseString(x) == y);
        }
    }
}

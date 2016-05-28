using System;
namespace CodeSolution
{
    public class Solution
    {
        public static string ReverseString(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
        static void Main()
        {
            string x = "Test";
            string y = "tseT";
            System.Diagnostics.Debug.Assert(Solution.ReverseString(x) == y);
        }
    }
}
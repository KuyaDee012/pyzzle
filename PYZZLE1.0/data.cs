using System;

public class DataTypes
{
    public static void Main(string[] args)
    {
        Console.WriteLine ("What is your name?");
        string a = Console.ReadLine ();
        Console.WriteLine ("How old are you?");
        int b = Convert.ToInt32(Console.ReadLine ());
        Console.WriteLine ("What is your sex?");
        string c = Console.ReadLine ();
        Console.WriteLine ("What is your course?");
        string d = Console.ReadLine ();
        Console.WriteLine ("What is your favorite number?");
        int e = Convert.ToInt32(Console.ReadLine ());
       
        //print
        Console.WriteLine ("Name:"+a);
        Console.WriteLine ("Age:"+b);
        Console.WriteLine ("Sex:"+c);
        Console.WriteLine ("Course:"+d);
        Console.WriteLine ("Favorite Number:"+e);
        string binary  = Convert.ToString(e, 2);
        Console.WriteLine("favorite number to binary:"+binary);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2025._09._16
{
    internal class Program
    {
        static void Main(string[] args)
        {
            float a = 5/2; //2.5

            float b = 5/2; // 2.5

            double c = 2.5;

            double d = 2.5;

            Jarmu j = new Jarmu();

            Console.WriteLine(j.Osszead(a, b));
            Console.WriteLine(j.Osszead(c, d));


            Console.WriteLine("-.-.-.-.-.-.-.-.-.-.");

            Teglalap t = new Teglalap(5, 6);
            Teglalap n = new Teglalap(5);

            Console.WriteLine(t.Kerulet());
            Console.WriteLine(t.Kerulet(5,6));
            Console.WriteLine(t.Kerulet(5));

            Console.WriteLine(t.Terulet());
            Console.WriteLine(t.Terulet(5,6));
            Console.WriteLine(t.Terulet(5));

            Console.WriteLine("-.-.-.-.-.-.-.-.-.-.");



        }
        
    }

}

class Jarmu
{
    public Jarmu() { }

    public double Osszead(double a, double b)
    {
        return a + b;
    }
}

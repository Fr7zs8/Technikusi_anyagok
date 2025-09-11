using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Feladat_09._11
{
    internal class Jarmu
    {
        int sebesség = 0;

        public Jarmu() { }

        public void Halad()
        {
            sebesség++;
            Console.WriteLine($"A jármű sebessége: {sebesség}");
        }
    }

    class Auto: Jarmu
    {
        int uzemanyag = 0;


        public Auto() { }

        public void Tankol()
        {
            uzemanyag++;
            Console.WriteLine($"Az auto üzemanyagszintje: {uzemanyag}");
        }
    }

    class Bicikli: Jarmu
    {

        public Bicikli() { }

        public void Csenget()
        {
            Console.WriteLine("A bicikli csengetett");
        }
    }
}

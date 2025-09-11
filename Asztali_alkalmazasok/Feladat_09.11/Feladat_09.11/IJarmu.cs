using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Feladat_09._11
{
    interface IJarmu
    {
        void Indit();

        void Megall();
    }

    class Gepjarmu : IJarmu
    {

        public Gepjarmu() { }

        public void Indit()
        {
            Console.WriteLine("Az auto motorja beindult.");
        }

        public void Megall()
        {
            Console.WriteLine("Az auto motorja leállt.");
        }


    }

    class Ketkereku: IJarmu
    {
        public Ketkereku() { }

        public void Indit()
        {
            Console.WriteLine("A bicikli gurulni kezd.");
        }

        public void Megall()
        {
            Console.WriteLine("A bicikli megállt.");
        }
    }
}

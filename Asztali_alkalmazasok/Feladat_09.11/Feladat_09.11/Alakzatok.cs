using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Feladat_09._11
{
    abstract class Alakzatok
    {
        public abstract double Terulet();
        
    }

    class Kor: Alakzatok
    {
        private int sugar;

        public Kor(int sugarmeg)
        {
            sugar = sugarmeg;
        }

        public override double Terulet()
        {
            return (sugar * sugar) * Math.PI;
        }

    }

    class Haromszog: Alakzatok
    {
        private int oldal;
        private int magassag;

        public Haromszog(int a, int b)
        {
            oldal = a;
            magassag = b;
        }

        public override double Terulet()
        {
            return (oldal * magassag)/2;
        }

    }

    class Negyzet: Alakzatok
    {
        private int oldal;
        public Negyzet(int a)
        {
            oldal = a;
        }

        public override double Terulet()
        {
            return oldal * oldal;
        }
    }
}

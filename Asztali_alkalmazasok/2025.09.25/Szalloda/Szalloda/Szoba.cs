using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Szalloda
{
    abstract class Szoba
    {
        string szobaszam ;
        decimal ar;

        public string Szobaszam
        {
            get { return szobaszam; }
        }

        public Szoba(string szobaszam, decimal ar)
        {
            this.szobaszam = szobaszam;
            Ar = ar;

        }

        public decimal Ar
        {
            get { return ar; }
            set
            {
                if(value < 0)
                {
                    throw new ArgumentException();
                }
                else
                {
                    ar = value;
                }
            }
        }

        public abstract string Leiras();

        public virtual string Foglalas()
        {
            return $"A {szobaszam} szoba foglalható";
        }
    }

    class EgyagyasSzoba: Szoba
    {
        public EgyagyasSzoba(string szobaszam, decimal ar):base(szobaszam, ar)
        {

        }

        public override string Leiras()
        {
            return $"Egyágyas szoba - {Ar} Ft/éj";
        }

        public override string Foglalas()
        {
            return base.Foglalas() + " minimum 1 főre ";
        }
    }

    class KetagyasSzoba : Szoba
    {
        public KetagyasSzoba(string szobaszam, decimal ar) : base(szobaszam, ar)
        {

        }

        public override string Leiras()
        {
            return $"Kétágyas szoba - {Ar} Ft/éj";
        }

        public override string Foglalas()
        {
            return base.Foglalas() + " minimum 2 főre ";
        }
    }

    class Szalloda
    {
        public Szalloda() { }

        List<Szoba> szobak = new List<Szoba> { new EgyagyasSzoba("20", 12000), new KetagyasSzoba("40", 24000), new KetagyasSzoba("50", 28000)};
        
        public void Kiirszobak()
        {
            foreach(Szoba szoba in szobak)
            {
                Console.WriteLine(szoba.Foglalas() + szoba.Leiras());
            }   
        }


    }

}

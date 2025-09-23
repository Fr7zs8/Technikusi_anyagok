using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temazaro_gyak
{
    abstract class Resztvevo
    {
        string nev;
        int eletkor;

        public string Nev
        {
            get { return nev; }
            set { nev = value; }
        }

        public int Eletkor
        {
            get { return eletkor; }
            set
            {
                if(value > 0&& value < 200)
                {
                    eletkor = value;
                }
                else
                {
                    throw new ArgumentException();
                }
            }
        }

        public Resztvevo(string nev, int eletkor)
        {
            Nev = nev;
            Eletkor = eletkor;
        }

        public abstract string Tevekenyseg();

        public virtual string Bemutatkozas()
        {
            return $"Szia, a nevem {Nev}, {Eletkor} éves vagyok.";
        }


    }

    class Tanulo: Resztvevo
    {
        string osztaly;

        public string Osztaly
        {
            get { return osztaly; }
            set { osztaly = value; }
        }

        public Tanulo(string nev, int eletkor, string osztaly):base(nev, eletkor)
        {
            Osztaly = osztaly;
        }

        public Tanulo(string nev, int eletkor): base(nev, eletkor)
        {
            Osztaly = "ismeretlen";

        }

        public override string Tevekenyseg()
        {
            return $"A(z) {Osztaly} tanuloja vagyok.";
        }

        public override string Bemutatkozas()
        {
            return base.Bemutatkozas() + $"A {Osztaly} osztályba járok.";
        }
    }

    class Tanar : Resztvevo
    {
        string szak;

        public string Szak
        {
            get { return szak; }
            set { szak = value; }
        }

        public Tanar(string nev, int eletkor, string szak):base(nev, eletkor) 
        {
            Szak = szak;
        }

        public Tanar(string nev, int eletkor):base(nev, eletkor)
        {
            Szak = "Már nem tanít";
        }

        public override string Tevekenyseg()
        {
            return $"A(z) {Szak} tanára vagyok.";
        }

        public override string Bemutatkozas()
        {
            return base.Bemutatkozas() + $"A szakom: {Szak}";
        }
    }

    class TanarSegito: Tanar
    {
        string felelosseg;

        public string Felelosseg
        {
            get { return felelosseg; }
            set { felelosseg = value; }
        }

        public TanarSegito(string nev, int eletkor, string szak, string felelosseg): base(nev, eletkor, szak)
        {
            Felelosseg = felelosseg;
        }

        public override string Tevekenyseg()
        {
            return $"Az én felelosségem: {Felelosseg}";
        }

    }

}

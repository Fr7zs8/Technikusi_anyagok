using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2025._09._18
{
    internal class Hallgato
    {
        string nev;
        double atlag;

        public string Nev{
            get
            {
                return nev;
            }
            set
            {
                nev = value;
            }
        }

        public double Atlag
        {
            get
            {
                return atlag;
            }
            set
            {
                if(value >0 && value <= 5)
                {
                    atlag = value;
                }
                else
                {
                    throw new Exception();
                }
            }
        }

        public Hallgato(string nev, int atlag)
        {
            
            this.Nev = nev;
            this.Atlag = atlag;
        }

    }

    class Kurzus
    {
        public Kurzus() { }

        List<Hallgato> list = new List<Hallgato>();

        public List<Hallgato> List
        {
            get { return list; }
            set { list = value; }
        }
    
        public void Felvesz(Hallgato h)
        {
            list.Add(h);
        }

        public void Listaz()
        {
            foreach(Hallgato h in list)
            {
                Console.WriteLine($"A hallgató neve: {h.Nev} és az átlaga: {h.Atlag}");
            }
        }



    }
}

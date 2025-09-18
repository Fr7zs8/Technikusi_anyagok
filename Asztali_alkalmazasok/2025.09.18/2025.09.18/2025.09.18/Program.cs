using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2025._09._18
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Hallgato jozsi = new Hallgato("Kiss József", 4);
            Hallgato pista = new Hallgato("János Pista", 3);
            Hallgato bela = new Hallgato("Csont Béla", 5);

            Kurzus teszteles = new Kurzus();

            teszteles.Felvesz(jozsi);
            teszteles.Felvesz(pista);
            teszteles.Felvesz(bela);

            teszteles.Listaz();

            

        }
    }
}

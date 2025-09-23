using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temazaro_gyak
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Resztvevo> lista = new List<Resztvevo>();

            lista.Add(new Tanulo("Kis Józsi", 20, "13.D"));
            lista.Add(new Tanulo("Kis Péter", 16, "10.C"));
            lista.Add(new Tanar("Nagy Kálmán", 50, "Matek"));
            lista.Add(new TanarSegito("Törpe Anita", 17, "Matek", "Házi felelös"));


            foreach (var item in lista)
            {
                Console.WriteLine(item.Bemutatkozas());
                Console.WriteLine(item.Tevekenyseg());
                Console.WriteLine();
                
            }

            

            

        }
    }
}

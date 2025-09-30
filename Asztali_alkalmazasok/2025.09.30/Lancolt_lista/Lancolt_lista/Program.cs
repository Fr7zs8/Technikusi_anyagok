 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lancolt_lista
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Node linkedlist = new Node();

            linkedlist.Hozzaadas(5);
            linkedlist.Hozzaadas(15);
            linkedlist.Hozzaadas(25);

            linkedlist.Kiiras();
            Console.WriteLine("-.-.-.");
            linkedlist.KiirasForditva();

            linkedlist.Törles();

            Console.WriteLine("-.-.-.-.");
            linkedlist.Kiiras();
        }
    }


}

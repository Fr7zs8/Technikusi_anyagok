using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jackie
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Datas datas = new Datas();
            List<Datas> elemek = datas.Filebeolvas();
            Console.WriteLine($"3. feladat: {elemek.Count}");

            int legtobbrace = 0;
            for (int i = 0; i < elemek.Count; i++)
            {
                legtobbrace = elemek[0].Races;

                if (elemek[i].Races > legtobbrace)
                {
                    legtobbrace = elemek[i].Races;
                }
            }

            Console.WriteLine(legtobbrace);



        }


    }
}

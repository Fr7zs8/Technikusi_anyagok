using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Feladat_09._11
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Bicikli bicikli = new Bicikli();
            bicikli.Csenget();

            bicikli.Halad();

            Auto auto = new Auto();

            auto.Tankol();

            auto.Halad();
            auto.Halad();
            auto.Halad();

            auto.Tankol();

            Alakzatok kor = new Kor(6);
            Alakzatok harom = new Haromszog(4, 6);
            Alakzatok negy = new Negyzet(7);
            
            List<Alakzatok> alakok = new List<Alakzatok>() { kor, harom, negy};
            

            foreach (var alak in alakok)
            {
                Console.WriteLine(alak.Terulet());
            }

            IJarmu gepjarmu = new Gepjarmu();
            IJarmu ketkereku = new Ketkereku();

            List<IJarmu> jarmuk = new List<IJarmu>() { gepjarmu, ketkereku};

            foreach(var jarmu in jarmuk)
            {
                jarmu.Indit();
                jarmu.Megall();
            }


        }
    }
}

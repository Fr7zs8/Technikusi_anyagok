using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lancolt_lista
{
    class Node
    {
        public class Csucs
        {
            public int adat; // double? string? kiskutya?
            public Csucs kov;

        }

        Csucs elso = null;

        //Törlés eleje vagy adottat töröl, hozzáadás elejére, beszurás, kiiratás,   

        //
        public void Hozzaadas(int adat)
        {   
            Csucs cs = new Csucs();
            cs.adat = adat;
            cs.kov = elso;
            elso = cs;
        }

        public static void Hozzaadas(int adat, Csucs elozo)
        {
            Csucs cs = new Csucs();
            cs.adat = adat;
            cs.kov = elozo.kov;
            elozo.kov = cs;

        }

        public void Kiiras()
        {
            Csucs cs = elso;
            while (cs != null)
            {
                Console.WriteLine(cs.adat);
                cs = cs.kov;
            }
        }

        public void KiirasForditva()
        {
            KiirasForditva(elso);
        }

        private static void KiirasForditva(Csucs cs)
        {
            if(cs == null)
            {
                return;
            }
            KiirasForditva(cs.kov);
            Console.WriteLine(cs.adat);
        }

        public void Törles()
        {
            if(elso == null)
            {
                throw new InvalidOperationException("Nincs adat.");
            }

            elso = elso.kov;
            
        }

        public void Törles(Csucs elozo)
        {
            if(elozo == null || elozo.kov == null)
            {
                throw new InvalidOperationException("Haver nincs mit törölni!!!");
            }
            elozo.kov = elozo.kov.kov;




        }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2025._09._16
{
    internal class Teglalap
    {
        int szelesseg;
        int magassag;

        public Teglalap(int szelesseg, int magassag)
        {
            this.szelesseg = szelesseg;
            this.magassag = magassag;
        }

        public Teglalap(int szelesseg)
        {
            this.szelesseg = szelesseg;
            this.magassag = 0;
        }

        public int Kerulet()
        {
            return (2 * szelesseg) + (2 * magassag);
        }

        public int Kerulet(int szelesseg, int magassag)
        {
            return (2 * szelesseg) + (2 * magassag);
        }

        public int Kerulet(int szelesseg)
        {
            return 4 * szelesseg;
        }

        public int Terulet()
        {
            return szelesseg * magassag;
        }

        public int Terulet(int szelesseg, int magassag)
        {
            return szelesseg * magassag;
        }

        public int Terulet(int szelesseg)
        {
            return szelesseg * szelesseg;
        }
    }
}

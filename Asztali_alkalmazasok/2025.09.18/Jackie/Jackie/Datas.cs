using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Jackie
{
    internal class Datas
    {
        int year;
        int races;
        int wins;
        int podiums_poles;
        int fastest;
        
        public int Year
        {
            get { return year; }
            set { year = value; }
        }

        public int Races
        {
            get { return races; }
            set { races = value; }
        }

        public int Wins
        {
            get { return wins; }
            set { wins = value; }
        }

        public int Podiums
        {
            get { return podiums_poles; }
            set {  podiums_poles = value;}
        }

        public int Fastest
        {
            get { return fastest; }
            set { fastest = value; }
        }

        public Datas(int year, int races, int wins, int podiums, int fastest)
        {
            this.year = year;
            this.races = races;
            this.wins = wins;
            this.podiums_poles = podiums;
            this.fastest = fastest;
        }

        public Datas() { }

        public List<Datas> Filebeolvas()
        {
            List<Datas> datas = new List<Datas>();

            FileStream fs = new FileStream("jackie.txt", FileMode.Open);
            StreamReader sr = new StreamReader(fs, System.Text.Encoding.Default);

            string sor = sr.ReadLine();

            while((sor = sr.ReadLine()) != null)
            {
                string[] adatok = sor.Split('\t');
                Datas adat = new Datas();
                adat.Year = int.Parse(adatok[0]);
                adat.Races = int.Parse(adatok[1]);
                adat.Wins = int.Parse(adatok[2]);
                adat.Podiums = int.Parse(adatok[3]);
                adat.Fastest = int.Parse(adatok[4]);

                datas.Add(adat);
                
            }

            fs.Close();
            sr.Close();
            return datas;

            
        }

        

    }
}

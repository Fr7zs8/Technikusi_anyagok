namespace _2025._10._07
{
    public class Stack
    {
        private readonly List<int> _data = [];

        public int Count
        {
            get => _data.Count();
        }

        public int Peek()
        {
            return (_data.Count == 0) ? throw new InvalidOperationException() : _data.Last();
        }

        public void Push(int i)
        {
            _data.Add(i);
        }

        

        
    }
}

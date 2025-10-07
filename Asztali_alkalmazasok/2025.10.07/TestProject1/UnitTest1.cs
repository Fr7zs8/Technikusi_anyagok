using _2025._10._07;

namespace TestProject1
{
    public class Tests
    {
        private Stack _stack;

        [SetUp]
        public void Setup()
        {
            _stack = new Stack();

        }

        [Test]
        public void Test1()

        {
            Assert.Throws<InvalidOperationException>(() => _stack.Peek());
        }

        [Test] 
        public void Test2()
        {
            _stack.Push(1);
            Assert.That(_stack.Peek(), Is.EqualTo(1));
        }

        [Test]
        public void Test3()
        {
            Assert.That(_stack.Count, Is.Zero);
        }
    }
}
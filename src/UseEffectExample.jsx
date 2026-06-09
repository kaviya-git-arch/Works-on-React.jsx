import { useState, useEffect } from 'react';

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Effect runs on mount only (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    setLoading(true);
  }, []);

  // 2. Effect runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = `Count: ${count}`;
  }, [count]);

  // 3. Effect runs when name changes
  useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);

  // 4. Effect with cleanup function (for subscriptions, timers, etc.)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 2000);

    // Cleanup function runs before unmount or before effect re-runs
    return () => {
      clearInterval(timer);
      console.log('Timer cleared');
    };
  }, []);

  // 5. Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useEffect Examples</h1>

      {/* Counter */}
      <section>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>

      {/* Input */}
      <section>
        <h2>Input Example</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || 'Guest'}!</p>
      </section>

      {/* Fetched Data */}
      <section>
        <h2>Fetched Posts</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default UseEffectExample;

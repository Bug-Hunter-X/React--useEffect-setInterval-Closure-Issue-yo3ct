```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correct usage: useRef to manage the interval ID
    const intervalRef = useRef(null);

    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
      intervalRef.current = setInterval(incrementCount, 1000);
      return () => clearInterval(intervalRef.current);
    }, []);

    return <div>Count: {count}</div>;
  }, []);

  return <div>Count: {count}</div>;
}
```
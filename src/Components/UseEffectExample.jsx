const UseEffectExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect called on every render");
  });

  useEffect(() => {
    console.log("useEffect called on first render only");
  }, []);

  useEffect(() => {
    console.log("useEffect called on when count1 change");
  }, [count1]);

  const increaseCount1 = () => {
    setCount1(count1 + 1);
  };

  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <Routing />
      <h1>Count1 = {count1}</h1>
      <h1>Count2 = {count2}</h1>

      <button type="button" onClick={increaseCount1}>
        Increase Count1
      </button>
      <button type="button" onClick={increaseCount2}>
        Increase Count2
      </button>
    </>
  );
};

export default UseEffectExample;

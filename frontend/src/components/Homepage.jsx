import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const [ tierLists, setTierLists ] = useState();

  useEffect(() => {
    fetchInterests();
  }, []);

  function fetchInterests() {
    axios.get("/api/tier_lists").then((data) => {
      setInterests(data.data);
    });
  }

  const interestList = interests.map((interest) => {
    return (
      <Button
        key={interest.id}
        variant={
          props.picked.includes(Number(interest.id)) ? "contained" : "outlined"
        }
        className={props.picked.includes(Number(interest.id)) ? "blockAni" : ""}
        onClick={handleClick}
        sx={{ marginRight: 1 }}
        value={interest.id}
      >
        {interest.name}
      </Button>
    );
  });

  return (
    <>
      <div>
        Home Page <br />
        {interestList}
      </div>
      <Link to="/new">Add new tier list</Link>
    </>
  );
}

export default Homepage;
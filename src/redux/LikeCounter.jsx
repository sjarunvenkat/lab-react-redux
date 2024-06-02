import React, { useEffect } from "react";
import { createStore } from "redux";
import reducer from "./Reducer";
import { incrementLike, decrementLike } from "./Actions";

const store = createStore(reducer);

function LikeCounter() {
  const [likes, setLikes] = React.useState(store.getState().likes);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLikes(store.getState().likes);
    });
    return unsubscribe;
  }, []);

  const handleIncrement = () => {
    store.dispatch(incrementLike());
  };

  const handleDecrement = () => {
    store.dispatch(decrementLike());
  };

  return (
    <div>
      <h1>Like Counter</h1>
      <p>Likes : {likes}</p>
      <button onClick={handleIncrement}> Like </button>
      <button onClick={handleDecrement}> Unlike</button>
    </div>
  );
}

export default LikeCounter;

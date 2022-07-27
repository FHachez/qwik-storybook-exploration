import './QwikCounter.css';
import { component$, useStore } from '@builder.io/qwik';


export const Counter = component$(() => {
  const store = useStore({ count: 0 });

  return (
    <div>
       <div
      onMouseMove$={(event) => {
        console.log(event)
      }}
    >
      Your mouse location is azlkja
    </div>
      <p>Count: {store.count}</p>
       <button onClick$={() => alert('Hello World!')}>Click Me</button>;

      <p>
        <button onClick$={() => store.count++}>Increment</button>
      </p>
    </div>
  );
});
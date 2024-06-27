

type CounterProps = {
  initialValue?: number;
};

declare module 'customerRemote/Counter' {

    import { FC } from 'react'

    const Counter: FC<CounterProps>
    export default Counter
}
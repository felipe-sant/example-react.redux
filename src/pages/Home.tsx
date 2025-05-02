import { useDispatch, useSelector } from "react-redux"
import css from "../styles/pages/home.module.css"
import { AppDispatch, RootState } from "../store/store"
import { decrement, increment, reset, setName } from "../store/slices/example"
import getApiExample from "../services/asyncThunk/getApiExample"

function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const {
        count,
        name,
        content,
        isLoading
    } = useSelector((state: RootState) => state.example)

    return (
        <main className={css.main}>
            <h1>React Redux Example</h1>
            <hr />
            <input 
                type="text" 
                value={name}
                onChange={e => dispatch(setName(e.target.value))} 
                placeholder="Type your name"
            />
            <p>My name is {name}</p>
            <br />
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <br />
            <h2>Api External {isLoading ? <>| Loading...</> : <></>}</h2>
            <button onClick={() => dispatch(getApiExample())}>Find</button>
            {content.title && content.body ?
                <button onClick={() => console.log(content)}>see content</button>
                :
                <p>Click the button to get the content</p>
            }
        </main>
    )
}

export default Home
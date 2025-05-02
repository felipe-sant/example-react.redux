import { useDispatch, useSelector } from "react-redux"
import css from "../styles/pages/home.module.css"
import { AppDispatch, RootState } from "../store/store"
import { decrement, increment, reset, setName } from "../store/slices/example"
import getApiExample from "../services/asyncThunk/getApiExample"
import GithubLink from "../components/GithubLink"

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
            <div className={css.title}>
                <h1>React Redux Example</h1>
                <hr />
            </div>
            <div className={css.input}>
                <h2>Input example</h2>
                <input
                    type="text"
                    value={name}
                    onChange={e => dispatch(setName(e.target.value))}
                    placeholder="Type your name"
                />
                <p>Your name is <strong>{name}</strong></p>
            </div>
            <div className={css.button}>
                <h2>Button example</h2>
                <p>Count: {count}</p>
                <div>
                    <button onClick={() => dispatch(increment())} className={css.increment}>+</button>
                    <button onClick={() => dispatch(decrement())} className={css.decrement}>-</button>
                    <button onClick={() => dispatch(reset())} className={css.reset}>Reset</button>
                </div>
            </div>
            <div className={css.api}>
                <h2>Request example {isLoading ? <img src="/images/loading.svg" alt="" /> : <></>}</h2>
                <button onClick={() => dispatch(getApiExample())}>Find</button>
                {content.userId && content.id && content.title && content.body ?
                    <div className={css.code}>
                        {"{"}
                        <p><strong>User ID:</strong> {content.userId}</p>
                        <p><strong>ID:</strong> {content.id}</p>
                        <p><strong>Title:</strong> "{content.title}"</p>
                        <p><strong>Body:</strong> "{content.body}"</p>
                        {"}"}
                    </div>
                    :
                    <p className={css.placeholder}>Click the button to get the content</p> 
                }
            </div>
            <GithubLink />
        </main>
    )
}

export default Home
import redirect from "../functions/utils/redirect"
import css from "../styles/components/githubLink.module.css"

function GithubLink() {
    return (
        <div className={css.github} onClick={() => redirect("https://github.com/felipe-sant/example-react_redux")}>
            <img src="/images/github.png" alt="" />
        </div>
    )
}

export default GithubLink
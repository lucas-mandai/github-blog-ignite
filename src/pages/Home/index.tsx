import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";

export function Home() {
    return (
        <div className="container pb-20">
            <Profile/>
            <Posts/>
        </div>
    )
}
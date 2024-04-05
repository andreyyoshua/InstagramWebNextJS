import Posts from "./posts";
import Stories from "./stories";

export default function Feed() {
    return (
        <main>
            <section>
                <Stories />
                <Posts />
            </section>

            <section>

            </section>
        </main>
    )
}
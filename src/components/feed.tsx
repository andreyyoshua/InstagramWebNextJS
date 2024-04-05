import MiniProfile from "./miniProfile";
import Posts from "./posts";
import Stories from "./stories";
import Suggestions from "./suggestions";

export default function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
            <section className="md:col-span-2">
                <Stories />
                <Posts />
            </section>

            <section className="hidden md:inline-grid md:col-span-1 ml-8 mt-8">
                <div className="fixed w-[380px]">
                    { /* Mini Profile */ }
                    <MiniProfile />

                    { /* Suggestions */}
                    <Suggestions />
                </div>
            </section>
        </main>
    )
}
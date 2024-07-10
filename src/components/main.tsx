import React from "react";

const Button: React.FC = () => {
    return (
        <button>click me</button>
    )
}

const Chance: React.FC = () => {
    return (
        <p></p>
    )
}


const Main: React.FC = () => {
    return (
        <section id="button-zone">
            <article>
                <p></p>
                <p></p>
            </article>
            <Button />
            <Chance/>
        </section>
    )
}

export default Main;

import "..//styles/card.css";

export function Card({sprite, name, types, eventTrigger}) {
    return (
        <div className={"card"}>
            {sprite && (
                <div className={"sprite-container"}>
                    <img className={"sprite"} src={sprite} alt="pokemon"/>
                </div>
            )}
            <div className={"card-info-container"}>
                <h1>{name}</h1>
                <button onClick={() => eventTrigger(name)}>Log Pokemon Data</button>
            </div>
        </div>
    );
}

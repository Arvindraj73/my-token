const ListComponent = ({ tokens }) => {

    const showData = (data) => {
        const tokenDetails = JSON.parse(data);

        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={tokenDetails.url} className="card-img-top" alt={tokenDetails.name} />
                <div className="card-body">
                    <h5 className="card-title">{tokenDetails.name}</h5>
                    <p className="card-text">{tokenDetails.by}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {tokens.map((token) => (
                <ul key={token.tokenId}>
                    {showData(token.tokenURI)}
                </ul>
            ))}
        </div>
    );
};

export default ListComponent;
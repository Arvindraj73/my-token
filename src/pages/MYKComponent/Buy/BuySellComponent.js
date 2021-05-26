import { useState } from 'react';
import { signedMTKContract } from '../../../config';
import { useHistory } from 'react-router-dom';

const BuyComponent = ({ name }) => {
    const [token, setToken] = useState();
    const history = useHistory();

    const handleBuySell = async () => {
        try {
            if (name === "Buy") {
                const tokenInWei = token * (10 ** 18);
                const bought = await signedMTKContract.buy({ value: tokenInWei.toString() })
                await bought.wait();
                alert("Tokens Bought");
                history.go(0);
            }
            else {
                const sold = await signedMTKContract.sell(token)
                await sold.wait();
                alert("Tokens Sold");
                history.go(0);
            }
        }
        catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="row">
            <div className="col">
                <form className="card" >
                    <h3 className="card-header">{name} Tokens</h3>
                    <div className="form-group card-body">
                        <label htmlFor="buyToken">{name} Token</label>
                        <input type="number" className="form-control" id="buyToken" onChange={e => setToken(e.target.value)} aria-describedby="tokenHelp" />
                        <small id="tokenHelp" className="form-text text-muted">Enter value in Ether</small>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary" onClick={handleBuySell}>{name}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BuyComponent;

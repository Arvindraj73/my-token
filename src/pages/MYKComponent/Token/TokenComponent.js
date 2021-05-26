import { useState, useEffect } from 'react';
import { MyTokenContract, TOKEN_CONTRACT_ADDRESS } from '../../../config';

const TokenComponent = () => {
    const [availableToken, setAvailableToken] = useState();
    const [totalTokenSupply, setTotalTokensSupply] = useState();
    const [amountCollected, setAmountCollected] = useState();

    useEffect(() => {
        async function getTokenDetails() {
            const token = await MyTokenContract.availableTokens();
            setAvailableToken(parseInt(token._hex)/(10**18));
            const tokenSupply = await MyTokenContract.totalTokens();
            setTotalTokensSupply(parseInt(tokenSupply._hex)/(10**18));
            const amount = await MyTokenContract.contractBalance(TOKEN_CONTRACT_ADDRESS);
            setAmountCollected(parseInt(amount._hex)/(10**18));
        }
        getTokenDetails();
    });

    return (
        <div className='row'>
            <div className='col sm-6'>
                <div className='card'>
                    <div className='card-body'>
                        <h2>Token Address {TOKEN_CONTRACT_ADDRESS}</h2>
                        <h5>Available Tokens {availableToken}</h5>
                        <h5>Total Token Supply {totalTokenSupply} ethers</h5>
                        <h5>Amount Collected {amountCollected} ethers</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenComponent;
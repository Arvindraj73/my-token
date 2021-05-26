import { useState, useEffect } from 'react';
import { getAccount } from '../../metamaskConnection';
import { MyTokenContract, NftContract } from '../../config';

const ProfileComponent = ({ tokenType }) => {
    const [token, setToken] = useState();
    const [account, setAccount] = useState();

    useEffect(() => {
        async function loadAccount() {
            try {
                const account = await getAccount();
                setAccount(account[0]);
                const tokenFrom = tokenType === "mtk" ? await MyTokenContract.checkBalanceTokens(account[0]) : await NftContract.balanceOf(account[0].toString());
                setToken(parseInt(tokenFrom._hex));
            }
            catch (err) {
                console.log(err);
                alert("Error");
            }
        }
        loadAccount();
    }, [tokenType])

    return (
        <div className='row'>
            <div className='col sm-6'>
                <div className='card'>
                    <div className='card-body'>
                        {/* Address of user */}
                        <h2>Your Address {account}</h2>
                        {/* Token count of user */}
                        <h5>Your Tokens {tokenType==="mtk"?token / (10**18): token}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
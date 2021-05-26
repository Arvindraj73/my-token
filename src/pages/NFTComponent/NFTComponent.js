import { useState, useEffect } from 'react';
import ListComponent from './List/ListComponent';
import CreateNftComponent from './create/CreateNftComponent';
import ProfileComponent from '../../components/Profile/ProfileComponent';
import { getAccount } from '../../metamaskConnection';
import { NftContract } from '../../config';

const NFTComponent = () => {

    const [toggleTokens, setToggleTokens] = useState(false);
    const [toggleCreateNft, setToggleCreateNft] = useState(false);
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        async function getTokenDetails() {
            tokens.length = 0;
            const account = await getAccount();
            if (toggleTokens) {
                const tokenCount = await NftContract.balanceOf(account[0]);
                for (let index = 0; index < tokenCount; index++) {
                    const token = await NftContract.tokenOfOwnerByIndex(account[0], index);
                    const tokenURI = await NftContract.tokenURI(parseInt(token));
                    setTokens(tokens => [...tokens, {
                        tokenId: parseInt(token),
                        tokenURI: tokenURI
                    }]);
                }
            }
            else {
                const tokenCount = await NftContract.totalSupply();
                for (let index = 0; index < tokenCount; index++) {
                    const token = await NftContract.tokenByIndex(index);
                    const tokenURI = await NftContract.tokenURI(parseInt(token));
                    setTokens(tokens => [...tokens, {
                        tokenId: parseInt(token),
                        tokenURI: tokenURI
                    }]);
                }
            }
        }
        getTokenDetails();
    }, [toggleTokens]);

    const toggleTokensList = (event) => {
        setToggleTokens(event.target.checked);
    };

    const toggleCreateLayout = () => {
        toggleCreateNft ? setToggleCreateNft(false) : setToggleCreateNft(true);
    }

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                        {/* User details */}
                        <ProfileComponent tokenType="nft" />
                    </div>
                    <div className="p-2 bd-highlight align-self-center">
                        {/* to toggle create layout */}
                        <button className="btn btn-primary" onClick={toggleCreateLayout}>{toggleCreateNft ? "Cancel" : "Create NFT"}</button>
                    </div>
                </div>
            </div>

            {toggleCreateNft ||
                <div className="row">
                    {/* toggle between user's tokens and all tokens */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={toggleTokensList} id="myTokens"/>
                        <label className="form-check-label" htmlFor="myTokens">
                            Show your tokens
                    </label>
                    </div>
                    {/* list tokens */}
                    <ListComponent tokens={tokens}/>
                </div>
            }
            {/* Component to create nft on button click */}
            {toggleCreateNft &&
                <div className="row">
                    <CreateNftComponent />
                </div>
            }
        </div>
    );
};

export default NFTComponent;

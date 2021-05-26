import { useForm } from 'react-hook-form';
import { signedNFTContract } from '../../../config';
import { getAccount } from '../../../metamaskConnection';
import { useHistory } from 'react-router-dom';

const CreateNftComponent = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const createNftToken = async (data) => {
            const account = await getAccount()
            const createdToken = await signedNFTContract.createToken(account[0], JSON.stringify(data));
            await createdToken.wait();
            history.go(0);
    };

    return (
        <div>
            <form className="card" >
                <h3 className="card-header">Create NFT Token</h3>
                <div className="form-group card-body">
                    <label htmlFor="assetName">Asset Name</label>
                    <input type="text" placeholder="Name of your asset"  {...register('name')} className="form-control" id="assetName" />
                    <br />
                    {/* <div className="d-flex bd-highlight"> */}
                    {/* <div className="p-2 flex-grow-1 bd-highlight align-self-center"> */}
                    <label htmlFor="assetUrl">Asset Url</label>
                    <input type="text" className="form-control" {...register('url')} id="assetUrl" placeholder="Url of your image" aria-describedby="assetUrl"/>
                    <small id="assetUrl" className="form-text text-muted">Suggested site to upload url <a href="https://pinata.cloud" >Pinata</a></small>
                    <br />
                    {/* <center><h5> Or </h5></center>
                    <br /> */}
                    {/* </div> */}
                    {/* <div className="p-2 bd-highlight align-self-center">Or</div>
                        <div className="p-2 bd-highlight align-self-center">
                            <button type="button" className="btn btn-primary" >Upload Image in IPFS</button>
                        </div> */}
                    {/* </div> */}
                    {/* <div className="card">
                        <h4 className="card-header" >Upload Image in IPFS</h4>

                        <div className="card-body mb-3">
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary" >Upload</button>
                        </div>
                    </div>
                    <br /> */}
                    <label htmlFor="assetBy">Asset By</label>
                    <input type="text" placeholder="Name of creator" {...register('by')} className="form-control" id="assetBy" />
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit(createNftToken)}>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateNftComponent;

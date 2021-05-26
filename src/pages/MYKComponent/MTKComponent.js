import BuySellComponent from './Buy/BuySellComponent'
import TokenComponent from './Token/TokenComponent'
import ProfileComponent from '../../components/Profile/ProfileComponent'

const MTKComponent = () => {
    return (
        <div>
            <TokenComponent />
            <ProfileComponent tokenType="mtk"/>
            <div className="row">
                <div className="col col-sm-6">
                    <BuySellComponent name="Buy" />
                </div>
                <div className="col col-sm-6">
                    <BuySellComponent name="Sell" />
                </div>
            </div>
        </div>
    );
};

export default MTKComponent;
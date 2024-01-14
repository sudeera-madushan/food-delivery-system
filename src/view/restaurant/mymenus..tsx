/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
import MenuCard from "../../components/card/restaurant/menucard..tsx";

function MyMenus() : JSX.Element {

    return (
        <section>
            <section className={'flex flex-col gap-5 items-center justify-center my-10'}>
                <MenuCard name={'French Rise'} rate={4} address={'1100LKR'} body={
                    <div>dfdf</div>
                }></MenuCard>
            </section>
        </section>
    );
}
export default MyMenus;

import CircularProgress from "@mui/material/CircularProgress";

function OrderRoute() : JSX.Element{
    return (
        <section>
            <div className={'w-[50vw]'}></div>
            <div className={'w-[50vw] p-5'}>
                <div className={''}>
                    <CircularProgress />
                </div>
            </div>
        </section>
    )
}
export default OrderRoute;
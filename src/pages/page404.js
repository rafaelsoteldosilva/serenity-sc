import React, { useEffect } from "react"
import { GlobalStateContext } from "../globals/globalContextProvider"
import * as globalConstants from "../globals/globalConstants"

const Page404 = () => {
    const { globalDispatch } = React.useContext(GlobalStateContext)

    useEffect(() => {
        globalDispatch({
            type: globalConstants.setCurrentComponent,
            currentComponent: "none",
        })
        globalDispatch({ type: globalConstants.notFirstTimeInApp })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div
            style={{
                paddingTop: "10rem",
                paddingLeft: "10rem",
                fontSize: "4rem",
            }}
        >
            <h3>Sorry, there's nothing here</h3>
        </div>
    )
}

export default Page404

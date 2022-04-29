import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

import threeDMax from "../assets/3D_max.png"
import blender from "../assets/blender.png"
import maya from "../assets/Maya.png"
import unity from "../assets/Unity.png"
import unreal from "../assets/Unreal-engine.png"
import { GlobalStateContext } from "../globals/globalContextProvider"

const BottomStripe = styled.div`
    display: ${({ firstTimeInApp }) => (firstTimeInApp ? "none" : "flex")};
    position: fixed;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.blackColor};
    height: 4em;
    width: 100%;
    z-index: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ShowIcon = styled.div`
    font-size: 8px;
`

const ShowImage = styled.img`
    margin-left: 0.2em;
    margin-right: 0.2em;
    width: 4em;

    @media ${({ theme }) => theme.currentDevice.mobileL} {
        width: 5em;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
    @media ${({ theme }) => theme.currentDevice.tablet} {
        margin-left: 1em;
        margin-right: 1em;
    }
`

const ShowBottomStripe = () => {
    const { globalState } = React.useContext(GlobalStateContext)

    return (
        <BottomStripe firstTimeInApp={globalState.firstTimeInApp}>
            <ShowIcon>
                <FontAwesomeIcon icon={faCircle} />
            </ShowIcon>
            <ShowImage src={threeDMax} />
            <ShowImage src={blender} />
            <ShowImage src={maya} />
            <ShowImage src={unity} />
            <ShowImage src={unreal} />
            <ShowIcon>
                <FontAwesomeIcon icon={faCircle} />
            </ShowIcon>
        </BottomStripe>
    )
}

export default ShowBottomStripe

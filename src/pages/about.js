import React, { useEffect } from "react"
import * as globalConstants from "../globals/globalConstants"
import { BackgroundText } from "../globals/globalStyles"
import styled from "styled-components"

import viking from "../assets/viking.jpg"

import { GlobalStateContext } from "../globals/globalContextProvider"

const ContentContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    margin-top: 4em;

    @media ${({ theme }) => theme.currentDevice.tablet} {
        flex-direction: row;
        justify-content: center;
        margin-top: 10em;
    }
`

const InfoBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 2em;
`

const InfoBlockTitle = styled.p`
    color: ${({ theme }) => theme.colors.whiteColor};
    pointer-events: none;
    font-weight: bold;
    font-size: 0.8rem;
    @media ${({ theme }) => theme.currentDevice.tablet} {
        font-size: 1rem;
    }
    @media ${({ theme }) => theme.currentDevice.laptop} {
        font-size: 1.5rem;
    }
`

const InfoBlockText = styled.p`
    color: ${({ theme }) => theme.colors.lightGrayColor};
    margin-top: 0.1em;
    pointer-events: none;
    font-size: 0.8rem;
    @media ${({ theme }) => theme.currentDevice.laptop} {
        font-size: 1rem;
    }
`

const ShowImage = styled.img`
    display: block;
    width: 20%;
    margin-top: 1em;
    margin-right: 2em;
    margin-bottom: 2em;
    max-width: 250px;
    @media ${({ theme }) => theme.currentDevice.laptop} {
        margin-left: 20px;
    }
`

const About = () => {
    const { globalDispatch } = React.useContext(GlobalStateContext)

    useEffect(() => {
        globalDispatch({
            type: globalConstants.setCurrentComponent,
            currentComponent: globalConstants.aboutUsPath,
        })
        globalDispatch({ type: globalConstants.notFirstTimeInApp })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        //
        <React.Fragment>
            <BackgroundText>ABOUT US</BackgroundText>
            <ContentContainer>
                <InfoBlockContainer>
                    <InfoBlockTitle>
                        Lorem Ipsum Dolor sit amet, consectetur adipiscing
                    </InfoBlockTitle>
                    <InfoBlockText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga
                    </InfoBlockText>
                </InfoBlockContainer>
                <InfoBlockContainer>
                    <InfoBlockTitle>
                        Lorem Ipsum Dolor sit amet, consectetur adipiscing
                    </InfoBlockTitle>
                    <InfoBlockText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga
                    </InfoBlockText>
                </InfoBlockContainer>
                <ShowImage src={viking} alt="viking Back" />
            </ContentContainer>
        </React.Fragment>
    )
}

export default About

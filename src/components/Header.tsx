/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from "react";
import { Language } from "../entities/Language";
import { dropShadow, fadeIn, fadeOut } from "../styles/effects";
import { hashHistory } from "../uitls/hashHistory";
import { useEffect, useState } from "react";

export interface Props {
  pathname: string;
  language: Language;
}

const Header: React.FC<Props> = props => {

  const [showNav, setShowNav] = useState<boolean>( props.pathname.includes( "/wizard" ) );

  useEffect( () => {
    if( props.pathname.includes( "/wizard" ) ) {
      setShowNav( true );
    }
    else {
      setShowNav( false );
    }
  }, [location.hash] );

  return (
    <div css={theme => (
      [
        {
          position: "fixed",
          zIndex: 1000,
          top: 0,
          backgroundColor: theme.COLORS.HEADER_BACKGROUND,
          height: location.hash === "#/"
            ? theme.DIMENSIONS.HEADER.DASHBOARD_HEIGHT
            : theme.DIMENSIONS.HEADER.WIZARD_HEIGHT,
          width: "100%",

          transition: "height 0.5s ease-in-out",
          display: "flex",
          justifyContent: "space-between"
        },
        dropShadow
      ]
    )}>
      <div css={theme => ([{
        marginLeft: "5%",
        display: "flex",
        height: "100%",
        alignItems: "center",
      }])}>

        <img src="img/bayern_innovativ_logo.png" css={theme => (
          [
            {
              height: props.pathname === "/" ? "3.6vw" : "2vw",
              transition: "height 0.5s ease-in-out"
            }
          ]
        )} alt="ZDB Logo"/>
        <div css={theme => ([{
          height: props.pathname === "/" ? "102px" : "32px",
          width: "1px",
          backgroundColor: theme.COLORS.INACTIVE,
          margin: "0 20px",
          transition: "height 0.5s ease-in-out"
        }])}/>
        <h1 css={theme => (
          [
            {
              fontSize: props.pathname === "/" ? "2vw" : "1.2vw",
              transition: "font-size 0.5s ease-in-out",
              fontFamily: "Helvetica",
              color: theme.COLORS.PRIMARY.DEFAULT
            }
          ]
        )}>Data Process Modeler</h1>
      </div>

      {showNav && (
        <nav css={theme => (
          [
            {
              marginRight: "5%",
              display: "flex",
              height: theme.DIMENSIONS.HEADER.WIZARD_HEIGHT,
              alignItems: "center",
              a: {
                textDecoration: "none",
                fontSize: "1vw",
                fontFamily: "Helvetica"
              },
            },
            props.pathname.includes( "/wizard" ) ? fadeIn : fadeOut
          ]
        )}>
          <a css={theme => ([{
            color: props.pathname === "/" ? theme.COLORS.PRIMARY.DEFAULT : theme.COLORS.INACTIVE,
            cursor: "pointer"
          }])}
             onClick={() => {
               hashHistory.push( "/" )
             }}>{props.language.HEADER.LABEL_DASHBOARD}</a>
        </nav>)
      }
    </div>
  )

};

export { Header };
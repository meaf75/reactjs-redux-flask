import { Accordion, AccordionDetails, AccordionSummary, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { IMatchResult } from "../molecules/MatchComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: 'rgba(76, 11, 11, .78)',
        color: 'white',
        borderWidth: '1px 5px 1px 5px',
        borderStyle: 'solid',
        borderColor: 'rgb(255, 117, 117, .33)',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    team_img: {
        height: 40,
        width: 40
    },
    accordion_header: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '5vw'
    }
  }),
);

export interface IAccordionMatchElementsProps {
    matchResults: IMatchResult[];
}

export const AccordionMatchElements = (props: IAccordionMatchElementsProps) => {

    const classes = useStyles();

    const accordionElements = props.matchResults.map((m,i) => {
        return (
            <Accordion key={`team-${i}`} className={classes.root}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <div className={classes.accordion_header}>
                        <img src={m.team1.img} className={classes.team_img}/>
                        <span>{m.resultTeam1} : {m.resultTeam2}</span>
                        <img src={m.team2.img} className={classes.team_img}/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    })

    return (
        <>
            {accordionElements}
        </>
    )
}
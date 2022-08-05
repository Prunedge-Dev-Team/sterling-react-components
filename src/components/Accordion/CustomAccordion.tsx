import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
// import { ReactComponent as ExpandMoreIcon } from '../../assets/svgs/ExpandMoreIcon.svg'

interface IAccordionProps {
  accordionSummary: string;
  accordionDetails: any;
  idx: number; // the position of the accordion that will serve as an identifier starting from 0
}

export default function CustomAccordion(props: IAccordionProps) {
  const { accordionDetails, accordionSummary, idx } = props;

  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      <StyledAccordion
        expanded={expanded === `panel${idx}`}
        onChange={handleAccordionChange(`panel${idx}`)}
      >
        <StyledAccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5" color="text.secondary">
            {accordionSummary}
          </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>{accordionDetails}</StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: "#FAFAFA",
  marginBottom: "1rem",
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  background: "rgba(170, 170, 170, 0.07)",
  borderWidth: "0px 0px 0px 4px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
}));

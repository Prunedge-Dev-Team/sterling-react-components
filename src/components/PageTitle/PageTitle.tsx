import React from "react";

import { Divider, styled, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Stack from "@mui/material/Stack";
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";
import theme from "../theme";

interface IAdminTitlePageProps {
  pageTitle: string;
  current?: string;
  historyStack?: { title: string; to: string }[];
}

function PageTitle({ pageTitle, current, historyStack }: IAdminTitlePageProps) {
  return (
    <Router>
      <Stack mb={6}>
        <Typography variant="h3" color="text.title">
          {pageTitle}
        </Typography>
        {current && (
          <Divider
            sx={{
              padding: `${theme.spacing(0.8, 0)}`,
              marginBottom: `${theme.spacing(1)}`,
            }}
          />
        )}
        <Stack direction="row" spacing={1}>
          {current && <NavigateBeforeIcon color="inherit" />}
          <StyledBreadcrumbs separator="/" aria-label="breadcrumb">
            {historyStack?.map((stack) => (
              <Link
                component={RouterLink}
                to={stack.to}
                underline="none"
                key={stack.title}
              >
                {stack.title}
              </Link>
            ))}
            <Typography className="title" color="text.secondary">
              {current}
            </Typography>
          </StyledBreadcrumbs>
        </Stack>
      </Stack>
    </Router>
  );
}

export default PageTitle;

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-separator": {
    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.body1,
      color: "#8F8F8F",
    },
  },

  "& .MuiBreadcrumbs-li": {
    "& .MuiLink-root": {
      fontSize: theme.typography.body2,
      fontWeight: 700,
      color: "#8F8F8F",
    },

    "& .MuiTypography-body1.title": {
      fontWeight: 700,
      fontSize: theme.typography.body2,
      color: "text.secondary",
    },
  },
}));

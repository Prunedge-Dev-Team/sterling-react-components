import { Box, IconButton, Stack, Typography } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import React from "react";
import { Visibility } from "@mui/icons-material";
import { ReactComponent as FileIcon } from "../../assets/svgs/FileIcon.svg";

import theme from "../theme";

type Props = {
  file: {
    name: string;
    type: string;
    url?: any;
  };
  metaData?: {
    datePublished: string;
    author: string;
  };
  rightContent?: JSX.Element;
  fileInformation?: JSX.Element;
  limitInformationToSize?: boolean;
  hideDownLoad?: boolean;
  previewOnly?: boolean;
};
const FilePreview: React.FC<Props> = ({
  file,
  metaData,
  rightContent,
  fileInformation,
  limitInformationToSize,
  hideDownLoad = false,
  previewOnly = false,
  ...props
}: Props) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = file.url && file.url;
    link.setAttribute("target", "_blank");
    link.setAttribute("download", file?.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePreview = (file: any) => () => {
    if (!file?.url) return window.open(URL.createObjectURL(file));

    window.open(file?.url);
  };

  const renderRightContent = () => {
    return rightContent !== undefined ? (
      rightContent
    ) : (
      <>
        {!hideDownLoad && (
          <IconButton sx={{ padding: 0, color: "grey" }} onClick={downloadFile}>
            <SaveAltIcon />
          </IconButton>
        )}
        {previewOnly && (
          <IconButton sx={{ padding: "0px" }} onClick={handlePreview(file)}>
            <Visibility sx={{ marginRight: "16px", fontSize: "24px" }} />
          </IconButton>
        )}
      </>
    );
  };

  // const getFileType = (): string => {
  //   return file?.type?.split('/')?.splice(-1)?.join() //type;
  // }

  return (
    <Stack
      direction="row"
      maxWidth={1000}
      p={2}
      px={2}
      spacing={4}
      sx={{
        border: "solid 1px #CDCED9",
        borderRadius: "10px",
        background: theme.palette.common.white,
      }}
    >
      <Stack direction="row" spacing={2}>
        <FileIcon />
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{ fontWeight: "bold" }}
          alignSelf="center"
        >
          {file?.name}
        </Typography>
      </Stack>
      <Box>{renderRightContent()}</Box>
    </Stack>
  );
};

export default React.memo(FilePreview);

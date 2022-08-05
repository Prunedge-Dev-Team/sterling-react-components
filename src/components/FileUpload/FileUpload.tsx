import React, { useMemo, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Delete, Visibility } from "@mui/icons-material";
import { ReactComponent as UploadIcon } from "../../assets/svgs/UploadIcon.svg";

import FilePreview from "./FilePreview";
import theme from "../theme";

/**
 * Default File Upload Reusable Component
 * Has an empty and non empty state which is controlled by passing a file to it
 * This component currently supports only single file upload
 */
type file = {
  name: string;
  type: string;
  url: string;
};

interface IFileUploadProps {
  onChange: (files: file[]) => void;
  accept?: string;
  files?: file[];
  showPreview?: boolean;
  multiple?: boolean;
  onRemove?: (file: file) => void;
  showTop?: boolean;
  icon?: JSX.Element;
  onNameFile?: (file: file) => void;
  canRename?: boolean;
  iref: any;
}
const FileUpload: React.FC<IFileUploadProps> = React.forwardRef(
  ({
    files: filesFromProps,
    multiple = false,
    onChange,
    accept,
    showPreview = false,
    onRemove,
    showTop = false,
    icon,
    onNameFile,
    canRename = false,
    iref,
    ...rest
  }) => {
    const [filesFromState, setFilesFromState] = useState<file[]>();

    const files = useMemo(() => {
      return filesFromProps !== undefined ? filesFromProps : filesFromState;
    }, [filesFromProps, filesFromState]);

    const showFileUpload = useMemo(() => {
      return !(!multiple && files?.length !== 0);
    }, [multiple, files]);

    const handleUpload = (newFiles: file[]) => {
      setFilesFromState(newFiles);
      onChange?.(newFiles);
    };

    const handleRemoveFile = (index: number, file: file) => () => {
      onRemove?.(file);
      const newFiles = files!.filter((_file, i) => i !== index);
      handleUpload(newFiles);
    };

    const handlePenClick = (file: file) => () => {
      onNameFile?.(file);
    };

    const handlePreview = (file: any) => () => {
      if (!file?.url && file) return window.open(URL.createObjectURL(file));
      window.open(file?.url);
    };

    const renderRightContent = (index: number, file: file) => {
      return (
        <Box display="flex" justifyContent="flex-end">
          {showPreview && (
            <IconButton size="small" onClick={handlePreview(file)}>
              <Visibility />
            </IconButton>
          )}
          <IconButton onClick={handleRemoveFile(index, file)}>
            <Delete sx={{ color: "#EB5757" }} />
          </IconButton>
          {canRename && (
            <IconButton
              style={{ padding: 0, marginLeft: "16px" }}
              onClick={handlePenClick(file)}
            >
              <EditOutlinedIcon sx={{ color: "#6B6C7E" }} />
            </IconButton>
          )}
        </Box>
      );
    };

    return (
      <Box>
        {showTop &&
          files?.map((file, index) => (
            <Box mt={4} mb={showTop ? 4 : 0}>
              <FilePreview
                key={index}
                file={{
                  name: file?.name,
                  type: file?.type,
                }}
                limitInformationToSize={true}
                rightContent={renderRightContent(index, file)}
              />
            </Box>
          ))}
        {showFileUpload && (
          <Box
            textAlign="center"
            border="solid 1px #CDCED9"
            borderRadius="10px"
            p={2}
            px={9}
            height="max-content"
            position="relative"
            sx={{
              background: theme.palette.common.white,
            }}
          >
            <input
              type="file"
              id="avatar"
              name="avatar"
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 99,
              }}
              multiple={multiple}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // @ts-ignore
                const newFileArray = [...Array.from(e.target?.files), ...files];
                handleUpload(newFileArray);
              }}
              accept={accept}
              ref={iref}
              {...rest}
            />
            <Stack direction="row" spacing={1}>
              <Box>{!icon ? <UploadIcon /> : icon}</Box>
              <Box component="span">
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Click to upload
                  <Typography variant="body2" color="text.secondary">
                    or drag and drop .pdf
                  </Typography>
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
        {!showTop &&
          files?.map((file, index) => (
            <Box>
              <FilePreview
                key={index}
                file={{
                  name: file?.name,
                  type: file?.type,
                }}
                limitInformationToSize={true}
                rightContent={renderRightContent(index, file)}
              />
            </Box>
          ))}
      </Box>
    );
  }
);

interface FileUploadProps extends React.HTMLAttributes<HTMLInputElement> {
  file?: file;
  files?: file[];
  onChange: (files: any) => void;
  multiple?: boolean;
  iref: any;
}
const FileUploadProxy: React.FC<FileUploadProps> = ({
  file,
  files: filesFromProps,
  onChange,
  multiple = false,
  iref,
  ...rest
}: FileUploadProps) => {
  let files = useMemo(() => {
    if (file !== undefined) {
      return file === null ? [] : [file];
    }
    return filesFromProps;
  }, [file, filesFromProps]);

  const handleChange = (files: file[]) => {
    if (!multiple) {
      files?.length === 0 ? onChange(null) : onChange(files?.[0]);
      return;
    }

    onChange(files);
  };

  return (
    <FileUpload
      multiple={multiple}
      onChange={handleChange}
      files={files}
      iref={iref}
      {...rest}
    />
  );
};
export default FileUploadProxy;

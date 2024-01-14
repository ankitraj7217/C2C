import React, { useState } from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import "./GenerateWebRoom.scss";

const GenerateWebRoom = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const copyToClipboard = () => {
        // this part has to be modified with useState and useEffect
        navigator.clipboard.writeText("abc-def-ghij");
    };

    return (
        <div className="generate-web-room">
            <Button variant="contained" onClick={() => setIsModalOpen(true)}>Genrate New Room Link</Button>

            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="generate-web-room-modal"
                >
                    <Box className="generate-web-room-modal-box">
                        <IconButton
                            aria-label="close"
                            onClick={() => setIsModalOpen(false)}
                            sx={{ position: "absolute", right: 8, top: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box className="generate-web-room-modal-box-details">
                            <Typography variant="body1">
                                abc-def-ghij
                            </Typography>
                            <IconButton
                                aria-label="copy"
                                onClick={copyToClipboard}
                                sx={{ display: "inline-block", ml: 1 }}
                            >
                                <FileCopyIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Modal>
            )}
        </div>
    )
}

export default GenerateWebRoom;
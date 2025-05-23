import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ's" subtitle={"Frequently Asked Questions Page"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I approve or reject a visitor pre-registration?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to the "Pre-Registrations" tab, select a visitor entry, and
            click Approve or Reject. You can also send a custom message to the
            visitor during this process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I view or export the visitor log?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to the Visitor Logs section. Use filters to search by date, host,
            or purpose. Click the Export button to download the log as CSV or
            PDF.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add or remove hosts/employees?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Under Host Management, you can add new hosts by entering their
            details or remove users with one click. Only admins have permission
            to manage host records.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the check-in fields or badge layout?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. Visit Settings. Check-in Configuration to enable/disable fields
            like phone number or photo. Badge layout can be modified under Badge
            Settings.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I configure notifications for hosts or visitors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In Notification Settings, choose how and when hosts are notified
            (e.g., SMS, Email). You can also customize automated messages sent
            to visitors.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What should I do if a kiosk/tablet stops working?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Check Wi-Fi and power connections first. If the issue persists, use
            the Device Management section to reset or reassign the device.
            Contact IT support if needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

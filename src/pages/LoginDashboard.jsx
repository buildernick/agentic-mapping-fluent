import React from "react";
import {
  makeStyles,
  tokens,
  Button,
  Card,
  CardHeader,
  Image,
  SearchBox,
  Text,
  Title1,
  Title2,
  Title3,
  Body1,
  Badge,
  Avatar,
  AvatarGroup,
  Divider,
} from "@fluentui/react-components";
import {
  Search20Regular,
  ChevronDown12Regular,
  People20Regular,
  Document20Regular,
  Share20Regular,
  Heart20Regular,
  Add20Regular,
  ChevronDown20Regular,
  ArrowUpload20Regular,
  Grid20Filled,
  List20Regular,
  Filter20Regular,
  Location20Regular,
  Person20Regular,
  Building20Regular,
  Calendar20Regular,
  Mail20Regular,
  CheckboxChecked20Regular,
  ArrowReply20Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    minHeight: "100vh",
    paddingTop: "32px",
    overflow: "hidden",
  },
  header: {
    width: "100%",
    backgroundColor: "#F0F0F0",
  },
  headerFootprint: {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    backgroundColor: "#F0F0F0",
  },
  leftControls: {
    display: "flex",
    alignItems: "start",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    color: "#D83B01",
    fontWeight: "600",
    whiteSpace: "nowrap",
    lineHeight: "1",
    justifyContent: "start",
  },
  logoImage: {
    aspectRatio: "1.42",
    objectFit: "contain",
    objectPosition: "center",
    width: "68px",
    flexShrink: "0",
  },
  appLabel: {
    color: "#D83B01",
    alignSelf: "stretch",
    minHeight: "48px",
    paddingRight: "8px",
    paddingBottom: "1px",
    gap: "12px",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "0",
    width: "fit-content",
  },
  rightControls: {
    alignSelf: "end",
    display: "flex",
    width: "918px",
    maxWidth: "100%",
    alignItems: "stretch",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  searchContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    color: "#808080",
    fontWeight: "400",
    whiteSpace: "nowrap",
    lineHeight: "1",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
      whiteSpace: "initial",
    },
  },
  searchBox: {
    width: "100%",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
  searchContent: {
    alignItems: "start",
    borderRadius: "4px",
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
    display: "flex",
    width: "100%",
    paddingTop: "6px",
    paddingBottom: "6px",
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  profileSection: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    aspectRatio: "4",
    alignItems: "start",
    justifyContent: "start",
  },
  profileBg: {
    position: "absolute",
    inset: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  profileAvatar: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "32px",
  },
  bottomDivider: {
    display: "flex",
    flexShrink: "0",
    height: "1px",
    backgroundColor: "#EBEBEB",
  },
  mainContent: {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  sidebar: {
    minHeight: "852px",
    "@media (max-width: 991px)": {
      display: "none",
    },
  },
  sidebarContent: {
    display: "flex",
    width: "68px",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "start",
    flex: "1",
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    aspectRatio: "1.214",
    width: "100%",
    overflow: "hidden",
  },
  sidebarItemBg: {
    position: "absolute",
    inset: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  sidebarHover: {
    position: "relative",
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexShrink: "0",
    height: "56px",
  },
  sidebarDivider: {
    display: "flex",
    width: "36px",
    paddingTop: "1px",
    paddingBottom: "1px",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  sidebarDividerLine: {
    display: "flex",
    flexShrink: "0",
    height: "1px",
    backgroundColor: "#E0E0E0",
  },
  contentArea: {
    justifyContent: "center",
    alignItems: "stretch",
    boxShadow:
      "0px 4px 8px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
    display: "flex",
    paddingLeft: "64px",
    paddingRight: "64px",
    paddingTop: "48px",
    flexDirection: "column",
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "0",
    width: "fit-content",
    backgroundColor: "#FAFAFA",
    "@media (max-width: 991px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  mainContentContainer: {
    minHeight: "1628px",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: "1170px",
  },
  pageHeader: {
    display: "flex",
    width: "100%",
    alignItems: "start",
    gap: "40px 100px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    color: "#242424",
    fontWeight: "600",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  greeting: {
    fontSize: "20px",
    lineHeight: "1.3",
    width: "277px",
  },
  installButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid var(--Colors-Neutral-Grey-82, #D1D1D1)",
    backgroundColor: "#FFF",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "6px",
    paddingBottom: "6px",
    gap: "4px",
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "1",
  },
  installText: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    gap: "6px",
  },
  suggestedActions: {
    display: "flex",
    marginTop: "32px",
    minHeight: "294px",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  sectionHeader: {
    display: "flex",
    minHeight: "32px",
    width: "100%",
    alignItems: "center",
    gap: "8px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "16px",
    color: "#242424",
    fontWeight: "600",
    lineHeight: "1",
    justifyContent: "start",
    flexWrap: "wrap",
  },
  sectionTitle: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    flex: "1",
    flexShrink: "1",
    flexBasis: "0%",
  },
  cardsContainer: {
    display: "flex",
    marginTop: "12px",
    width: "100%",
    alignItems: "start",
    gap: "20px",
    justifyContent: "start",
    flex: "1",
    flexWrap: "wrap",
    height: "100%",
  },
  actionCard: {
    alignItems: "start",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
    backgroundColor: "#FFF",
    display: "flex",
    minWidth: "240px",
    flexDirection: "column",
    overflow: "hidden",
    width: "302px",
    justifyContent: "start",
    flexGrow: "1",
    flexShrink: "1",
  },
  cardHeader: {
    display: "flex",
    minHeight: "62px",
    width: "100%",
    maxWidth: "404px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
    alignItems: "center",
    gap: "12px",
    justifyContent: "center",
  },
  cardIcon: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "end",
    gap: "12px",
    justifyContent: "start",
    width: "32px",
  },
  cardContent: {
    alignSelf: "stretch",
    display: "flex",
    minWidth: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "column",
    alignItems: "start",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    justifyContent: "center",
    width: "304px",
  },
  cardTitle: {
    gap: "4px",
    fontSize: "14px",
    color: "#242424",
    fontWeight: "600",
    lineHeight: "1",
  },
  cardSubtitle: {
    alignSelf: "stretch",
    gap: "5px",
    fontSize: "12px",
    color: "#616161",
    fontWeight: "400",
    lineHeight: "1",
  },
  meetingPreview: {
    borderRadius: "4px",
    alignSelf: "stretch",
    display: "flex",
    minHeight: "132px",
    width: "100%",
    alignItems: "start",
    gap: "1px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontWeight: "400",
    justifyContent: "start",
  },
  meetingContainer: {
    minWidth: "240px",
    width: "377px",
  },
  meetingContent: {
    display: "flex",
    paddingRight: "75px",
    alignItems: "stretch",
    backgroundColor: "#F4F4FC",
    "@media (max-width: 991px)": {
      paddingRight: "20px",
    },
  },
  meetingInfo: {
    alignSelf: "start",
    zIndex: "10",
    marginRight: "-402px",
    width: "100%",
  },
  meetingDetails: {
    display: "flex",
    width: "100%",
    paddingLeft: "24px",
    paddingTop: "8px",
    flexDirection: "column",
    alignItems: "start",
    fontSize: "14px",
    color: "#616161",
    justifyContent: "start",
    "@media (max-width: 991px)": {
      paddingLeft: "20px",
    },
  },
  meetingTitle: {
    color: "#6264A7",
    alignSelf: "stretch",
    width: "336px",
    minHeight: "24px",
    maxWidth: "100%",
    gap: "4px",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1",
  },
  meetingLocation: {
    display: "flex",
    width: "336px",
    maxWidth: "100%",
    alignItems: "start",
    gap: "4px",
    lineHeight: "1",
    justifyContent: "start",
  },
  meetingTime: {
    width: "336px",
    minHeight: "20px",
    maxWidth: "100%",
    gap: "5px",
    lineHeight: "1",
  },
  meetingParticipants: {
    display: "flex",
    marginTop: "12px",
    marginLeft: "12px",
    width: "350px",
    maxWidth: "100%",
    alignItems: "stretch",
    gap: "20px",
    fontSize: "12px",
    color: "#6264A7",
    whiteSpace: "nowrap",
    textAlign: "center",
    lineHeight: "1",
    justifyContent: "space-between",
    "@media (max-width: 991px)": {
      marginLeft: "10px",
      whiteSpace: "initial",
    },
  },
  peopleContainer: {
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: "2px",
    paddingRight: "2px",
    paddingTop: "2px",
    paddingBottom: "2px",
    alignItems: "center",
    gap: "4px",
    overflow: "hidden",
    justifyContent: "start",
  },
  personAvatar: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "24px",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    flexShrink: "0",
  },
  meetingAccent: {
    display: "flex",
    width: "4px",
    flexShrink: "0",
    height: "132px",
    backgroundColor: "#6264A7",
  },
  cardFooter: {
    borderRadius: "4px",
    display: "flex",
    width: "100%",
    maxWidth: "404px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
    alignItems: "center",
    gap: "40px 100px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    color: "#242424",
    fontWeight: "600",
    lineHeight: "1",
    justifyContent: "space-between",
  },
  footerButtons: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "start",
    gap: "8px",
    justifyContent: "start",
  },
  secondaryButton: {
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid var(--Colors-Neutral-Grey-82, #D1D1D1)",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "6px",
    paddingBottom: "6px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  buttonContent: {
    display: "flex",
    alignItems: "start",
    gap: "8px",
    overflow: "hidden",
    justifyContent: "start",
  },
  outlookPreview: {
    minWidth: "240px",
    width: "376px",
    paddingBottom: "12px",
  },
  outlookContent: {
    width: "298px",
    minHeight: "132px",
    paddingLeft: "24px",
    paddingRight: "12px",
    paddingTop: "19px",
    paddingBottom: "19px",
    backgroundColor: "#FAFAFA",
    "@media (max-width: 991px)": {
      paddingLeft: "20px",
    },
  },
  outlookAvatar: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "32px",
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
    zIndex: "10",
    marginTop: "-44px",
    marginLeft: "14px",
    "@media (max-width: 991px)": {
      marginLeft: "10px",
    },
  },
  wordPreview: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    aspectRatio: "3.061",
    minWidth: "240px",
    width: "404px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "88px",
    paddingBottom: "12px",
    overflow: "hidden",
    alignItems: "start",
    "@media (max-width: 991px)": {
      paddingRight: "20px",
    },
  },
  wordBg: {
    position: "absolute",
    inset: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  wordAvatar: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "32px",
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
  },
  quickAccess: {
    marginTop: "40px",
    maxWidth: "100%",
    width: "1169px",
  },
  quickAccessHeader: {
    width: "100%",
    maxWidth: "1169px",
  },
  quickAccessTitle: {
    display: "flex",
    minHeight: "32px",
    width: "100%",
    maxWidth: "1254px",
    alignItems: "start",
    gap: "10px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "16px",
    color: "#242424",
    fontWeight: "600",
    lineHeight: "1",
    justifyContent: "start",
  },
  quickAccessTitleText: {
    alignSelf: "stretch",
    minWidth: "240px",
    minHeight: "32px",
    width: "1100px",
    gap: "8px",
  },
  pillsContainer: {
    display: "flex",
    marginTop: "12px",
    width: "100%",
    maxWidth: "1168px",
    alignItems: "center",
    gap: "40px 127px",
    justifyContent: "start",
    flexWrap: "wrap",
  },
  pillsGroup: {
    alignSelf: "stretch",
    display: "flex",
    minWidth: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: "8px",
    overflow: "hidden",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    color: "#242424",
    fontWeight: "400",
    lineHeight: "1",
    justifyContent: "start",
    flexWrap: "wrap",
  },
  pill: {
    alignItems: "center",
    borderRadius: "20px",
    border: "1px solid var(--Neutral-Light-Grey-88, #E0E0E0)",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    minHeight: "32px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "6px",
    paddingBottom: "6px",
    gap: "4px",
    overflow: "hidden",
    justifyContent: "start",
    backgroundColor: "#F0F0F0",
  },
  pillSelected: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    minHeight: "32px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "6px",
    paddingBottom: "6px",
    gap: "4px",
    overflow: "hidden",
    color: "#FFF",
    fontWeight: "600",
    backgroundColor: "#616161",
  },
  pillIcon: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "20px",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    flexShrink: "0",
  },
  pillText: {
    color: "#242424",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  pillTextSelected: {
    color: "#FFF",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  rightControls2: {
    alignSelf: "stretch",
    display: "flex",
    minWidth: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: "12px",
    justifyContent: "end",
    flexWrap: "wrap",
    flex: "1",
    flexShrink: "1",
    flexBasis: "0%",
  },
  uploadSection: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: "6px",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    color: "#424242",
    fontWeight: "600",
    whiteSpace: "nowrap",
    textAlign: "right",
    lineHeight: "1",
    justifyContent: "center",
  },
  uploadText: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  rightControlsEnd: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: "10px",
    justifyContent: "end",
  },
  dividerVertical: {
    borderColor: "rgba(209, 209, 209, 1)",
    borderStyle: "solid",
    borderWidth: "1px",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    width: "0px",
    flexShrink: "0",
    height: "20px",
    backgroundColor: "#D1D1D1",
  },
  viewToggle: {
    aspectRatio: "2",
    objectFit: "contain",
    objectPosition: "center",
    width: "64px",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    minHeight: "32px",
    flexShrink: "0",
  },
  addContentView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px dashed var(--Colors-Neutral-Grey-82, #D1D1D1)",
    display: "flex",
    marginTop: "20px",
    width: "100%",
    maxWidth: "1169px",
    paddingLeft: "335px",
    paddingRight: "334px",
    paddingTop: "48px",
    paddingBottom: "48px",
    flexDirection: "column",
    fontFamily: "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
    "@media (max-width: 991px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  addContentInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  addContentTitle: {
    color: "#242424",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1",
  },
  addContentSubtitle: {
    color: "#424242",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1",
    marginTop: "4px",
  },
  filterPills: {
    display: "flex",
    marginTop: "32px",
    alignItems: "start",
    gap: "8px",
    fontSize: "14px",
    color: "#242424",
    fontWeight: "400",
    lineHeight: "1",
    justifyContent: "start",
    flexWrap: "wrap",
  },
  filterPill: {
    alignItems: "center",
    borderRadius: "20px",
    border: "1px solid var(--Neutral-Light-Grey-88, #E0E0E0)",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "6px",
    paddingBottom: "6px",
    gap: "4px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    justifyContent: "start",
    backgroundColor: "#FAFAFA",
    "@media (max-width: 991px)": {
      whiteSpace: "initial",
    },
  },
  filterPillText: {
    color: "#242424",
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default function LoginDashboard() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerFootprint}>
          <div className={styles.leftControls}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/7435db48e7bb0f90b634328d0a7b7874c59713b6?placeholderIfAbsent=true"
              className={styles.logoImage}
              alt="Office Logo"
            />
            <div className={styles.appLabel}>Office</div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.rightControls}>
              <div className={styles.searchContainer}>
                <div className={styles.searchBox}>
                  <SearchBox
                    placeholder="Search"
                    size="medium"
                    appearance="outline"
                    contentBefore={<Search20Regular />}
                  />
                </div>
              </div>
              <div className={styles.profileSection}>
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/760e43969bdf16e9f110351bc4045b2537ab0593?placeholderIfAbsent=true"
                  className={styles.profileBg}
                  alt="Profile Background"
                />
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/5c249b69e73cd41b0ec629719ca0454e6fdfe3c8?placeholderIfAbsent=true"
                  className={styles.profileAvatar}
                  alt="Profile Avatar"
                />
              </div>
            </div>
            <div className={styles.bottomDivider} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/688c66308075d0b8f7f5962e599f55b8d8995f21?placeholderIfAbsent=true"
              className={styles.logoImage}
              alt="Sidebar Logo"
            />
            {[
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/f807a3ffb70e94824603a66530a7bfb54a662bb6?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/e1e559e331abd55bf1566572d7fbe8e12177008b?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/5ad06a0a92a1b0ac185cdbb687b85ebec792cf76?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/7301b9f2192c8b8196fc642012f88bb1490ec5fa?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/4df5a624d6752a2c225491075d7885c9c97a7602?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/72150461ea9fd6e367a0c1b0c1aff56be21aba6b?placeholderIfAbsent=true",
              "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/221138068abf1ddcc3f762e05f3f1b59f565b51e?placeholderIfAbsent=true",
            ].map((url, index) => (
              <div key={index} className={styles.sidebarItem}>
                <Image
                  src={url}
                  className={styles.sidebarItemBg}
                  alt={`Sidebar Item ${index + 1}`}
                />
                <div className={styles.sidebarHover} />
              </div>
            ))}
            <div className={styles.sidebarDivider}>
              <div className={styles.sidebarDividerLine} />
            </div>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/402901591f0340345644d6bf8d63c72d57d7ff7a?placeholderIfAbsent=true"
              className={styles.logoImage}
              alt="Sidebar Bottom"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.contentArea}>
          <div className={styles.mainContentContainer}>
            <div className={styles.contentWrapper}>
              {/* Page Header */}
              <div className={styles.pageHeader}>
                <div className={styles.greeting}>Good afternoon</div>
                <Button
                  appearance="outline"
                  size="medium"
                  iconAfter={<ChevronDown12Regular />}
                  className={styles.installButton}
                >
                  Install Office
                </Button>
              </div>

              {/* Suggested Actions */}
              <div className={styles.suggestedActions}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionTitle}>Recommended actions</div>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/340ee4ea7d30b6ef115affa3294c598a4053a17c?placeholderIfAbsent=true"
                    style={{ width: "64px", aspectRatio: "2" }}
                    alt="Section Icon"
                  />
                </div>

                <div className={styles.cardsContainer}>
                  {/* Meeting Card */}
                  <Card className={styles.actionCard}>
                    <CardHeader
                      image={
                        <Image
                          src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/2fa4621906c34a631cf6ac4aeeda02d0b930d614?placeholderIfAbsent=true"
                          style={{ width: "32px", aspectRatio: "1" }}
                          alt="Meeting Icon"
                        />
                      }
                      header={
                        <Text weight="semibold">
                          Your meeting is about to start
                        </Text>
                      }
                      description={
                        <Text size={200} style={{ color: "#616161" }}>
                          in 4m · Team Weekly Standup
                        </Text>
                      }
                    />

                    <div className={styles.meetingPreview}>
                      <div className={styles.meetingContainer}>
                        <div className={styles.meetingContent}>
                          <div className={styles.meetingInfo}>
                            <div className={styles.meetingDetails}>
                              <div className={styles.meetingTitle}>
                                Team Weekly Standup
                              </div>
                              <div className={styles.meetingLocation}>
                                <Calendar20Regular />
                                <div>Mission Bay Conference Center, Hall 1</div>
                              </div>
                              <div className={styles.meetingTime}>
                                8:00am - 4:30pm
                              </div>
                            </div>
                            <div className={styles.meetingParticipants}>
                              <Image
                                src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/7b666197333d9add57d9f5f9604b575e8fb249fd?placeholderIfAbsent=true"
                                style={{ width: "32px", aspectRatio: "1" }}
                                alt="Meeting Avatar"
                              />
                              <AvatarGroup size={24}>
                                <Avatar
                                  name="Person 1"
                                  image={{
                                    src: "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/472b70d46e034b0d6fab2b901ea85ab15ff23e04?placeholderIfAbsent=true",
                                  }}
                                />
                                <Avatar
                                  name="Person 2"
                                  image={{
                                    src: "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/64f85372296b532324ed44f85dfce6fdc63868f6?placeholderIfAbsent=true",
                                  }}
                                />
                                <Avatar
                                  name="Person 3"
                                  image={{
                                    src: "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/cb2ca715e73af07a616c9f446cded07285efbcc1?placeholderIfAbsent=true",
                                  }}
                                />
                                <Avatar
                                  name="Person 4"
                                  image={{
                                    src: "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/8687d03e75c23b431b58949af5fceb96b7a4b44d?placeholderIfAbsent=true",
                                  }}
                                />
                                <Avatar
                                  name="Person 5"
                                  image={{
                                    src: "https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/72edc6dc5bbb3112fd4f92f1118f1bb46d219d2d?placeholderIfAbsent=true",
                                  }}
                                />
                                <Avatar name="+7" />
                              </AvatarGroup>
                            </div>
                          </div>
                          <div className={styles.meetingAccent} />
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.footerButtons}>
                        <Button
                          appearance="outline"
                          size="medium"
                          icon={<People20Regular />}
                        >
                          Join meeting
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Email Card */}
                  <Card className={styles.actionCard}>
                    <CardHeader
                      image={
                        <Image
                          src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/6099060856cc0c453343da689e9222c743d90fc7?placeholderIfAbsent=true"
                          style={{ width: "32px", aspectRatio: "1" }}
                          alt="Email Icon"
                        />
                      }
                      header={
                        <Text weight="semibold">
                          You replied to Daisy Phillips
                        </Text>
                      }
                      description={
                        <Text size={200} style={{ color: "#616161" }}>
                          36m ago · RE: Social Media for Launch
                        </Text>
                      }
                    />

                    <div className={styles.outlookPreview}>
                      <div className={styles.outlookContent}>
                        <Text>
                          <strong>You said,</strong> "I'll draft the launch
                          announcements for Twitter and LinkedIn and make sure
                          everyone can review them before{" "}
                          <strong>Wednesday</strong>."
                        </Text>
                      </div>
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/a8a480fcf62ee5c40f539d93bfd48ae719a28fd1?placeholderIfAbsent=true"
                        className={styles.outlookAvatar}
                        alt="Outlook Avatar"
                      />
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.footerButtons}>
                        <Button
                          appearance="outline"
                          size="medium"
                          icon={<CheckboxChecked20Regular />}
                        >
                          Add to ToDo
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Word Card */}
                  <Card className={styles.actionCard}>
                    <CardHeader
                      image={
                        <Image
                          src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/4bab839d9b800c0252ed34cc66ab7ebfac4da39f?placeholderIfAbsent=true"
                          style={{ width: "32px", aspectRatio: "1" }}
                          alt="Word Icon"
                        />
                      }
                      header={
                        <Text weight="semibold">
                          Elvia Atkins mentioned you
                        </Text>
                      }
                      description={
                        <Text size={200} style={{ color: "#616161" }}>
                          5h ago · About us - Overview
                        </Text>
                      }
                    />

                    <div className={styles.wordPreview}>
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/69ad579e0d2c235c30ecfec344c03838dc44deb4?placeholderIfAbsent=true"
                        className={styles.wordBg}
                        alt="Word Background"
                      />
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets/59f68ba49b104a51a7528afd675b8d30/e3567aeef52b954af1809a52fe1c646994ac5ea5?placeholderIfAbsent=true"
                        className={styles.wordAvatar}
                        alt="Word Avatar"
                      />
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.footerButtons}>
                        <Button
                          appearance="outline"
                          size="medium"
                          icon={<ArrowReply20Regular />}
                        >
                          Reply
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Quick Access Section */}
              <div className={styles.quickAccess}>
                <div className={styles.quickAccessHeader}>
                  <div className={styles.quickAccessTitle}>
                    <div className={styles.quickAccessTitleText}>
                      Quick access
                    </div>
                  </div>
                  <div className={styles.pillsContainer}>
                    <div className={styles.pillsGroup}>
                      <div className={styles.pill}>
                        <People20Regular className={styles.pillIcon} />
                        <div className={styles.pillText}>All</div>
                      </div>
                      <div className={styles.pill}>
                        <Document20Regular className={styles.pillIcon} />
                        <div className={styles.pillText}>Recently opened</div>
                      </div>
                      <div className={styles.pill}>
                        <Share20Regular className={styles.pillIcon} />
                        <div className={styles.pillText}>Shared</div>
                      </div>
                      <div className={styles.pill}>
                        <Heart20Regular className={styles.pillIcon} />
                        <div className={styles.pillText}>Favorites</div>
                      </div>
                      <div className={styles.pillSelected}>
                        <Add20Regular className={styles.pillIcon} />
                        <div className={styles.pillTextSelected}>New</div>
                        <ChevronDown20Regular style={{ width: "16px" }} />
                      </div>
                    </div>
                    <div className={styles.rightControls2}>
                      <div className={styles.uploadSection}>
                        <ArrowUpload20Regular className={styles.pillIcon} />
                        <div className={styles.uploadText}>Upload</div>
                      </div>
                      <div className={styles.rightControlsEnd}>
                        <div className={styles.dividerVertical} />
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                          }}
                        >
                          <Grid20Filled />
                          <List20Regular />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Content View */}
                <div className={styles.addContentView}>
                  <div className={styles.addContentInfo}>
                    <div className={styles.addContentTitle}>
                      Add content view
                    </div>
                    <div className={styles.addContentSubtitle}>
                      Select a filter below to add it to your Quick Access
                    </div>
                  </div>
                  <div className={styles.filterPills}>
                    <div className={styles.filterPill}>
                      <Filter20Regular className={styles.pillIcon} />
                      <div className={styles.filterPillText}>Type</div>
                      <ChevronDown12Regular style={{ width: "12px" }} />
                    </div>
                    <div className={styles.filterPill}>
                      <Location20Regular className={styles.pillIcon} />
                      <div className={styles.filterPillText}>Location</div>
                      <ChevronDown12Regular style={{ width: "12px" }} />
                    </div>
                    <div className={styles.filterPill}>
                      <Person20Regular className={styles.pillIcon} />
                      <div className={styles.filterPillText}>Shared by</div>
                      <ChevronDown12Regular style={{ width: "12px" }} />
                    </div>
                    <div className={styles.filterPill}>
                      <Building20Regular className={styles.pillIcon} />
                      <div className={styles.filterPillText}>Owned by</div>
                      <ChevronDown12Regular style={{ width: "12px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

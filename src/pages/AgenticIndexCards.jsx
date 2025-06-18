import React from "react";
import {
  makeStyles,
  tokens,
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
  Button,
  Title3,
  Body1,
  Caption1,
  Avatar,
  Image,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  OpenRegular,
  ShareRegular,
  StarRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: "24px",
    backgroundColor: tokens.colorNeutralBackground2,
    padding: "32px",
    gap: "24px",
    minHeight: "calc(100vh - 64px)",
    "@media (max-width: 991px)": {
      padding: "20px",
    },
  },
  mainContent: {
    alignSelf: "stretch",
    minWidth: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
    flex: "1 1 0",
    paddingLeft: "1px",
    paddingRight: "1px",
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
  gridContainer: {
    gap: "20px",
    display: "flex",
    "@media (max-width: 991px)": {
      flexDirection: "column",
      alignItems: "stretch",
      gap: "0px",
    },
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "47%",
    marginLeft: "0px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
    },
  },
  innerGrid: {
    gap: "20px",
    display: "flex",
    "@media (max-width: 991px)": {
      flexDirection: "column",
      alignItems: "stretch",
      gap: "0px",
    },
  },
  halfColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "50%",
    marginLeft: "0px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
      marginTop: "24px",
    },
  },
  halfColumnOffset: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "50%",
    marginLeft: "20px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
      marginTop: "24px",
    },
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    lineHeight: "normal",
    width: "26%",
    marginLeft: "20px",
    "@media (max-width: 991px)": {
      width: "100%",
      marginLeft: 0,
      marginTop: "24px",
    },
  },
  heroCard: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "268px",
    width: "100%",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    minWidth: "240px",
    flex: "1 1 0",
    padding: "12px",
  },
  standardCard: {
    zIndex: "10",
    width: "100%",
    overflow: "hidden",
  },
  tallCard: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "356px",
    width: "100%",
    overflow: "hidden",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    gap: "2px",
  },
  title: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: "14px",
    lineHeight: "1",
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  subtitle: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: "12px",
    lineHeight: "1",
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightRegular,
  },
  authorName: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  actionButton: {
    width: "32px",
    height: "32px",
    minWidth: "32px",
    padding: "6px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorSubtleBackground,
  },
  cardBody: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: "12px",
    lineHeight: "16px",
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightRegular,
    padding: "0 12px 12px 12px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    gap: "40px",
    padding: "12px",
  },
  footerLeft: {
    display: "flex",
    alignItems: "start",
    gap: "12px",
  },
  primaryButton: {
    minWidth: "96px",
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    gap: "6px",
    padding: "6px 12px",
    borderRadius: tokens.borderRadiusSmall,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: "14px",
  },
  secondaryButton: {
    minWidth: "96px",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    gap: "6px",
    padding: "6px 12px",
    borderRadius: tokens.borderRadiusSmall,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: "14px",
  },
  footerRight: {
    width: "32px",
  },
  bottomGrid: {
    display: "flex",
    marginTop: "24px",
    alignItems: "stretch",
    gap: "24px",
    flexWrap: "wrap",
  },
  flexCard: {
    flex: "1 0 0",
    width: "fit-content",
    overflow: "hidden",
  },
  rightColumnStack: {
    flexGrow: "1",
    "@media (max-width: 991px)": {
      marginTop: "24px",
    },
  },
  cardStack: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
  previewImage: {
    width: "100%",
    flex: "1",
  },
  largeAvatar: {
    width: "64px",
    height: "64px",
    padding: "0 12px",
  },
  headerWithLargeAvatar: {
    display: "flex",
    alignItems: "stretch",
    padding: "0",
  },
  contentWithLargeAvatar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    flex: "1",
  },
});

export default function AgenticIndexCards() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.gridContainer}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div style={{ width: "100%" }}>
              <div className={styles.innerGrid}>
                {/* Hero Card with Image */}
                <div className={styles.halfColumn}>
                  <Card className={styles.heroCard}>
                    <CardPreview>
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
                        alt="Copilot preview"
                        className={styles.heroImage}
                      />
                    </CardPreview>
                    <CardHeader
                      image={
                        <Avatar
                          image={{
                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                          }}
                          size={32}
                        />
                      }
                      header={
                        <div className={styles.titleSection}>
                          <div className={styles.title}>
                            Copilot is now available
                          </div>
                          <div className={styles.subtitle}>
                            8 hours ago by{" "}
                            <span className={styles.authorName}>
                              Kathryn Murphy
                            </span>
                          </div>
                        </div>
                      }
                      action={
                        <Button
                          appearance="subtle"
                          icon={<MoreHorizontalRegular />}
                          className={styles.actionButton}
                        />
                      }
                    />
                  </Card>
                </div>

                {/* Standard Cards Stack */}
                <div className={styles.halfColumnOffset}>
                  <div className={styles.cardStack}>
                    {/* First Standard Card */}
                    <Card className={styles.standardCard}>
                      <CardHeader
                        image={
                          <Avatar
                            image={{
                              src: "https://images.unsplash.com/photo-1494790108755-2616b2e1cc44?w=32&h=32&fit=crop&crop=face",
                            }}
                            size={32}
                          />
                        }
                        header={
                          <div className={styles.titleSection}>
                            <div className={styles.title}>
                              Copilot is now available
                            </div>
                            <div className={styles.subtitle}>
                              8 hours ago by{" "}
                              <span className={styles.authorName}>
                                Kathryn Murphy
                              </span>
                            </div>
                          </div>
                        }
                      />
                      <div className={styles.cardBody}>
                        Copilot is an AI tool designed to improve productivity
                        by integrating with Microsoft applications, offering
                        content generation and task automation features.
                      </div>
                      <CardFooter className={styles.cardFooter}>
                        <div className={styles.footerLeft}>
                          <Button
                            appearance="primary"
                            icon={<OpenRegular />}
                            className={styles.primaryButton}
                          >
                            Open
                          </Button>
                          <Button
                            appearance="secondary"
                            icon={<ShareRegular />}
                            className={styles.secondaryButton}
                          >
                            Share
                          </Button>
                        </div>
                        <div className={styles.footerRight}>
                          <Button
                            appearance="subtle"
                            icon={<MoreHorizontalRegular />}
                            className={styles.actionButton}
                          />
                        </div>
                      </CardFooter>
                    </Card>

                    {/* Second Standard Card */}
                    <Card className={styles.standardCard}>
                      <CardHeader
                        image={
                          <Avatar
                            image={{
                              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
                            }}
                            size={32}
                          />
                        }
                        header={
                          <div className={styles.titleSection}>
                            <div className={styles.title}>
                              Copilot is now available
                            </div>
                            <div className={styles.subtitle}>
                              8 hours ago by{" "}
                              <span className={styles.authorName}>
                                Kathryn Murphy
                              </span>
                            </div>
                          </div>
                        }
                        action={
                          <Button
                            appearance="subtle"
                            icon={<MoreHorizontalRegular />}
                            className={styles.actionButton}
                          />
                        }
                      />
                    </Card>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className={styles.bottomGrid}>
                {/* Compact Card 1 */}
                <Card className={styles.flexCard}>
                  <CardHeader
                    image={
                      <Avatar
                        image={{
                          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
                        }}
                        size={32}
                      />
                    }
                    header={
                      <div className={styles.titleSection}>
                        <div className={styles.title}>
                          Copilot is now available
                        </div>
                        <div className={styles.subtitle}>
                          8 hours ago by{" "}
                          <span className={styles.authorName}>
                            Kathryn Murphy
                          </span>
                        </div>
                      </div>
                    }
                    action={
                      <Button
                        appearance="subtle"
                        icon={<StarRegular />}
                        className={styles.actionButton}
                      />
                    }
                  />
                </Card>

                {/* Compact Card 2 with Large Avatar */}
                <Card className={styles.flexCard}>
                  <div className={styles.headerWithLargeAvatar}>
                    <Avatar
                      image={{
                        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
                      }}
                      size={64}
                      className={styles.largeAvatar}
                    />
                    <div className={styles.contentWithLargeAvatar}>
                      <div className={styles.titleSection}>
                        <div className={styles.title}>
                          Copilot is now available
                        </div>
                        <div className={styles.subtitle}>
                          8 hours ago by{" "}
                          <span className={styles.authorName}>
                            Kathryn Murphy
                          </span>
                        </div>
                      </div>
                      <Button
                        appearance="subtle"
                        icon={<MoreHorizontalRegular />}
                        className={styles.actionButton}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column - Tall Card with Preview */}
          <div className={styles.rightColumn}>
            <Card className={styles.tallCard}>
              <CardHeader
                image={
                  <Avatar
                    image={{
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                    }}
                    size={32}
                  />
                }
                header={
                  <div className={styles.titleSection}>
                    <div className={styles.title}>Copilot is now available</div>
                    <div className={styles.subtitle}>
                      8 hours ago by{" "}
                      <span className={styles.authorName}>Kathryn Murphy</span>
                    </div>
                  </div>
                }
                action={
                  <Button
                    appearance="subtle"
                    icon={<MoreHorizontalRegular />}
                    className={styles.actionButton}
                  />
                }
              />
              <div className={styles.cardBody}>
                Copilot is an AI tool designed to improve productivity by
                integrating with Microsoft applications, offering content
                generation and task automation features.
              </div>
              <CardPreview className={styles.previewImage}>
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop"
                  alt="Copilot interface preview"
                />
              </CardPreview>
            </Card>
          </div>

          {/* Far Right Column - Another Tall Card */}
          <div className={styles.rightColumn}>
            <Card className={styles.tallCard}>
              <CardPreview>
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
                  alt="Analytics dashboard"
                  style={{ padding: "12px" }}
                />
              </CardPreview>
              <CardHeader
                image={
                  <Avatar
                    image={{
                      src: "https://images.unsplash.com/photo-1494790108755-2616b2e1cc44?w=32&h=32&fit=crop&crop=face",
                    }}
                    size={32}
                  />
                }
                header={
                  <div className={styles.titleSection}>
                    <div className={styles.title}>Copilot is now available</div>
                    <div className={styles.subtitle}>
                      8 hours ago by{" "}
                      <span className={styles.authorName}>Kathryn Murphy</span>
                    </div>
                  </div>
                }
              />
              <div className={styles.cardBody}>
                Copilot is an AI tool designed to improve productivity by
                integrating with Microsoft applications, offering content
                generation and task automation features.
              </div>
              <CardFooter className={styles.cardFooter}>
                <div className={styles.footerLeft}>
                  <Button
                    appearance="primary"
                    icon={<OpenRegular />}
                    className={styles.primaryButton}
                  >
                    Open
                  </Button>
                  <Button
                    appearance="secondary"
                    icon={<ShareRegular />}
                    className={styles.secondaryButton}
                  >
                    Share
                  </Button>
                </div>
                <div className={styles.footerRight}>
                  <Button
                    appearance="subtle"
                    icon={<MoreHorizontalRegular />}
                    className={styles.actionButton}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

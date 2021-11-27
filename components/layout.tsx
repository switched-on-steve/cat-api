import Head from "next/head";
import Link from "next/link";

import { Container, Typography, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/system";

export const Layout = ({
  title,
  children,
  disableFlex,
}: {
  children: any;
  title: string;
  disableFlex?: boolean;
}) => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container
        sx={{
          my: 8,
          ...(disableFlex
            ? {}
            : {
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }),
        }}
        maxWidth="md"
      >
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        {children}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Link href="https://github.com/HonbraDev/cat-api">
            <a
              href="https://github.com/HonbraDev/cat-api"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "2rem",
                }}
              />
            </a>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export const Section = ({
  title,
  disableFlex,
  children,
}: {
  title?: string;
  disableFlex?: boolean;
  children: any;
}) => (
  <Box
    sx={{
      ...(disableFlex
        ? {}
        : {
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }),
    }}
  >
    {title && <Typography variant="h4">{title}</Typography>}
    {children}
  </Box>
);

import { Layout, Section } from "../components/layout";
import { getImagePath } from "../src/utils";
import { getImageNames } from "../src/serverUtils";
import { Hero } from "../components/hero";

import type { NextPage, GetStaticProps } from "next";
import { AllImages } from "../components/allimages";

const Home: NextPage<Props> = ({ imagePaths }) => {
  return (
    <>
      <Layout title="Honbra's cat API">
        <Section>
          <Hero endpoint="cat.honbra.com/api/random" imagePaths={imagePaths} />
        </Section>
        <Section title="Images">
          <AllImages paths={imagePaths} />
        </Section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imageNames = await getImageNames();
  return {
    props: {
      imagePaths: imageNames.map(getImagePath),
    },
  };
};

export interface Props {
  imagePaths: string[];
}

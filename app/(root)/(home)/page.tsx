import Badges from "@/components/Badges";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import HeroContent from "@/components/HeroContent";
import { getPageContent } from "@/sanity/schema/action";
import { EmblaOptionsType } from 'embla-carousel'

type pageContentProp = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

export default async function Home() {
  const pageContents = await getPageContent();

  // console.log(pageContents);
  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <div className="bg-slate-50">
      
      <HeroContent />
      <HeroCarousel className="md:-mt-32 my-5" options={OPTIONS}/>

      <Badges className="my-10"/>

      <div className="flex flex-col mt-10  ">
        {pageContents
          .reverse()
          .map((pageContent: pageContentProp, index: number) =>
            index % 2 === 0 ? (
              <Content
                key={pageContent._id}
                title={pageContent.title}
                description={pageContent.description}
                image={pageContent.image}
                swap={false}
              />
            ) : (
              <Content
                key={pageContent._id}
                title={pageContent.title}
                description={pageContent.description}
                image={pageContent.image}
                swap={true}
              />
            )
          )}
      </div>

      <Footer />
    </div>
  );
}

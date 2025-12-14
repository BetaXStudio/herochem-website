import OpengraphImage from "components/opengraph-image";

// Dummy page data for demo
const dummyPages: Record<string, { title: string; seo?: { title?: string } }> =
  {
    about: {
      title: "About Us",
      seo: { title: "About Us - HeroChem" },
    },
    contact: {
      title: "Contact",
      seo: { title: "Contact - HeroChem" },
    },
  };

export default async function Image({ params }: { params: { page: string } }) {
  const page = dummyPages[params.page] || { title: "Page Not Found" };
  const title = page.seo?.title || page.title;
  return await OpengraphImage({ title });
}

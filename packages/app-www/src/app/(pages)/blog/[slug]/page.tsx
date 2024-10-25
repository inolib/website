type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <>{slug}</>;
};

export default Page;

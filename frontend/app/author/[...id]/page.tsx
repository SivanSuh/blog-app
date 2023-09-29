import AuthorPage from "@/src/containers/Authors";

export default async function Author({ params }: any) {
  return (
    <>
      <AuthorPage params={params} />
    </>
  );
}

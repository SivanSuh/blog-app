import Button from "@/src/components/Atoms/Button";
import Blog from "@/src/components/Blog";

const HomePage = () => {
  return (
    <>
      <Button
        buttonName="Create Blog"
        linkHref="/createBlog"
        buttonType={false}
      />
      <h2>All Blogs</h2>
      <Blog />
    </>
  );
};

export default HomePage;

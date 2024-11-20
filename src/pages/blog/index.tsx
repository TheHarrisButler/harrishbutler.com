import { useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../layout";
import { BlogCard } from "../../ui-components";

const Blog: NextPage = () => {
  const [blgIdx, setBlgIdx] = useState<number>();
  const blogs = [
    {
      title: "Write Better React",
      date: "10/03/2024",
    },
    { title: "Play first practice", date: "8/02/2024" },
    { title: "Something to think about", date: "6/14/2024" },
  ];

  return (
    <Layout>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          columnGap: "1rem",
        }}
      >
        {blogs.map((blog, idx) => {
          return (
            <BlogCard
              key={idx}
              title={blog.title}
              date={blog.date}
              isActive={idx === blgIdx}
              onClick={() => {
                setBlgIdx(idx);
              }}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;

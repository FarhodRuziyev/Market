import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const repo = await res.json();
  const paths = repo?.map((p: any) => {
    return {
      params: {
        id: `${p?.id}`,
      },
    };
  });

  return {
    paths,

    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  console.log(context);
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const repo = await res.json();
  return { props: { repo } };
};

export default function DetailedProduct({ repo }: any) {
  console.log(repo);

  return (
    <>
      <h1>Detailed {repo?.id}</h1>
      <h2>{repo?.title}</h2>
    </>
  );
}

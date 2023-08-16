import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Products({ repo }: any) {
  console.log(repo);

  return (
    <>
      <h1>products</h1>
      {repo?.map((p: any) => (
        <h4 key={p.id}>
          <Link href={`/products/${p.id}`}>{p?.title}</Link>
        </h4>
      ))}
    </>
  );
}

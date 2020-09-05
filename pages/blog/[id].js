import React from "react";
import { projectFirestore } from "../../src/firebase/config";

const id = ({ data }) => {
  return <div>{data.title}</div>;
};

export const getStaticPaths = async () => {
  const pathsToPass = [];
  await projectFirestore
    .collection("blog-posts")
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        pathsToPass.push({ params: { id: data.id } });
      });
    });

  return {
    paths: pathsToPass,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let documents = null;
  await projectFirestore
    .collection("blog-posts")
    .doc(params.id)
    .get()
    .then((snapshot) => {
      documents = snapshot.data();
    });
  return {
    props: {
      data: documents,
    },
  };
};
export default id;

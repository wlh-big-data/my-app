import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export  default function Home(props) {
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('location', location);
  console.log('useParams', params);
  console.log('searchParams', searchParams.get('id'));
  return (
    <Helmet title="hello world">
      <h1>hello world</h1>
    </Helmet>
  );
}
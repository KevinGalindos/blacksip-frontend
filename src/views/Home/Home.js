import { Order, Address } from "../../components/Index";

import useFetch from "../../@common/hooks/useFetch";

export const Home = () => {
  const { loading, result } = useFetch({
    url: `https://blackisp.herokuapp.com/products`,
  });

  return (
    !loading && (
      <div className="home">
        <div className="container">
          <Address />
          <Order data={result} />
        </div>
      </div>
    )
  );
};

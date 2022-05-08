import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Template App | Not Found Page" />
      </Helmet>
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;

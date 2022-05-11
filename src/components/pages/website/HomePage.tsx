import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Template App | Home Page" />
      </Helmet>
      <h1>Main Page</h1>
    </div>
  );
}

export default HomePage;

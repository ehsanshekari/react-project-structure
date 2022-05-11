import { Helmet } from 'react-helmet-async';

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Template App | About Page" />
      </Helmet>
      <h1>This is About Page</h1>
    </div>
  );
}

export default AboutPage;

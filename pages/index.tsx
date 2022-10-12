import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import type { HeaderProps } from 'components/Header';

const headerProps: HeaderProps = {
  title: 'Bamdad Erfanian',
  description:
    'I architect, build and design user interfaces that work for everyone. I love balancing the needs of the business with the needs of the user to create a delightful experience.',
  image: {
    src: '/profile.jpg',
    alt: 'profile picture',
    width: 150,
    height: 150,
  },
  socialLinks: [],
  location: 'Currently in Paris, France',
};

const Home: NextPage = () => {
  return (
    <Container>
      <Header {...headerProps} />
      <h1>career cummary comp</h1>
      <h1>work section</h1>
      <h1>education section</h1>
    </Container>
  );
};

export default Home;

import HomePage from 'components/HomePage';
import Layout from 'components/Shared/Layout';
import { NextPage } from 'next';

const NextHomePage: NextPage & { PageLayout: typeof Layout } = ({}) => {
  return <HomePage />;
};
NextHomePage.PageLayout = Layout;
export default NextHomePage;

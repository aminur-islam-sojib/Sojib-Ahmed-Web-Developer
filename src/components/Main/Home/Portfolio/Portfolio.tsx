import HeaderGenerator from '../HeaderGenerator';
import PortfolioDemo from '@/components/test/TestCard';

const Portfolio = () => {
  return (
    <>
      <div>
        <HeaderGenerator children={'Portfolio'} />
        <PortfolioDemo />
      </div>
    </>
  );
};

export default Portfolio;

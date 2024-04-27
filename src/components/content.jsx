import React from 'react'
import ContentNavItems from './contentNavItems';
import HeroContent from './heroContent';

const Content = () => {
  return (
    <div className="sm:pt-20 max-sm:pt-10">
      <div className="sm:text-3xl max-sm:text-xl font-bold bg-clip-text max-sm:text-center text-blue-800 ">
        Relations and Functions (Mathematics)
      </div>
      <ContentNavItems />
      <div className="">
        <HeroContent />
      </div>
    </div>
  );
}

export default Content
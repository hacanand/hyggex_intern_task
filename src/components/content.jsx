import React from 'react'
import ContentNavItems from './contentNavItems';
import HeroContent from './heroContent';

const Content = () => {
  return (
    <div className="pt-20  ">
      <div className="text-3xl font-bold bg-clip-text  text-blue-800 ">
        Relations and Functions ( Mathematics )
      </div>
      <ContentNavItems />
      <div className="">
        <HeroContent />
      </div>
    </div>
  );
}

export default Content
import React from 'react';
import './quiz';
import GenshinImpact from '../../topics/GenshinImpact/genshin';
import StarRail from '../../topics/StarRail/star';
import TowerOfFantasy from '../../topics/TowerOfFantasy/fantasy';
import WutheringWaves from '../../topics/WutheringWaves/waves';


const Quiz = () => {
  return (
    <div className='quiz'>
      <GenshinImpact />
      <StarRail />
      <TowerOfFantasy />
      <WutheringWaves />
    </div>
  )
}

export default Quiz;
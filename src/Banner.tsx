import React from "react";
import {useFlags} from "launchdarkly-react-client-sdk";

const showBanner = (isBanner: boolean) => {
    if (isBanner) {
      return (<div> <h2>Essential maintence will take place September 8th at 13:00!</h2>
      </div>)
    }
    return ''
  }
  export const Banner: React.FC = () => {
    const { isBanner } = useFlags()
    return (
      <div>
        {showBanner(isBanner)}
      </div>
    )
  }
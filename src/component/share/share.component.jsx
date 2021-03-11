import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkIcon from '@material-ui/icons/Link'

import * as SI from './share.style'

const Share = () => {
  
  // const iconList = [FacebookIcon, LinkedInIcon, PinterestIcon, InstagramIcon, YouTubeIcon, MailOutlineIcon, LinkIcon]

  return (
    <SI.StyledIconWrapper>
      <SI.StyledTitle>Share my results</SI.StyledTitle>
      <SI.StyledIconList>
        <SI.StyledIcon><FacebookIcon/></SI.StyledIcon>
        <SI.StyledIcon><LinkedInIcon/></SI.StyledIcon>
        <SI.StyledIcon><PinterestIcon/></SI.StyledIcon>
        <SI.StyledIcon><InstagramIcon/></SI.StyledIcon>
        <SI.StyledIcon><YouTubeIcon/></SI.StyledIcon>
        <SI.StyledIcon><MailOutlineIcon/></SI.StyledIcon>
        <SI.StyledIcon><LinkIcon/></SI.StyledIcon>
      </SI.StyledIconList>
    </SI.StyledIconWrapper>
  )
}

export { Share }

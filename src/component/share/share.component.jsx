import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkIcon from '@material-ui/icons/Link'
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, InstapaperShareButton, EmailShareButton} from 'react-share'

import * as SI from './share.style'

const Share = () => {
  
  // const iconList = [FacebookIcon, LinkedInIcon, PinterestIcon, InstagramIcon, YouTubeIcon, MailOutlineIcon, LinkIcon]

  return (
    <SI.StyledIconWrapper>
      <SI.StyledTitle>Share my results</SI.StyledTitle>
      <SI.StyledIconList>
        <FacebookShareButton url="https://quickbooks.intuit.com/uk/"><SI.StyledIcon><FacebookIcon/></SI.StyledIcon></FacebookShareButton>
        <LinkedinShareButton url="https://quickbooks.intuit.com/uk/"><SI.StyledIcon><LinkedInIcon/></SI.StyledIcon></LinkedinShareButton>
        <PinterestShareButton url="https://quickbooks.intuit.com/uk/"><SI.StyledIcon><PinterestIcon/></SI.StyledIcon></PinterestShareButton>
        <InstapaperShareButton url="https://quickbooks.intuit.com/uk/"><SI.StyledIcon><InstagramIcon/></SI.StyledIcon></InstapaperShareButton>
        <SI.StyledIcon><YouTubeIcon/></SI.StyledIcon>
        <EmailShareButton url="https://quickbooks.intuit.com/uk/"><SI.StyledIcon><MailOutlineIcon/></SI.StyledIcon></EmailShareButton>
        <SI.StyledIcon><LinkIcon/></SI.StyledIcon>
      </SI.StyledIconList>
    </SI.StyledIconWrapper>
  )
}

export { Share }

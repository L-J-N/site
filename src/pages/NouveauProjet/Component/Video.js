import React from 'react';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';
const DAILYMOTION_PREFIX = 'https://www.dailymotion.com/embed/video/';

const YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
const VIMEOMATCH_URL = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;// eslint-disable-line no-useless-escape
const DAILYMOTION_url = /^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;

const isYoutube = (url) => YOUTUBEMATCH_URL.test(url);
const isVimeo = (url) => VIMEOMATCH_URL.test(url);
const isDaylimotion = (url) => DAILYMOTION_url.test(url);

const getYoutubeSrc = (url) => {
  const id = url && url.match(YOUTUBEMATCH_URL)[1];
  return {
    srcID: id,
    srcType: 'youtube',
    url,
  };
};
const getVimeoSrc = (url) => {
  const id = url.match(VIMEOMATCH_URL)[3];
  return {
    srcID: id,
    srcType: 'vimeo',
    url,
  };
};
const getDailymotionSrc = (url) => {
  const id = url.match(DAILYMOTION_url)[2];
  return {
    srcID: id,
    srcType: 'daylimotion',
    url,
  };
};



const getSrc = ({ src }) => {
  if (isYoutube(src)) {
    const { srcID } = getYoutubeSrc(src);
    return `${YOUTUBE_PREFIX}${srcID}`;
  }
  if (isVimeo(src)) {
    const { srcID } = getVimeoSrc(src);
    return `${VIMEO_PREFIX}${srcID}`;
  }
  if (isDaylimotion(src)) {
    const { srcID } = getDailymotionSrc(src);
    return `${DAILYMOTION_PREFIX}${srcID}`;
  }
  return undefined;
};



const Video = (props) => {
  const src = getSrc(props);
  return <iframe src={src} frameBorder="0" allowFullScreen />;
};

export default Video;

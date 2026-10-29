/**
 * Centralized Image Assets Registry
 * Direct imports allow Vite to bundle, hash, optimize, and output correct
 * relative URLs for production builds (GitHub Pages, Vercel, Netlify, Custom Domains).
 */

import ischevellProfileImg from '../assets/images/ischevell_hr_profile_1793098562708.jpg';
import hotelMeetingImg from '../assets/images/gallery_hotel_meeting_1793125770383.jpg';
import trainingSessionImg from '../assets/images/gallery_training_session_1793125786457.jpg';
import retailStoreImg from '../assets/images/gallery_retail_store_team_1793125800576.jpg';
import hotelAwardImg from '../assets/images/regenerated_image_1793166686205.jpg';
import kelapaJayaFactoryImg from '../assets/images/exp_kelapa_jaya_factory_1793131310551.jpg';
import coffeeShopOwnerImg from '../assets/images/exp_coffee_shop_owner_1793131331204.jpg';
import dataAnalystImg from '../assets/images/exp_data_analyst_retail_1793131352140.jpg';
import hotelFbSecretaryImg from '../assets/images/exp_hotel_fb_secretary_1793131369162.jpg';

export const APP_IMAGES = {
  profile: ischevellProfileImg,
  hotelMeeting: hotelMeetingImg,
  trainingSession: trainingSessionImg,
  retailStore: retailStoreImg,
  hotelAward: hotelAwardImg,
  kelapaJayaFactory: kelapaJayaFactoryImg,
  coffeeShopOwner: coffeeShopOwnerImg,
  dataAnalyst: dataAnalystImg,
  hotelFbSecretary: hotelFbSecretaryImg,
};

export const APP_IMAGE_FILENAMES = {
  profile: 'ischevell_hr_profile_1793098562708.jpg',
  hotelMeeting: 'gallery_hotel_meeting_1793125770383.jpg',
  trainingSession: 'gallery_training_session_1793125786457.jpg',
  retailStore: 'gallery_retail_store_team_1793125800576.jpg',
  hotelAward: 'regenerated_image_1793166686205.jpg',
  kelapaJayaFactory: 'exp_kelapa_jaya_factory_1793131310551.jpg',
  coffeeShopOwner: 'exp_coffee_shop_owner_1793131331204.jpg',
  dataAnalyst: 'exp_data_analyst_retail_1793131352140.jpg',
  hotelFbSecretary: 'exp_hotel_fb_secretary_1793131369162.jpg',
};

import React from "react";

import SVG from "./svg";

const Crown = ({ fill, title, ...rest }) => (
  <SVG viewBox="0 0 28 21" title={title} fill={fill} {...rest}>
    <path d="M12.6323095,3.55271368e-15 L13.3909515,2.38583111 L13.3855375,2.39239563 C13.3171852,2.44572391 13.2556006,2.50656416 13.2034905,2.57613454 L13.1967229,2.58141323 L11.3133145,1.98532767 L11.3133145,4.76503003 L13.2007834,3.77500554 L13.204844,3.77899839 C13.2603379,3.85229093 13.3253063,3.91678566 13.3990726,3.97194117 L12.316265,7.24080185 C12.3155883,7.24486238 12.313558,7.24892291 12.3122045,7.25230668 L12.310851,7.25636721 C12.2607711,7.42014185 12.2330242,7.59271431 12.2330242,7.77205431 C12.2330242,8.65657274 12.8854157,9.38611433 13.7347429,9.51131396 C13.7476013,9.51334422 13.7597828,9.51672799 13.7726412,9.5180815 C13.8450539,9.52755607 13.9181434,9.53432362 13.99394,9.53432362 C14.068383,9.53432362 14.1435028,9.52823283 14.2159155,9.5180815 C14.2280971,9.51672799 14.2402787,9.51402098 14.2524603,9.51131396 C15.1017875,9.38611433 15.7555325,8.65657274 15.7555325,7.77205431 C15.7555325,7.59271431 15.7271088,7.42014185 15.6777057,7.25636721 L15.6763522,7.25230668 C15.6756755,7.24824615 15.674322,7.24418562 15.6722917,7.24080185 L14.5894841,3.97194117 C14.6632504,3.91678566 14.7282189,3.85235861 14.7843895,3.77899839 L14.7891268,3.77500554 L16.675919,4.76503003 L16.675919,1.98532767 L14.7904803,2.58141323 L14.785743,2.57613454 C14.7329561,2.50656416 14.672725,2.44572391 14.6030192,2.39239563 L14.5976052,2.38583111 L15.3562472,3.55271368e-15 L13.9952935,3.55271368e-15 L12.6323095,3.55271368e-15 Z M5.84513631,3.57543057 C5.26698475,3.58436374 4.7158357,3.93485501 4.48106948,4.50461481 C4.16786739,5.26068519 4.53026955,6.13227761 5.28336221,6.44087776 C6.05086975,6.75759897 6.92205611,6.39485844 7.23404003,5.63608104 C7.54873098,4.87899553 7.18937422,3.99962044 6.42125761,3.68513251 C6.2333905,3.60777945 6.03787605,3.57245285 5.84513631,3.57543057 Z M22.155602,3.57543057 C21.9627269,3.57245285 21.766468,3.60777945 21.5783302,3.68513251 C20.8108903,3.99962044 20.4515336,4.87899553 20.7655478,5.63608104 C21.0782085,6.39485844 21.9491918,6.75759897 22.7173084,6.44087776 C23.4705364,6.13227761 23.8326002,5.26068519 23.5199395,4.50461481 C23.2851056,3.93485501 22.7342273,3.58436374 22.155602,3.57543057 Z M9.61601365,4.76638354 C9.03806511,4.7753167 8.48651001,5.12553727 8.25167612,5.69556778 C7.93901543,6.45170584 8.30107921,7.32201242 9.05430722,7.63061257 C9.82174708,7.94733378 10.6927304,7.58594676 11.0053911,6.82730471 C11.3194053,6.07069293 10.9600485,5.18982897 10.1926087,4.87473197 C10.0037941,4.79744658 9.80888874,4.76333814 9.61601365,4.76638354 Z M18.3847246,4.76638354 C18.1918495,4.76333814 17.9962674,4.79744658 17.8081296,4.87473197 C17.0413665,5.18982897 16.6799795,6.07069293 16.9939937,6.82730471 C17.3073311,7.58594676 18.1783145,7.94733378 18.9464311,7.63061257 C19.6989823,7.32201242 20.0617229,6.45170584 19.7490622,5.69556778 C19.5142283,5.12553727 18.9633499,4.7753167 18.3847246,4.76638354 Z M2.4654232,5.55547955 C1.88733932,5.56461574 1.33639329,5.91483631 1.1012887,6.48486682 C0.788560341,7.24012509 1.15048877,8.11246194 1.9036491,8.42106209 C2.67156269,8.7377833 3.54335813,8.37504277 3.85588346,7.61640072 C4.17043906,6.85911218 3.80959344,5.98027849 3.04167985,5.66518149 C2.85360971,5.58796378 2.65809527,5.55243416 2.4654232,5.55547955 Z M25.5339616,5.55547955 C25.3417632,5.55243416 25.1461811,5.58796378 24.9580433,5.66518149 C24.1912802,5.98027849 23.8305699,6.85911218 24.1452609,7.61640072 C24.4579216,8.37504277 25.3282281,8.7377833 26.0963448,8.42106209 C26.848896,8.11246194 27.2123133,7.24012509 26.8996526,6.48486682 C26.6648187,5.91483631 26.1125869,5.56461574 25.5339616,5.55547955 Z M1.47668455,9.31167131 C0.898397633,9.32114588 0.347654636,9.67102807 0.11261772,10.2415323 C-0.200381341,10.9974673 0.162054653,11.8691274 0.914910448,12.1777276 C1.68302706,12.4944488 2.55421342,12.1330618 2.86721248,11.373743 C3.18149738,10.6171312 2.82200527,9.73667328 2.05429471,9.42198233 C1.86615689,9.34415554 1.66949197,9.30896429 1.47668455,9.31167131 Z M26.5240537,9.31167131 C26.3318554,9.30896429 26.1362733,9.34415554 25.9481355,9.42198233 C25.1800189,9.73667328 24.8193086,10.6171312 25.1339995,11.373743 C25.4459835,12.1330618 26.3183203,12.4944488 27.0857602,12.1777276 C27.8389882,11.8691274 28.2003752,10.9974673 27.8870378,10.2415323 C27.6528806,9.67102807 27.102679,9.32114588 26.5240537,9.31167131 Z M6.8677127,9.70824958 C5.63798169,11.343289 5.81258441,12.6934147 7.33602697,14.2134058 C6.34390454,13.6645577 4.80266333,14.2418295 5.71140957,16.0954607 C6.18642372,14.9422706 7.2040598,15.2021445 7.41656078,16.1929134 C7.56003279,16.8926778 7.13435406,17.716965 6.20977176,17.8861537 C5.45261857,18.0262419 4.28413386,17.5071711 3.34804672,15.4911187 C3.87571238,15.5039771 4.33570257,15.7706184 4.93422445,16.1827621 L3.95083215,12.9086227 C3.7029369,13.8283324 3.38702779,14.4292906 3.0520342,14.7561631 C2.82613347,14.0936202 2.85882073,13.6151546 3.05995223,12.5844572 L1.03097388,13.3065545 C2.10829973,14.7771425 3.15178785,16.8425979 4.00896538,20.4469936 C7.02878033,20.0152241 10.4172912,19.7722691 13.9978652,19.7722691 C17.5785744,19.7722691 20.9684388,20.0152241 23.9887952,20.4483471 C24.8462434,16.8425979 25.890476,14.7771425 26.9685462,13.3065545 L24.9396356,12.5844572 C25.1413085,13.6151546 25.173116,14.0936202 24.9470799,14.7561631 C24.612763,14.4292906 24.2946883,13.8283324 24.0469961,12.9086227 L23.065025,16.1827621 C23.6625994,15.7706184 24.1248229,15.5039771 24.6526916,15.4911187 C23.7167398,17.5071711 22.5473076,18.0262419 21.7893423,17.8861537 C20.8648954,17.716965 20.4392166,16.8926778 20.5826886,16.1929134 C20.7958664,15.2021445 21.8130287,14.9422706 22.2881106,16.0954607 C23.1963154,14.2418295 21.6553449,13.6645577 20.6632225,14.2134058 C22.1872741,12.6934147 22.3612001,11.343289 21.1315367,9.70824958 C19.417317,11.0184467 19.3976911,12.3151088 20.1691915,14.1403163 C19.1682713,12.9952473 17.6103819,13.6090638 18.1727651,15.4593113 C18.8941856,14.342666 19.8511168,15.0458141 19.7008772,16.1069655 C19.5743241,17.0320892 18.3534586,17.7778729 16.8327907,17.6459058 C14.6543172,17.4482934 14.5237036,15.9458979 14.4695632,14.7006692 C15.0048762,14.601863 15.9692517,15.0979242 16.7915087,16.2524678 L17.0946948,12.7800393 C16.200025,13.7132841 15.3872426,13.889917 14.483775,13.9183407 C14.7842541,12.9803587 16.1668641,11.4441255 16.1668641,11.4441255 L14.1589328,11.4441255 L14.1575793,11.4441255 L11.83225,11.4441255 C11.83225,11.4441255 13.2141832,12.9803587 13.515339,13.9183407 C12.6118715,13.889917 11.799089,13.7132841 10.9044193,12.7800393 L11.2076054,16.2524678 C12.0305392,15.0979242 12.9942379,14.601863 13.5295509,14.7006692 C13.4760873,15.9458979 13.3454736,17.4482934 11.1663234,17.6459058 C9.6456555,17.7778729 8.42614349,17.0320892 8.29959035,16.1069655 C8.1493508,15.0458141 9.10425172,14.342666 9.82634902,15.4593113 C10.3887322,13.6090638 8.83016606,12.9952473 7.82992257,14.1403163 C8.60142296,12.3151088 8.58179707,11.0184467 6.86757735,9.70824958 L6.8677127,9.70824958 Z" />
  </SVG>
);

Crown.defaultProps = {
  title: "GOV.UK",
  fill: "currentColor",
};

export default Crown;

import React from 'react';

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5531 4.956L3.91313 14.072C2.2998 14.72 2.30913 15.62 3.61713 16.0213L9.68647 17.9147L23.7291 9.05467C24.3931 8.65067 24.9998 8.868 24.5011 9.31067L13.1238 19.5787H13.1211L13.1238 19.58L12.7051 25.836C13.3185 25.836 13.5891 25.5547 13.9331 25.2227L16.8811 22.356L23.0131 26.8853C24.1438 27.508 24.9558 27.188 25.2371 25.8387L29.2625 6.868C29.6745 5.216 28.6318 4.468 27.5531 4.956V4.956Z"
        fill="#F0E3CA"
      />
    </svg>
  );
};

export default TelegramIcon;

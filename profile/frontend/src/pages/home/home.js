import React from 'react';
import './home.scss';
import UserProfile from './UserProfile';

export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Home</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <div className={'logos-container'}>
            <svg className={'devextreme-logo'} viewBox={'0 0 200 34'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
              <path d={'M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z'} fill={'#F05B41'} />
            </svg>
            <svg className ={'plus'} viewBox={'0 0 22 22'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
              <path d={'M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z'} fill={'#BCBCBC'} />
            </svg>
            <svg className={'react-logo'} viewBox={'0 0 184 62'} xmlns={'http://www.w3.org/2000/svg'}>
              <circle fill={'#6FCEEF'} cx={'34.6'} cy={'30.4'} r={'6'} /><path fill={'#6FCEEF'} d={'M68.1,30.4c0-4.8-5.4-8.9-14-11.3c0.3-1.3,0.6-2.5,0.8-3.7c1.1-7-0.1-12-3.5-14c-3.4-2-8.3-0.6-13.9,3.9c-0.9,0.8-1.9,1.6-2.8,2.6C28.3,1.7,22-1,17.9,1.4c-4.1,2.4-5,9.1-2.8,17.7c-8.6,2.4-14,6.5-14,11.3s5.4,8.8,14,11.3c-2.2,8.6-1.4,15.3,2.8,17.7c1,0.6,2.2,0.9,3.4,0.9c3.8,0,8.5-2.7,13.4-7.4c0.9,0.9,1.9,1.8,2.8,2.6c3.9,3.2,7.5,4.8,10.5,4.8c1.2,0,2.4-0.3,3.4-0.9c4.1-2.4,5-9.1,2.8-17.7C62.7,39.3,68.1,35.2,68.1,30.4z M39.4,7.7c3.3-2.7,6.3-4.1,8.5-4.1c0.7,0,1.4,0.2,1.9,0.5c2.2,1.3,3,5.3,2.1,10.9c-0.2,1.1-0.4,2.3-0.7,3.5c-2.7-0.6-5.7-1.1-8.9-1.3c-1.8-2.6-3.7-4.9-5.6-7C37.6,9.2,38.5,8.4,39.4,7.7z M43.9,35.8c-1,1.8-2.1,3.5-3.2,5.1c-1.9,0.1-4,0.2-6.1,0.2c-2.1,0-4.1-0.1-6.1-0.2c-1.1-1.6-2.2-3.4-3.2-5.1c-1-1.8-2-3.6-2.8-5.4c0.8-1.8,1.8-3.5,2.8-5.4c1-1.8,2.1-3.5,3.2-5.1c1.9-0.1,4-0.2,6.1-0.2c2.1,0,4.1,0.1,6.1,0.2c1.1,1.6,2.2,3.3,3.2,5.1c1,1.8,2,3.6,2.8,5.4C45.9,32.2,44.9,34,43.9,35.8z M48.3,33.9c0.8,1.9,1.5,3.8,2,5.6c-1.8,0.4-3.8,0.8-5.9,1c0.7-1.1,1.3-2.1,2-3.3C47.2,36.2,47.8,35.1,48.3,33.9z M34.6,48.6c-1.3-1.4-2.6-2.9-3.8-4.5c1.2,0.1,2.5,0.1,3.8,0.1c1.3,0,2.6,0,3.8-0.1C37.2,45.7,35.9,47.2,34.6,48.6z M24.7,40.5c-2.1-0.3-4-0.6-5.9-1c0.6-1.8,1.2-3.6,2-5.6c0.6,1.1,1.2,2.2,1.8,3.3C23.4,38.4,24.1,39.5,24.7,40.5z M20.9,26.9c-0.8-1.9-1.5-3.8-2-5.6c1.8-0.4,3.8-0.8,5.9-1c-0.7,1.1-1.3,2.1-2,3.3C22.1,24.7,21.5,25.8,20.9,26.9z M34.6,12.2c1.3,1.4,2.5,2.9,3.8,4.6c-1.2-0.1-2.5-0.1-3.8-0.1c-1.3,0-2.5,0-3.8,0.1C32.1,15.2,33.4,13.6,34.6,12.2z M46.5,23.6c-0.6-1.1-1.3-2.2-2-3.2c2.1,0.3,4,0.6,5.8,1c-0.6,1.8-1.2,3.7-2,5.6C47.8,25.8,47.2,24.7,46.5,23.6z M19.4,4c0.5-0.3,1.2-0.5,1.9-0.5c2.8,0,6.9,2.3,11.3,6.5c-1.9,2.1-3.8,4.4-5.6,6.9c-3.2,0.3-6.2,0.7-8.9,1.3C16.2,11,16.8,5.5,19.4,4z M4.1,30.4c0-3,4.4-6.2,11.8-8.3c0.8,2.7,1.9,5.5,3.3,8.3c-1.3,2.9-2.4,5.7-3.3,8.3C8.6,36.7,4.1,33.4,4.1,30.4z M19.4,56.8c-2.6-1.5-3.2-6.9-1.3-14.4c2.7,0.6,5.7,1.1,8.9,1.3c1.8,2.5,3.7,4.9,5.6,7C27,56.1,22,58.3,19.4,56.8z M49.9,56.8c-2.2,1.3-6-0.1-10.5-3.7c-0.9-0.7-1.8-1.5-2.6-2.4c1.9-2,3.8-4.4,5.6-7c3.2-0.3,6.1-0.7,8.9-1.3C53.1,49.9,52.5,55.3,49.9,56.8z M53.3,38.8c-0.8-2.7-1.9-5.5-3.3-8.4c1.3-2.8,2.4-5.6,3.2-8.3c7.4,2.1,11.8,5.3,11.8,8.4C65.1,33.4,60.7,36.7,53.3,38.8z'} /><g><path fill={'#6FCEEF'} d={'M79.2,31.8v10.8h-5.4v-27H84c3.1,0,5.5,0.7,7.2,2.1c1.7,1.4,2.6,3.4,2.6,5.9c0,1.4-0.4,2.6-1.1,3.6c-0.7,1-1.8,1.8-3.2,2.4c1.6,0.5,2.7,1.3,3.4,2.4c0.7,1.1,1,2.5,1,4.1v2c0,0.8,0.1,1.5,0.3,2.4c0.2,0.8,0.6,1.4,1,1.8v0.4h-5.6c-0.5-0.4-0.8-1.1-1-2s-0.2-1.8-0.2-2.6v-1.9c0-1.3-0.4-2.4-1.1-3.1c-0.7-0.7-1.8-1.1-3.1-1.1H79.2z M79.2,27.7h4.7c1.5,0,2.7-0.3,3.4-1c0.7-0.6,1.1-1.6,1.1-2.9c0-1.2-0.4-2.2-1.1-3c-0.7-0.7-1.9-1.1-3.3-1.1h-4.8V27.7z'} /><path fill={'#6FCEEF'} d={'M107.3,43c-2.9,0-5.2-0.9-6.9-2.8c-1.7-1.9-2.6-4.2-2.6-7.1v-0.7c0-3,0.8-5.4,2.5-7.4c1.6-1.9,3.8-2.9,6.6-2.9c2.7,0,4.8,0.8,6.3,2.4c1.5,1.6,2.2,3.8,2.2,6.6v3h-12l0,0.1c0.1,1.3,0.5,2.4,1.3,3.3c0.8,0.9,1.9,1.3,3.2,1.3c1.2,0,2.2-0.1,3-0.4c0.8-0.2,1.7-0.6,2.6-1.1l1.5,3.3c-0.8,0.7-1.9,1.2-3.2,1.7C110.4,42.8,109,43,107.3,43z M106.9,26.4c-1,0-1.8,0.4-2.4,1.2c-0.6,0.8-0.9,1.8-1.1,3l0.1,0.1h6.6v-0.5c0-1.2-0.3-2.1-0.8-2.8C108.8,26.7,108,26.4,106.9,26.4z'} /><path fill={'#6FCEEF'} d={'M130.4,42.6c-0.2-0.5-0.4-0.9-0.5-1.4c-0.1-0.5-0.2-1-0.3-1.6c-0.6,1-1.3,1.8-2.2,2.4c-0.9,0.6-2,1-3.3,1c-2.1,0-3.7-0.5-4.9-1.6c-1.1-1.1-1.7-2.6-1.7-4.4c0-2,0.8-3.5,2.3-4.6c1.5-1.1,3.7-1.6,6.6-1.6h3v-1.6c0-1-0.3-1.7-0.8-2.2c-0.5-0.5-1.3-0.8-2.2-0.8c-0.9,0-1.6,0.2-2,0.6c-0.5,0.4-0.7,1-0.7,1.8l-5.2,0l0-0.1c-0.1-1.7,0.6-3.2,2.2-4.4c1.6-1.2,3.6-1.8,6.1-1.8c2.4,0,4.3,0.6,5.8,1.8c1.5,1.2,2.2,3,2.2,5.2v8.3c0,0.9,0.1,1.8,0.2,2.7c0.1,0.8,0.4,1.7,0.7,2.5H130.4z M125.4,39c1,0,1.8-0.2,2.5-0.7c0.7-0.5,1.2-1,1.5-1.6v-2.8h-3c-1.2,0-2,0.3-2.6,0.9c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.7,0.2,1.2,0.7,1.6S124.6,39,125.4,39z'} /><path fill={'#6FCEEF'} d={'M147.4,38.9c1,0,1.7-0.3,2.3-0.8c0.6-0.6,0.9-1.3,0.9-2.2h4.9l0.1,0.1c0,2-0.7,3.7-2.3,5.1c-1.6,1.4-3.5,2-5.9,2c-3,0-5.3-0.9-6.9-2.8c-1.6-1.9-2.4-4.3-2.4-7.3v-0.6c0-3,0.8-5.4,2.4-7.3c1.6-1.9,3.9-2.9,6.9-2.9c2.5,0,4.5,0.7,6,2.1c1.5,1.4,2.2,3.3,2.2,5.6l0,0.1h-4.9c0-1-0.3-1.9-0.9-2.6c-0.6-0.7-1.4-1-2.4-1c-1.4,0-2.4,0.6-3,1.7c-0.6,1.1-0.9,2.5-0.9,4.3v0.6c0,1.8,0.3,3.2,0.9,4.3C144.9,38.3,146,38.9,147.4,38.9z'} /><path fill={'#6FCEEF'} d={'M165.1,17.6v4.9h3.4v3.8h-3.4v10.2c0,0.8,0.2,1.3,0.5,1.7c0.3,0.3,0.8,0.5,1.3,0.5c0.3,0,0.5,0,0.7,0c0.2,0,0.4-0.1,0.7-0.2l0.5,3.9c-0.5,0.2-1.1,0.3-1.6,0.4c-0.5,0.1-1.1,0.1-1.7,0.1c-1.9,0-3.3-0.5-4.3-1.5c-1-1-1.5-2.7-1.5-4.9V26.4h-2.9v-3.8h2.9v-4.9H165.1z'} /></g>
            </svg>
          </div>

          <p>Thanks for using the  DevExtreme React App Template.</p>
          <UserProfile />
        </div>
      </div>
    </React.Fragment>
)}

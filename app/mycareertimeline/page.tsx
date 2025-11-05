import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from "next/image";

export default function MyCarerTimeLine() {
  return (
    <>
    <h2 className=" p-8  mx-auto container text-2xl font-bold" id="education">学歴・職歴</h2>
     
    <Timeline position="alternate">

      <TimelineItem>
      
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector className='h-40' />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex items-center space-x-4 border border-blue-500 p-2 rounded-xl shadow-xl mr-34 '>
              <Image
                src="/university.jpeg" 
                alt="university icon" 
                className='w-15 h-15 rounded-full object-cover'
                width={60}
                height={60}
              />
              <div>
                <p>2014年7月 - 2018年6月 中国河南省農業大学　　動物科学</p>
              </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector className='h-20' />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex items-center space-x-4 border border-blue-500 p-2 rounded-xl shadow-xl ml-34 '>
              <div>
                <p>2018年7月 - 2021年5月 内モンゴル伊利実業集団有限公司</p>
              </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* <TimelineItem>
      
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector className='h-20' />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex items-center space-x-4 border border-blue-500 p-2 rounded-xl shadow-xl mr-32 '>
              <div>
                <p>2019年3月 - 2021年5月 河南省中政華図教育科技有限公司</p>
              </div>
          </div>
        </TimelineContent>
      </TimelineItem> */}





      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector className='h-40' />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex items-center space-x-4 border border-blue-500 p-2 rounded-xl shadow-xl mr-32'>
              <Image
                src="/TCCICon.jpeg" 
                alt="university icon" 
                className='w-15 h-15 rounded-full object-cover'
                width={60}
                height={60}
              />
              <div>
                <p>2022年7月 - 2024年3月 　TCC日本語学校</p>
              </div>
          </div>
        </TimelineContent>
      </TimelineItem>

     <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex items-center space-x-4 border border-blue-500 p-2 rounded-xl shadow-xl ml-32 '>
              <Image 
                src="/nihonndennshi.jpeg" 
                alt="university icon" 
                className='w-15 h-15 rounded-full object-cover'
                width={60}
                height={60}
              />
              <div>
                <p>2024年4月 - 2026年3月 日本電子専門学校　　Webデザイン科</p>
              </div>
          </div>

        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </>
  );
  
}
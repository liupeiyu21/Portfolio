
// import MyComponent from "./simp/page"

import MyInformation from "./myinfomation/page";
import MyCarerTimeLine from "./mycareertimeline/page";
import MySkill from "./myskill/page";

import MyWork from "./work/page";
import AfterClassWork from "./afterclasswork/page";




export default function Home() {
  return (
      <>
      <MyInformation />
      <main className="  bg-blue-50">
        <MyCarerTimeLine />
        <MySkill />
        <MyWork />
        <AfterClassWork />
      </main>
     
          </>
  );
}

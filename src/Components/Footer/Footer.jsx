import React from 'react';

function Footer () {
  // Create a new Date object
  const currentDate = new Date();
  // Extracting various date and time components
  const year  = currentDate.getFullYear() // 2024
  const date   = currentDate.getDate();   // Today date
  // Month convert digital to string
  const monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthIndex = currentDate.getMonth()  // Using Index start from 0 ==> 2
  const currentMonth = monthName[monthIndex];     // March (2nd index == 0, 1, 2)

  const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    console.log('Hours:' , hours);
    console.log('Minutes:' , minutes);
    console.log('Seconds:' , seconds);
  
  return (
        <>
        <div className='footerWrapper'>
          <footer>
            <div className='footerWrap bg-dark text-white text-center p-2'>
              {/* My app &#169; created in 25 / 03 / 2024 , All Rights Reserved */}
              
              My app &#169; created in {date} {currentMonth} {year}, All Rights Reserved Current Time :: {hours}:{minutes}:{seconds}
              
            </div>
          </footer>
        </div>
        
        </>
    );
}
export default Footer;
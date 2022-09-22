import moment from 'moment-timezone'


export const timer = (
  limitTime, 
  eachCallback = () => null, 
  endCallback,
  
) => {
  let interval = setInterval(function(){
    let now = moment().valueOf();
    let timeleft = limitTime - now;

    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    eachCallback(minutes, seconds)

    if (timeleft < 0) {
      clearInterval(interval);
      endCallback();
    }
  }, 1000)

  return interval
}

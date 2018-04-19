import moment from 'moment'

class UtilityService{
    parseIntegerToTime(time){
       // return [parseInt(seconds / 60 / 60, 10), parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)].join(':').replace(/\b(\d)\b/g, '0$1');
   //     return parseInt(value/60,10) + ':' + value%60 
        let videoTime = parseInt(time, 10);
        videoTime = [parseInt(((videoTime / 60) % 60), 10), parseInt(videoTime % 60, 10)].join(':').replace(/\b(\d)\b/g, '0$1');
        return videoTime;
    }

    secondsToHours(seconds){
        return [parseInt(seconds / 60 / 60, 10), parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)].join(':').replace(/\b(\d)\b/g, '0$1');
    }

    displayDate(timestamp) {
        var unixtime = timestamp;
        var newDate = new Date();
        newDate.setTime(unixtime * 1000);
        var dateString = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' ' + this.formatAMPM(newDate);
        return dateString;
    }

    getDateAndTime(date){
        let newDate = new Date(date);
        return newDate = newDate.toString().substring(4, 24);
    }

    convertTimeToSec(value){
        let a = value.split(":")
        let totalSeconds = parseInt(a[0] * 3600,10) + parseInt(a[1] * 60,10) + parseInt(a[2],10)
       return parseInt(totalSeconds ,10)
    }

    get geturlparam(){
        return window.location.pathname.split('/')
    }

    getCurrentTimeDuration(dateAndtime){
        let offset = moment().utcOffset();
        let getCurrentLocalTime = moment.utc(dateAndtime).utcOffset(offset).format();
        return  moment(getCurrentLocalTime, "YYYY-MM-DD hh:mm:ss +ZZ").fromNow()
    }
}

export default new UtilityService();
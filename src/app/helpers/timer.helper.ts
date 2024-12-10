
export class TimeHelper {

  countDown(remainTime: number) {
    const days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainTime % (1000 * 60)) / 1000);

    return {
      days: days < 10 ? '0' + days : days,
      hours: hours < 10 ? '0' + hours : hours,
      minutes: minutes < 10 ? '0' + minutes : minutes,
      seconds: seconds < 10 ? '0' + seconds : seconds,
    };
  }

}

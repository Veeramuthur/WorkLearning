
export class TimeUtility {

    static getMonthsfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();

        const yearDiff = currentData.getFullYear() - inputDate.getFullYear();
        const monthDiff = currentData.getMonth() - inputDate.getMonth();
        return Math.abs(yearDiff * 12 + monthDiff);
    }

    static getWeeksfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();
        const dayDiff = (currentData.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24);
        return Math.abs(Math.ceil(dayDiff / 7));
    }

    static getDaysfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();
        const dayDiff = (currentData.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24);
        return Math.abs(Math.ceil(dayDiff));
    }

    static getHoursfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();
        const hoursDiff = (currentData.getTime() - inputDate.getTime()) / (1000 * 60 * 60);
        return Math.abs(Math.ceil(hoursDiff));
    }

    static getMinutesfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();
        const minutesDiff = (currentData.getTime() - inputDate.getTime()) / (1000 * 60);
        return Math.abs(Math.ceil(minutesDiff));
    }

    static getSecondsfromCurrentDate(datetimesec: string): number {
        const inputDate = new Date(datetimesec);
        const currentData = new Date();
        const secondsDiff = (currentData.getTime() - inputDate.getTime()) / 1000;
        return Math.abs(Math.ceil(secondsDiff));
    }


}
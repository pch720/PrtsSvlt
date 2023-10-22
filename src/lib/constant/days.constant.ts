export const DAYS= {
    SUNDAY    : "일",
    MONDAY    : "월",
    TUESDAY   : "화",
    WEDNESDAY : "수",
    THURSDAY  : "목",
    FRIDAY    : "금",
    SATURDAY  : "토"
} as const;

export type Day = typeof DAYS[keyof typeof DAYS];

export const getDays = () => {
    return [DAYS.SUNDAY, DAYS.MONDAY, DAYS.TUESDAY, DAYS.WEDNESDAY, DAYS.THURSDAY, DAYS.FRIDAY, DAYS.SATURDAY];
}
<script>
    import { onMount } from 'svelte' // 컴포넌트가 실행될 때 호출되는 함수
    onMount(() => {
        buildCalendar();
    })

    const days = ["일", "월", "화", "수", "목", "금", "토"];

    let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
    let today = new Date();     // 페이지를 로드한 날짜를 저장
    today.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화
    let calYear = "";
    let calMonth = "";
    let thisMonCal = [""];
    // 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
    function buildCalendar() {
console.log("현재 날짜 : "+nowMonth)
        let strDay = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
        let finDay = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날
        thisMonCal = [];  // 현재 선택된 달 요소 초기화
        for (let i = 0 ; i < strDay.getDay() ; i++)
            thisMonCal.push("");
        for (let i = strDay.getDate(); i < finDay.getDate()+1 ; i++)
            thisMonCal.push(i.toString());
        console.log(thisMonCal)

        calYear = nowMonth.getFullYear().toString();   // 연도 숫자 갱신
        calMonth = nowMonth.getMonth() <9 ? "0" + (nowMonth.getMonth() + 1) : (nowMonth.getMonth() + 1).toString(); // 월 숫자 갱신


            // if (nowDay < today) {                       // 지난날인 경우
            //     nowColumn.className = "pasdivay";
            // }
            // else if (nowDay.getFullYear() === today.getFullYear() && nowDay.getMonth() === today.getMonth() && nowDay.gedivate() === today.gedivate()) { // 오늘인 경우
            //     nowColumn.className = "today";
            //     nowColumn.onclick = function () { choiceDate(this); }
            // }
            // else {                                      // 미래인 경우
            //     nowColumn.className = "futureDay";
            //     nowColumn.onclick = function () { choiceDate(this); }
            // }
        //}
    }

    // 날짜 선택
    function choiceDate(nowColumn) {
        if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
            document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
        }
        nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
    }

    // 이전달 버튼 클릭
    function prevCalendar() {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1);   // 현재 달을 1 감소
        buildCalendar();    // 달력 다시 생성
    }
    // 다음달 버튼 클릭
    function nextCalendar() {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1);   // 현재 달을 1 증가
        buildCalendar();    // 달력 다시 생성
    }
</script>

<body>
    <div>
        <button on:click={prevCalendar}>&#60;</button>
        <span>{calYear}</span>년
        <span>{calMonth}</span>월
        <button on:click={nextCalendar}>&#62;</button>
    </div>
    <div>
        {#each days as day}
            <span>{day}</span>
        {/each}
    </div>
    <div>
        {#each thisMonCal as date, i}
            {#if i%7 === 0 && date}
                <span style="color: blue">{date}</span>
                <br/>
            {:else if i%7 === 1} <span style="color: red">{date}</span>
            {:else} <span>{date}</span>
            {/if}
        {/each}
    </div>
</body>
<style>
    div span{
        width: 10rem;
    }
</style>
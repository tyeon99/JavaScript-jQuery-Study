// 1 ~ 100까지의 합계
var sum = 0;    // 누적할 값
var i = 1;

// do-while문은 while문의 파생된 것으로 초기값, 조건식, 증감식이 따로 떨어져 있으므로
// for문에 비하여 반복횟수를 가지고 루핑을 한다면 오히려 가독성이 떨어진다.
// do-while문은 사용자에게 의사를 먼저 한 번 물어보고 루핑을 할지 말지 결정하는
// 프로그램 전용으로 사용한다.
// do-while문은 최소 1번은 실행한다.(조건식이 뒤에 있기 때문)
do{
    sum += i;   // 복합대입연산자를 이용하여 값을 누적한다.
    document.write(i + ", " + sum + "<br/>");
    i++;
}
while(i <= 100){
    document.write("1~" + (i - 1) + "까지의 합" + sum);
}


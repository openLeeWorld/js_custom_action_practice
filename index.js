// simple demo file for javascript github action
const core = require('@actions/core');
const github = require('@actions/github'); // 액션 툴킷 모듈

try {
    // `arguments-to-count` input defined in action metadata file
    const inputArgs = core.getInput('arguments-to-count'); // 입력 매개변수 참조
    console.log(`Arguments = ${inputArgs}!`);
    const argCount = inputArgs.split(/\s+/).length; // 매개변수를 공백 단위로 끊어서 셈
    core.setOutput("argCount", argCount) // 출력 매개변수 참조
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2) 
    // 워크플로우를 트리거한 이벤트에 대한 정보를 얻음
    console.log(`The event payload: ${payload}`)
} catch (error) {
    core.setFailed(error.message); // 오류 메시지 로그를 남기고 '실패 종료' 코드를 설정
}
//@ts-check

/**
 *  프로젝트 초기화 시 사용
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns  number
 */
export function exit(code) {
  return code + 1;
}

//@ts-check  : 자바스크립트 파일에도 타입스크립트의 파일 체크 옵션을 실행 시킬 수 있음
//@ts-ignore : ts-check 으로 발생하는 오류를 억제 (?) 하는데 사용  / 오류를 무시함
//@ts-nocheck : 자바스크립트 파일의 파일 체크 옵션을 시행하지 않음

// /** */ 를 통해서 JS DOC을 불러 올 수 있으며, JS DOC을 통해 자바스크립트 코드의 파라미터들의 타입을 확인 및 검증 받을 수 있고, 자바스크립트 코드에 대한 설명을 해줄 수 있음.
//  설명을 원하는 코드의 상단에 JS DOC을 입력해 주면 된다.

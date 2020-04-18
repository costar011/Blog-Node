const delBtnHandler = btn => {
  const answer = confirm("정말 해당 포스팅을 삭제하시겠습니까?");

  if (answer) {
    btn.parentNode.submit();
  } else {
    return;
  }
};

const wirteBtnHandler = () => {
  const frm = document.getElementById("writeFrm-js");

  frm.submit();
};

document.querySelectorAll(".list")[0].addEventListener("click", function(e){
    tabBtn(e.target.dataset.id);
});

// list에서 click이 발생하면 방금 클릭한 e.target.dataset.그것의 id값을 가져와서 넣어준다.

function tabBtn(a){
            for(let i=0; i<document.querySelectorAll(".tab-button").length; i++) {

                document.querySelectorAll(".tab-button")[i].classList.remove("here");
                document.querySelectorAll(".tab-content")[i].classList.remove("show");
            }

            document.querySelectorAll(".tab-button")[a].classList.add("here");
            document.querySelectorAll(".tab-content")[a].classList.add("show");
        };

/* 쿼리 셀렉터로 [a]를 받아온다. addEventListener를 통해 i가 탭버튼 길이만큼 하나씩 늘어나고 
그 결과 i번째 모든 here과 show를 없앤다.
그 다음에는 클릭을 받은 각각의 탭버튼과 탭컨텐츠가 here과 show를 가지게 됨.
a에는 
<li class="tab-button" data-id="0">Dog</li>
<li class="tab-button" data-id="1">Tiger</li>
<li class="tab-button" data-id="2">Bear</li>
data-id인 0, 1, 2 중에 클릭된 것이 인자로 들어가게 됨. */
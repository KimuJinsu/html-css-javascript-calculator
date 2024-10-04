아래는 계산기 css 코드입니다:

```css
/* 계산기 뒤에 배경색깔 */
body {
    background-color: #000000; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

/* 계산기 틀 디자인 */
.calculator {
    width: 400px;
    background-color: #c2b6b6;
    padding: 25px;
    border-radius: 30px; /*굴곡지게하기*/
}

/* 숫자나오는칸 창조절 */
#display {
    width: 95%;
    height: 50px;
    font-size: 2em;
    text-align: right;
    margin-bottom: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px; /*굴곡*/
    background-color: #222;
    color: #fff;
}

/* 버튼 */
.buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px; /*버튼끼리간격*/
}

/* 버튼 스타일 */
button {
    height: 60px;
    font-size: 1.5em;
    border: none;
    border-radius: 10px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* 버튼누를때 번쩍 */
button:hover {
    background-color: #555;
}

/*HEX랑 DEC 색깔*/
button:nth-child(2),
button:nth-child(3) {
    background-color: #ffa600; 
}

.hexdex:hover {
    background-color: #fff347; 
}


button:nth-child(4) {
    background-color: #ff0000; 
}

.clear:hover {
    background-color: #ff477e; 
}



button:nth-child(5),
button:nth-child(10),
button:nth-child(15),
button:nth-child(20)  {
    background-color: #00a2ff; 
}

.operation:hover {
    background-color: #477eff; 
}


button:nth-last-child(2){
    background-color: #3221cf; 
}

.erase:hover {
    background-color: #b847ff; 
}


button:nth-last-child(1){
    background-color: #ef02d3; 
}

.equal:hover {
    background-color: #ff478a; 
}


/*ABCDE 색깔*/
button:nth-last-child(25),
button:nth-last-child(20),
button:nth-last-child(15),
button:nth-last-child(10),
button:nth-last-child(5),
button:nth-last-child(4) {
    background-color: #ff6347; 
}

.hex:hover {
    background-color: #ffa047; 
}


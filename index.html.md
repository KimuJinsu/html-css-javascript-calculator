아래는 계산기 HTML 코드입니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width", initial-scale="1.0">
    <title>계산기</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button class="hex" onclick="input('A')">A</button>
            <button class="hexdex" onclick="convertToHex()">HEX</button>
            <button class="hexdex" onclick="convertToDec()">DEC</button>
            <button class="clear" onclick="clearDisplay()">AC</button>
            <button class="operation" onclick="input('/')">÷</button>
            <button class="hex" onclick="input('B')">B</button>
            <button onclick="input('7')">7</button>
            <button onclick="input('8')">8</button>
            <button onclick="input('9')">9</button>
            <button class="operation" onclick="input('*')">×</button>
            <button class="hex" onclick="input('C')">C</button>
            <button onclick="input('4')">4</button>
            <button onclick="input('5')">5</button>
            <button onclick="input('6')">6</button>
            <button class="operation" onclick="input('-')">-</button>
            <button class="hex" onclick="input('D')">D</button>
            <button onclick="input('1')">1</button>
            <button onclick="input('2')">2</button>
            <button onclick="input('3')">3</button>
            <button class="operation" onclick="input('+')">+</button>
            <button class="hex" onclick="input('E')">E</button>
            <button class="hex" onclick="input('F')">F</button>
            <button onclick="input('0')">0</button>
            <button class="erase" onclick="deleteLast()">←</button>
            <button class="equal"onclick="calculateResult()">=</button>

        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

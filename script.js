// =========================================================================
// ТОЛЫҚ 71 СҰРАҚ ЖӘНЕ ЖАУАПТАР (Жаңартылған)
// =========================================================================

// ВНИМАНИЕ: Все 71 вопросов в этом массиве будут перемешиваться при каждом запуске теста.
const quizQuestions = [
    // --- 1. ЖОЛДАР ЖӘНЕ ОПЕРАЦИЯЛАР (1-11) ---
    { question: 'Жолдағы \\n не істейді?', options: ['Жаңа жолға көшу', 'Бос орын қосу', 'Табуляция қосу', 'Таңбаны өшіру', 'Жолды жуандату'], correctAnswer: 'Жаңа жолға көшу' },
    { question: 'Жолдар үшін * операциясы не істейді?', options: ['Жолды көбейтеді', 'Жолдарды біріктіреді', 'Жолды санға айналдырады', 'Қате', 'Таңбаларды өшіреді'], correctAnswer: 'Жолды көбейтеді' },
    { question: "'abc' in 'abcdef' не қайтарады?", options: ['True', 'False', 'Қате', "'abc'", 'None'], correctAnswer: 'True' },
    { question: 'Қай әдіс жолдарды қауіпсіз форматтайды?', options: ['f-жолдар', '%', 'format()', '+', 'str()'], correctAnswer: 'f-жолдар' },
    { question: 'upper() әдісі не істейді?', options: ['Барлық әріпті бас әріпке айналдырады', 'Барлық әріпті кіші әріпке айналдырады', 'Бос орындарды өшіреді', 'Жолды бөледі', 'Алғашқы әріпті бас әріпке айналдырады'], correctAnswer: 'Барлық әріпті бас әріпке айналдырады' },
    { question: 'strip() әдісі не істейді?', options: ['Жолдың басы мен соңындағы бос орындарды алып тастайды', 'Жолды бөледі', 'Бас әріпке айналдырады', 'Таңбаларды ауыстырады', 'Барлық бос орындарды өшіреді'], correctAnswer: 'Жолдың басы мен соңындағы бос орындарды алып тастайды' },
    { question: "replace('a','b') не істейді?", options: ["'a' таңбасының барлық occurrences 'b'-ге ауыстырады", "'a' таңбасын өшіреді", "'b' таңбасын табады", 'Қате', "Тек бірінші 'a' таңбасын ауыстырады"], correctAnswer: "'a' таңбасының барлық occurrences 'b'-ге ауыстырады" },
    { question: "split(',') не істейді?", options: ['Жолды үтір арқылы бөледі', 'Жолдарды біріктіреді', 'Үтірлерді өшіреді', 'Қате', 'Жолды екі сөзге бөледі'], correctAnswer: 'Жолды үтір арқылы бөледі' },
    { question: 'Жол тек цифрлардан тұратынын қалай тексеруге болады?', options: ['s.isdigit()', 's.isalpha()', 's.isnumeric()', 's.isalnum()', 's.isdecimal()'], correctAnswer: 's.isdigit()' },
    { question: 's.lower() не істейді?', options: ['Кіші әріпке айналдырады', 'Бас әріпке айналдырады', 'Тек алғашқы әріптерді өзгертеді', 'Қате', 'Бос орындарды өшіреді'], correctAnswer: 'Кіші әріпке айналдырады' },
    { question: 's.title() не істейді?', options: ['Әр сөздің алғашқы әрпін бас әріпке айналдырады', 'Барлық әріпті бас әріпке айналдырады', 'Барлық әріпті кіші әріпке айналдырады', 'Қате', 'Тек жолдың бірінші әрпін бас әріпке айналдырады'], correctAnswer: 'Әр сөздің алғашқы әрпін бас әріпке айналдырады' },
    
    // --- 2. БАЙТТАР ЖӘНЕ ШИФРЛАУ (12-14) ---
    { question: 'Python-дағы b"hello" не?', options: ['Байттар (bytes)', 'Жол', 'Bytearray', 'Тізім', 'Кортеж'], correctAnswer: 'Байттар (bytes)' },
    { question: 'bytearray(b"hello") не істейді?', options: ['Өзгертілетін байттар тізбегін жасайды', 'Жасау мүмкін емес', 'Жол жасайды', 'Қате', 'Байттар кортежін жасайды'], correctAnswer: 'Өзгертілетін байттар тізбегін жасайды' },
    { question: 'Жолды XOR операциясы арқылы шифрлау не істейді?', options: ['Әр символды кілт бойынша басқа символға ауыстырады', 'Символдарды біріктіреді', 'Жолды байттарға айналдырады', 'Бос орындарды өшіреді', 'Символдарды қосады'], correctAnswer: 'Әр символды кілт бойынша басқа символға ауыстырады' },

    // --- 3. РЕГУЛЯРЛЫҚ ӨРНЕКТЕР (15-29) ---
    { question: 'Регулярлық өрнекте . (нүкте) не білдіреді?', options: ['Кез келген бір символ', 'Жолдың соңы', 'Бос орын', 'Жолдың басы', 'Тек цифра'], correctAnswer: 'Кез келген бір символ' },
    { question: '\\d не білдіреді?', options: ['Кез келген цифра', 'Кез келген әріп', 'Кез келген символ', 'Бос орын', 'Әріп немесе цифра'], correctAnswer: 'Кез келген цифра' },
    { question: '\\w не білдіреді?', options: ['Әріптер, цифралар және _', 'Кез келген символ', 'Тек әріптер', 'Тек цифралар', 'Тек бос орын таңбалары'], correctAnswer: 'Әріптер, цифралар және _' },
    { question: '* символдан кейін не білдіреді?', options: ['0 немесе одан көп рет қайталану', 'Тек 1 рет', '1 немесе одан көп рет', 'Кез келген символ', 'Дәл 2 рет'], correctAnswer: '0 немесе одан көп рет қайталану' },
    { question: '+ символдан кейін не білдіреді?', options: ['1 немесе одан көп рет', '0 немесе одан көп рет', 'Тек 1 рет', 'Кез келген символ', '0 немесе 1 рет'], correctAnswer: '1 немесе одан көп рет' },
    { question: 'Алғашқы сәйкестікті қалай табамыз?', options: ['re.search()', 're.findall()', 're.match()', 're.sub()', 're.split()'], correctAnswer: 're.search()' },
    { question: 'Барлық сәйкестіктерді қалай табамыз?', options: ['re.findall()', 're.search()', 're.match()', 're.sub()', 're.compile()'], correctAnswer: 're.findall()' },
    { question: "re.sub(r'\\d', '#', text) не істейді?", options: ['Барлық цифрларды # таңбасына ауыстырады', 'Барлық цифрларды өшіреді', 'Алғашқы цифраны табады', 'Жол тек цифрадан тұратынын тексереді', 'Регистрді өзгертеді'], correctAnswer: 'Барлық цифрларды # таңбасына ауыстырады' },
    { question: 're.match(pattern, string) не істейді?', options: ['Жолдың шаблонмен басталатынын тексереді', 'Бүкіл жол бойынша іздейді', 'Шаблонды ауыстырады', 'Соңғы жолшықты іздейді', 'Соңынан сәйкестік іздейді'], correctAnswer: 'Жолдың шаблонмен басталатынын тексереді' },
    { question: "re.split(r'\\s+', text) не істейді?", options: ['Жолды бос орын арқылы сөздерге бөледі', 'Барлық бос орындарды табады', 'Сөздерді біріктіреді', 'Бос орындарды өшіреді', 'Сөздерді өшіреді'], correctAnswer: 'Жолды бос орын арқылы сөздерге бөледі' },
    { question: 'Регулярлық өрнекте ^ не білдіреді?', options: ['Жолдың басы', 'Кез келген символ', 'Жолдың соңы', 'Цифра', 'Таңбаларды жоққа шығару'], correctAnswer: 'Жолдың басы' },
    { question: '$ не білдіреді?', options: ['Жолдың соңы', 'Жолдың басы', 'Кез келген символ', 'Цифра', 'Айнымалыны жариялау'], correctAnswer: 'Жолдың соңы' },
    { question: 'Қай әдіс match (сәйкестік) объектісін қайтарады?', options: ['re.search()', 're.findall()', 're.sub()', 're.split()', 're.query()'], correctAnswer: 're.search()' },
    { question: 're.escape(text) не істейді?', options: ['Арнайы символдарды экранирлейді', 'Бос орындарды өшіреді', 'Әріптерді бас әріпке айналдырады', 'Сәйкестіктерді іздейді', 'Арнайы символдарды өшіреді'], correctAnswer: 'Арнайы символдарды экранирлейді' },
    { question: 'Жолдың шаблонға толық сәйкестігін қалай тексереміз?', options: ['re.fullmatch()', 're.search()', 're.findall()', 're.match()', 're.exact()'], correctAnswer: 're.fullmatch()' },
    
    // --- 4. ТІЗІМДЕР, КОРТЕЖДЕР ЖӘНЕ ЖИНДАР (30-46) ---
    { question: 'Бос тізімді қалай жасауға болады?', options: ['list = []', 'list = {}', 'list = ()', 'list = set()', 'list = array()'], correctAnswer: 'list = []' },
    { question: 'Тізім соңына элементті қалай қосамыз?', options: ['lst.append(5)', 'lst.add(5)', 'lst.insert(0,5)', 'lst.extend(5)', 'lst.push(5)'], correctAnswer: 'lst.append(5)' },
    { question: 'Тізімнің соңғы элементін қалай аламыз?', options: ['lst[-1]', 'lst[0]', 'lst[len(lst)]', 'lst.last()', 'lst.end()'], correctAnswer: 'lst[-1]' },
    { question: 'Кездейсоқ элементті қалай таңдаймыз?', options: ['random.choice(lst)', 'lst.sample()', 'lst.random()', 'choice(lst)', 'random.pick(lst)'], correctAnswer: 'random.choice(lst)' },
    { question: 'Мәні бойынша жою?', options: ['lst.remove(value)', 'lst.pop(value)', 'del lst[value]', 'lst.delete(value)', 'lst.discard(value)'], correctAnswer: 'lst.remove(value)' },
    { question: 'tuple([1,2,3]) не қайтарады?', options: ['(1,2,3)', '[1,2,3]', '{1,2,3}', 'Қате', '<1,2,3>'], correctAnswer: '(1,2,3)' },
    { question: 'set([1,2,2,3]) не қайтарады?', options: ['{1,2,3}', '[1,2,2,3]', '(1,2,2,3)', 'Қате', '(1,2,3)'], correctAnswer: '{1,2,3}' },
    { question: '0–9 диапазоны?', options: ['range(10)', 'range(0,10,1)', 'range(1,10)', 'range(0,9)', 'range(0,10,0)'], correctAnswer: 'range(10)' },
    { question: 'zip([1,2],[3,4]) не қайтарады?', options: ['[(1,3),(2,4)]', '[(1,2),(3,4)]', '[(1,4),(2,3)]', 'Қате', '[[1,3],[2,4]]'], correctAnswer: '[(1,3),(2,4)]' },
    { question: 'filter жұп сандар үшін:', options: ['filter(lambda x: x%2==0, lst)', 'filter(lambda x: x%2!=0, lst)', 'lst.filter(...)', 'lst.select(...)', 'filter(x % 2 == 0)'], correctAnswer: 'filter(lambda x: x%2==0, lst)' },
    { question: 'Квадраттар генераторы:', options: ['[x**2 for x in range(1,6)]', 'x**2 for x in range(1,6)', '(x**2 for x in range(1,6))', 'list(x**2 for x in range(1,5))', '{x**2 for x in range(1,6)}'], correctAnswer: '[x**2 for x in range(1,6)]' },
    { question: 'Кему бойынша сұрыптау?', options: ['lst.sort(reverse=True)', 'sorted(lst, reverse=False)', 'lst.sort()', 'lst.sorted(reverse=True)', 'lst.reverse_sort()'], correctAnswer: 'lst.sort(reverse=True)' },
    { question: 'reduce(lambda x,y: x+y,[1,2,3,4]) не қайтарады?', options: ['10', '24', 'Қате', '20', '[1,2,3,4]'], correctAnswer: '10' },
    { question: "['a','b','c'] тізімін - арқылы біріктіру?", options: ["'-'.join(lst)", "lst.join('-')", "str(lst,'-')", "''.join(lst,'-')", "join(lst,'-')"], correctAnswer: "'-'.join(lst)" },
    { question: '2×3 өлшемді нөлдер массиві?', options: ['[[0]*3]*2', '[0][2,3]', 'zeros(2,3)', '[0,0,0]*2', 'matrix(2,3,0)'], correctAnswer: '[[0]*3]*2' },
    { question: 'range(1,10,2) не қайтарады?', options: ['[1,3,5,7,9]', '[1,2,3,4,5,6,7,8,9]', '[1,2,4,6,8]', '[2,4,6,8,10]', '[1,2,3,4,5]'], correctAnswer: '[1,3,5,7,9]' },
    { question: 'Тізім ұзындығы?', options: ['len(lst)', 'lst.length()', 'lst.size()', 'size(lst)', 'lst.count_all()'], correctAnswer: 'len(lst)' },
    
    // --- 5. СӨЗДІКТЕР (DICT) (47-56) ---
    { question: 'Бос сөздік:', options: ['dict = {}', 'dict = []', 'dict = ()', 'dict = set()', 'dict = map()'], correctAnswer: 'dict = {}' },
    { question: 'Қауіпсіз түрде мән алу:', options: ["d.get('a')", "d['a']", "d.value('a')", "d.fetch('a')", "d.try('a')"], correctAnswer: "d.get('a')" },
    { question: 'Кілттің бар-жоғын тексеру:', options: ["'a' in d", "d.has_key('a')", "d.exists('a')", "'a' in d.values()", "d.contains('a')"], correctAnswer: "'a' in d" },
    { question: 'Кілт–мән жұптарын аралау:', options: ['for k,v in d.items():', 'for k in d:', 'for k,v in d:', 'for v,k in d.items():', 'for k,v in d.pairs():'], correctAnswer: 'for k,v in d.items():' },
    { question: 'Кілтті өшіру:', options: ["del d['a']", "d.remove('a')", "d.popitem('a')", "d.delete('a')", "d.erase('a')"], correctAnswer: "del d['a']" },
    { question: "d.pop('a') не істейді?", options: ['Кілтті өшіріп, мәнін қайтарады', 'Соңғы элементті өшіреді', 'Барлық элементтерді өшіреді', 'Бар-жоғын тексереді', 'Кілтті қайтарады'], correctAnswer: 'Кілтті өшіріп, мәнін қайтарады' },
    { question: 'Сөздік генераторы:', options: ['{k:v for k,v in iterable}', '[k:v for k,v in iterable]', '(k:v for k,v in iterable)', 'dict(k:v for k,v in iterable)', 'dict[k:v for k,v in iterable]'], correctAnswer: '{k:v for k,v in iterable}' },
    { question: 'd.items() не қайтарады?', options: ['Кілт–мән жұптары бар dict_items объектісі', 'Кілттердің тізімі', 'Мәндердің тізімі', 'Сөздік', 'JSON объект'], correctAnswer: 'Кілт–мән жұптары бар dict_items объектісі' },
    { question: 'Кілтті қауіпсіз жою:', options: ["d.pop('key', None)", "d.remove('key')", "del d['key']", "d['key'] = None", "d.delete_safe('key')"], correctAnswer: "d.pop('key', None)" },
    { question: 'Екі тізімнен сөздік жасау:', options: ['dict(zip(keys, values))', 'dict(keys, values)', '{keys: values}', 'zip(keys, values)', 'dict(keys + values)'], correctAnswer: 'dict(zip(keys, values))' },

    // --- 6. ФУНКЦИЯЛАР ЖӘНЕ АРГУМЕНТТЕР (57-62) ---
    { question: 'Айнымалы саны шексіз позициялық аргументтерді беру:', options: ['*args', '**kwargs', '*kwargs', '**args', '@args'], correctAnswer: '*args' },
    { question: 'Айнымалы саны шексіз атаулы аргументтерді беру:', options: ['**kwargs', '*args', '*kwargs', '**args', '&&kwargs'], correctAnswer: '**kwargs' },
    { question: 'Аноним функция (lambda) не істейді?', options: ['Аты жоқ функцияны анықтайды', 'Рекурсивті функция анықтайды', 'Глобалды айнымалы анықтайды', 'Класс анықтайды', 'Кітапхана импорттайды'], correctAnswer: 'Аты жоқ функцияны анықтайды' },
    { question: 'Генератор функция не қайтарады?', options: ['Итератор', 'Тізім', 'Сан', 'Жол', 'Сөздік'], correctAnswer: 'Итератор' },
    { question: 'Функция декораторы не істейді?', options: ['Функцияның мінез-құлқын өзгертеді немесе кеңейтеді', 'Функцияны шақырады', 'Функцияны өшіреді', 'Глобалды айнымалы жасайды', 'Кодты компиляциялайды'], correctAnswer: 'Функцияның мінез-құлқын өзгертеді немесе кеңейтеді' },
    { question: 'Рекурсия арқылы факториалды қалай есептейміз?', options: ['def fact(n): return n * fact(n-1)', 'def fact(n): return n * fact(n+1)', 'def fact(n): return fact(n-1)', 'def fact(n): return n+fact(n-1)', 'def fact(n): return fact(n)*fact(n)'], correctAnswer: 'def fact(n): return n * fact(n-1)' },

    // --- 7. ҚАТЕЛЕР ЖӘНЕ ИТЕРАЦИЯ (63-64) ---
    { question: 'Барлық қателерді қалай ұстауға болады?', options: ['except:', 'except Exception:', 'except BaseException:', 'except Error:', 'except all'], correctAnswer: 'except Exception:' },
    { question: 'lst = [1,2,3] тізімінен итераторды қалай аламыз?', options: ['iter(lst)', 'lst.iterator()', 'lst.iter()', 'iterator(lst)', 'get_iter(lst)'], correctAnswer: 'iter(lst)' },

    // --- 8. ML НЕГІЗДЕРІ (65-71) ---
    { question: 'Scikit-learn деген не?', options: ['Машиналық оқытуға арналған кітапхана', 'Деректерді визуализациялау кітапханасы', 'Веб-фреймворк', 'Күн/уақыт модулі', 'Табиғи тіл өңдейтын кітапхана'], correctAnswer: 'Машиналық оқытуға арналған кітапхана' },
    { question: 'Деректерді оқыту және тестке бөлу әдісі?', options: ['train_test_split()', 'split_data()', 'fit()', 'transform()', 'test_train_split()'], correctAnswer: 'train_test_split()' },
    { question: 'Scikit-learn-де fit() не істейді?', options: ['Модельді деректерге үйретеді', 'Жаңа деректерге қолданады', 'Деректерді бөледі', 'Модельді файлға сақтайды', 'Модель сапасын есептейді'], correctAnswer: 'Модельді деректерге үйретеді' },
    { question: 'Жаңа деректерді болжау қалай жасалады?', options: ['model.predict(X)', 'model.fit(X)', 'model.transform(X)', 'model.score(X)', 'model.evaluate(X)'], correctAnswer: 'model.predict(X)' },
    { question: 'Scikit-learn-де transform() не істейді?', options: ['Алдын ала үйретілген түрлендіргішпен деректерді түрлендіреді', 'Модельді үйретеді', 'Болжам жасайды', 'Дәлдік есептейді', 'Деректерді бөледі'], correctAnswer: 'Алдын ала үйретілген түрлендіргішпен деректерді түрлендіреді' },
    { question: 'TensorFlow деген не?', options: ['Терең оқыту фреймворкі', 'Файлдармен жұмыс істеу модулі', 'Статистика модулі', 'Математикалық кітапхана', 'Визуализация құралы'], correctAnswer: 'Терең оқыту фреймворкі' },
    { question: 'TensorFlow-да оқыту деректерін не сақтайды?', options: ['Tensor', 'Variable', 'Model', 'Graph', 'Session'], correctAnswer: 'Tensor' }
];

// =========================================================================
// ВИКТОРИНА ЛОГИКАСЫ ЖӘНЕ ФУНКЦИЯЛАРЫ (ҚАЛҒАН БӨЛІГІ ӨЗГЕРІССІЗ)
// =========================================================================

let currentQuestionIndex = 0;
let score = 0;
// totalQuestionsCount жаңа массивтің ұзындығына (71-ге) автоматты түрде жаңартылады.
const totalQuestionsCount = quizQuestions.length; 

// DOM элементтері
const quizCard = document.getElementById('quiz-card');
const resultMessage = document.getElementById('result-message');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const currentQNumber = document.getElementById('current-q-number');
const restartButton = document.getElementById('restart-button');
const scoreDisplay = document.getElementById('score-display');

// Массив элементтерін рандомдау функциясы (Фишер-Йетс)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    resultMessage.classList.add('hidden');
    quizCard.innerHTML = '';
    
    // Тест аяқталды
    if (currentQuestionIndex >= totalQuestionsCount) {
        displayResults();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];
    
    // Прогресс көрсету
    currentQNumber.textContent = currentQuestionIndex + 1;
    scoreDisplay.textContent = `Дұрыс жауаптар: ${score} / ${totalQuestionsCount}`;

    // 1. Сұрақ атауы
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
    quizCard.appendChild(questionTitle);

    // 2. Опциялар тізімі 
    const optionsList = document.createElement('ul');
    optionsList.className = 'options-list';

    // Рандомизация опций: Егер бірінші рет жүктелсе, рандомдау және сақтау
    let shuffledOptions = q.shuffledOptions || q.options;
    if (!q.shuffledOptions) {
        shuffledOptions = [...q.options]; 
        shuffleArray(shuffledOptions);
        q.shuffledOptions = shuffledOptions; // Рандомдалған ретті сақтау
    }
    
    // Жауап берілгенін тексеру
    const isAnswered = q.selectedAnswer !== undefined;

    shuffledOptions.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        
        if (isAnswered) {
            listItem.classList.add('disabled');
            if (option === q.correctAnswer) {
                listItem.classList.add('correct');
            } else if (option === q.selectedAnswer && !q.isCorrect) {
                listItem.classList.add('incorrect');
            }
        } else {
            // Жаңа жауап беру мүмкіндігі
            listItem.onclick = () => handleAnswer(listItem, option, q.correctAnswer, optionsList);
        }

        optionsList.appendChild(listItem);
    });

    // Бұрын жауап берілген болса, хабарламаны көрсету
    if (isAnswered) {
        if (q.isCorrect) {
            resultMessage.textContent = '✅ Дұрыс!';
            resultMessage.className = 'message-correct';
        } else {
            resultMessage.textContent = `❌ Бұрыс! Дұрыс жауап: "${q.correctAnswer}"`;
            resultMessage.className = 'message-incorrect';
        }
        resultMessage.classList.remove('hidden');
    }

    quizCard.appendChild(optionsList);
    updateNavigationButtons();
}

function handleAnswer(selectedElement, selectedAnswer, correctAnswer, optionsList) {
    const q = quizQuestions[currentQuestionIndex];
    if (q.selectedAnswer !== undefined) return; 

    // 1. Жауапты сақтау және барлық опцияларды өшіру
    q.selectedAnswer = selectedAnswer;
    Array.from(optionsList.children).forEach(li => li.classList.add('disabled'));
    
    // 2. Нәтижені тексеру және белгілеу
    if (selectedAnswer === correctAnswer) {
        q.isCorrect = true;
        selectedElement.classList.add('correct');
        score++; // Балл есептеу
        
        resultMessage.textContent = '✅ Дұрыс!';
        resultMessage.className = 'message-correct';
        
    } else {
        q.isCorrect = false;
        selectedElement.classList.add('incorrect');
        
        resultMessage.textContent = `❌ Бұрыс! Дұрыс жауап: "${correctAnswer}"`;
        resultMessage.className = 'message-incorrect';
        
        // Дұрыс жауапты көрсету
        Array.from(optionsList.children).forEach(li => {
            if (li.textContent === correctAnswer) {
                li.classList.add('correct');
            }
        });
    }

    resultMessage.classList.remove('hidden');
    scoreDisplay.textContent = `Дұрыс жауаптар: ${score} / ${totalQuestionsCount}`;
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const isLastQuestion = currentQuestionIndex === totalQuestionsCount - 1;
    const q = quizQuestions[currentQuestionIndex];
    const isAnswered = q.selectedAnswer !== undefined;
    
    // "Алдыңғы Сұрақ" батырмасы
    if (currentQuestionIndex === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    // "Келесі Сұрақ" батырмасы
    if (isLastQuestion) {
        nextButton.classList.add('hidden');
        if (isAnswered) {
            restartButton.classList.remove('hidden');
        }
    } else if (isAnswered) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.classList.add('hidden');
    }
    
    // "Қайта Бастау" батырмасы
    if (!isLastQuestion || !isAnswered) {
        restartButton.classList.add('hidden');
    }
}

function displayResults() {
    quizCard.innerHTML = `
        <h2>Тест Аяқталды! 🎉</h2>
        <p class="final-score">Сіздің нәтижеңіз: **${score}** / **${totalQuestionsCount}**</p>
        <p>Керемет жұмыс! Python негіздерін меңгергенсіз.</p>
    `;
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    currentQNumber.textContent = `${totalQuestionsCount} / ${totalQuestionsCount}`;
    scoreDisplay.textContent = `Дұрыс жауаптар: ${score} / ${totalQuestionsCount}`;
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestionsCount - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // 1. СҰРАҚТАРДЫҢ РЕТІН АРАЛАСТЫРУ (Рандомдау)
    shuffleArray(quizQuestions); 
    
    // 2. Әр сұрақтың жауап күйін тазалау
    quizQuestions.forEach(q => {
        delete q.shuffledOptions; // Опциялардың ретін қайта рандомдау үшін тазалау
        delete q.selectedAnswer;  // Пайдаланушының жауабын тазалау
        delete q.isCorrect;       // Дұрыстық белгісін тазалау
    });

    restartButton.classList.add('hidden');
    displayQuestion();
}

// Оқиғаларды тыңдау
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
restartButton.addEventListener('click', restartQuiz);

// Бастау (Тестті жүктеу)
document.addEventListener('DOMContentLoaded', restartQuiz);
// =========================================================
// 1. ДАННЫЕ (ИМИТАЦИЯ БАЗЫ КОМПОНЕНТОВ)
// =========================================================
const componentsData = {
    cpu: [
        // Intel LGA1700 (DDR4/DDR5) - 12th, 13th, 14th Gen
        { name: 'Intel Core i9-14900K', price: 480, socket: 'LGA1700', tdp: 125, brand: 'Intel' },
        { name: 'Intel Core i7-14700K', price: 390, socket: 'LGA1700', tdp: 253, brand: 'Intel' },
        { name: 'Intel Core i5-14600K', price: 270, socket: 'LGA1700', tdp: 125, brand: 'Intel' },
        { name: 'Intel Core i5-13600K', price: 250, socket: 'LGA1700', tdp: 125, brand: 'Intel' },
        { name: 'Intel Core i5-13400F', price: 170, socket: 'LGA1700', tdp: 65, brand: 'Intel' },
        { name: 'Intel Core i3-12100F', price: 85, socket: 'LGA1700', tdp: 89, brand: 'Intel' },
        // AMD AM5 (DDR5) - Ryzen 7000/8000
        { name: 'AMD Ryzen 9 7950X3D', price: 550, socket: 'AM5', tdp: 120, brand: 'AMD' },
        { name: 'AMD Ryzen 7 7800X3D', price: 340, socket: 'AM5', tdp: 120, brand: 'AMD' },
        { name: 'AMD Ryzen 7 7700', price: 280, socket: 'AM5', tdp: 65, brand: 'AMD' },
        { name: 'AMD Ryzen 5 7600X', price: 190, socket: 'AM5', tdp: 105, brand: 'AMD' },
        { name: 'AMD Ryzen 5 8600G', price: 200, socket: 'AM5', tdp: 65, brand: 'AMD' },
        // AMD AM4 (DDR4) - Ryzen 5000/3000
        { name: 'AMD Ryzen 7 5800X3D', price: 280, socket: 'AM4', tdp: 105, brand: 'AMD' },
        { name: 'AMD Ryzen 5 5600', price: 120, socket: 'AM4', tdp: 65, brand: 'AMD' },
        { name: 'AMD Ryzen 3 3100', price: 70, socket: 'AM4', tdp: 65, brand: 'AMD' },
        // Intel LGA1200 (DDR4) - Старые, но всё еще в ходу
        { name: 'Intel Core i7-11700K', price: 180, socket: 'LGA1200', tdp: 125, brand: 'Intel' },
        { name: 'Intel Core i5-10400F', price: 90, socket: 'LGA1200', tdp: 65, brand: 'Intel' },
    ],
    motherboard: [
        // LGA1700 (DDR5)
        { name: 'Gigabyte Z790 AORUS ELITE (DDR5)', price: 300, socket: 'LGA1700', ramType: 'DDR5' },
        { name: 'ASUS PRIME Z790-P WIFI (DDR5)', price: 230, socket: 'LGA1700', ramType: 'DDR5' },
        { name: 'MSI MAG B760 TOMAHAWK (DDR5)', price: 190, socket: 'LGA1700', ramType: 'DDR5' },
        // LGA1700 (DDR4)
        { name: 'MSI PRO B760-P (DDR4)', price: 150, socket: 'LGA1700', ramType: 'DDR4' },
        { name: 'Gigabyte H610M S2H (DDR4)', price: 70, socket: 'LGA1700', ramType: 'DDR4' },
        // AM5 (DDR5)
        { name: 'ASUS ROG STRIX X670E (DDR5)', price: 350, socket: 'AM5', ramType: 'DDR5' },
        { name: 'Gigabyte B650 AORUS ELITE AX (DDR5)', price: 210, socket: 'AM5', ramType: 'DDR5' },
        { name: 'ASUS PRIME B650M-A (DDR5)', price: 130, socket: 'AM5', ramType: 'DDR5' },
        // AM4 (DDR4)
        { name: 'Gigabyte X570 AORUS MASTER (DDR4)', price: 250, socket: 'AM4', ramType: 'DDR4' },
        { name: 'MSI MAG B550 TOMAHAWK (DDR4)', price: 140, socket: 'AM4', ramType: 'DDR4' },
        { name: 'Gigabyte B550 GAMING X V2 (DDR4)', price: 100, socket: 'AM4', ramType: 'DDR4' },
        // LGA1200 (DDR4)
        { name: 'ASUS PRIME Z590-P (DDR4)', price: 120, socket: 'LGA1200', ramType: 'DDR4' },
    ],
    ram: [
        // DDR5
        { name: 'G.Skill Trident Z5 RGB 64GB (2x32GB DDR5 6000MHz)', price: 190, ramType: 'DDR5' },
        { name: 'Corsair Vengeance 32GB (2x16GB DDR5 6400MHz)', price: 115, ramType: 'DDR5' },
        { name: 'Kingston Fury Beast 16GB (1x16GB DDR5 6000MHz)', price: 70, ramType: 'DDR5' },
        { name: 'Crucial Pro 32GB (2x16GB DDR5 5600MHz)', price: 95, ramType: 'DDR5' },
        { name: 'Corsair Vengeance 32GB (DDR5 5200MHz)', price: 100, ramType: 'DDR5' },
        // DDR4
        { name: 'G.Skill Ripjaws V 64GB (2x32GB DDR4 3600MHz)', price: 130, ramType: 'DDR4' },
        { name: 'HyperX FURY 32GB (2x16GB DDR4 3600MHz)', price: 80, ramType: 'DDR4' },
        { name: 'Crucial Ballistix 16GB (2x8GB DDR4 3200MHz)', price: 45, ramType: 'DDR4' },
        { name: 'Team Group T-Force Vulcan 16GB (2x8GB DDR4 3200MHz)', price: 42, ramType: 'DDR4' },
        { name: 'Corsair Vengeance LPX 8GB (1x8GB DDR4 2666MHz)', price: 25, ramType: 'DDR4' },
    ],
    gpu: [
        { name: 'NVIDIA RTX 4090 (Gigabyte AORUS)', price: 1400, power: 450 },
        { name: 'NVIDIA RTX 4080 SUPER (MSI Suprim)', price: 950, power: 320 },
        { name: 'NVIDIA RTX 4070 Ti SUPER (ASUS TUF)', price: 750, power: 285 },
        { name: 'NVIDIA RTX 4070 (Palit Dual)', price: 550, power: 200 },
        { name: 'NVIDIA RTX 4060 Ti 16GB', price: 420, power: 165 },
        { name: 'NVIDIA RTX 3060 12GB (Inno3D)', price: 300, power: 170 },
        { name: 'NVIDIA GTX 1660 SUPER', price: 180, power: 125 },
        { name: 'AMD Radeon RX 7900 XTX (Sapphire Nitro+)', price: 850, power: 355 },
        { name: 'AMD Radeon RX 7800 XT (PowerColor Hellhound)', price: 450, power: 263 },
        { name: 'AMD Radeon RX 6600 XT', price: 250, power: 160 },
    ],
    storage: [
        { name: 'Samsung 990 Pro 4TB NVMe Gen4', price: 380 },
        { name: 'Samsung 990 Pro 2TB NVMe Gen4', price: 180 },
        { name: 'WD Black SN850X 1TB NVMe Gen4', price: 100 },
        { name: 'Crucial P3 2TB NVMe Gen3', price: 130 },
        { name: 'Crucial P5 Plus 1TB NVMe Gen4', price: 90 },
        { name: 'Kingston NV2 500GB NVMe Gen4', price: 45 },
        { name: 'Samsung 870 Evo 1TB SATA SSD', price: 85 },
        { name: 'Kingston A400 480GB SATA SSD', price: 35 },
        { name: 'Seagate Barracuda 4TB HDD 5400RPM', price: 75 },
    ],
    psu: [
        // Высокая мощность (1000W+)
        { name: 'Seasonic PRIME TX-1300 (1300W Platinum)', price: 300, wattage: 1300 },
        { name: 'Corsair RM1000e (1000W Gold)', price: 160, wattage: 1000 },
        { name: 'Cooler Master V1200 (1200W Platinum)', price: 220, wattage: 1200 },
        // Средняя мощность (750W - 850W)
        { name: 'Corsair RM850x (850W Gold)', price: 120, wattage: 850 },
        { name: 'be quiet! Pure Power 12 M 750W', price: 90, wattage: 750 },
        { name: 'Deepcool PM850D (850W Gold)', price: 110, wattage: 850 },
        // Низкая мощность (650W и ниже)
        { name: 'Chieftec Proton BDF-650S (650W Bronze)', price: 65, wattage: 650 },
        { name: 'Aerocool KCAS PLUS 600W (Bronze)', price: 50, wattage: 600 },
        { name: 'Deepcool PF550 (550W)', price: 45, wattage: 550 },
    ],
    cpu_cooler: [
        { name: 'Noctua NH-D15 (Воздушное, 220W)', price: 90, tdp_rating: 220 },
        { name: 'Deepcool AK620 (Воздушное, 260W)', price: 60, tdp_rating: 260 },
        { name: 'Cooler Master Hyper 212 Black (Воздушное, 150W)', price: 35, tdp_rating: 150 },
        { name: 'Arctic Liquid Freezer II 360 (СЖО, 300W)', price: 130, tdp_rating: 300 },
        { name: 'NZXT Kraken 360 (СЖО, 280W)', price: 150, tdp_rating: 280 },
        { name: 'ID-Cooling SE-214-XT (Воздушное, 180W)', price: 20, tdp_rating: 180 },
    ],
    case: [
        { name: 'Lian Li Lancool 216 (Mid-Tower, Mesh)', price: 110 },
        { name: 'NZXT H9 Flow (Mid-Tower, Панорамный)', price: 190 },
        { name: 'Fractal Design Meshify 2 (Mid-Tower)', price: 140 },
        { name: 'Corsair 4000D Airflow (Mid-Tower)', price: 90 },
        { name: 'NZXT H5 Flow (Mid-Tower)', price: 80 },
        { name: 'Be Quiet! Pure Base 500DX (Mid-Tower)', price: 115 },
        { name: 'Deepcool Matrexx 30 (Micro-ATX)', price: 45 },
    ],
};

// =========================================================
// 2. СОСТОЯНИЕ (ВЫБРАННЫЕ КОМПОНЕНТЫ И ТИПЫ)
// =========================================================
const componentTypes = ['cpu', 'motherboard', 'ram', 'gpu', 'storage', 'psu', 'cpu_cooler', 'case']; // Должно быть 8 типов!
let selectedComponents = {
    cpu: null, motherboard: null, ram: null, 
    gpu: null, storage: null, psu: null,
    cpu_cooler: null, case: null 
};

// =========================================================
// 3. СОВМЕСТИМОСТЬ (ЛОГИКА ПОДБОРА И ПРОВЕРОК)
// =========================================================

/**
 * Фильтрует список компонентов по критериям совместимости (сокет, тип RAM).
 * @param {string} type - Тип компонента, для которого ищем совместимые опции.
 * @returns {Array} Отфильтрованный список компонентов.
 */
function getCompatibleComponents(type) {
    const allComponents = componentsData[type];
    const cpu = selectedComponents.cpu;
    const mb = selectedComponents.motherboard;

    if (type === 'motherboard') {
        // Если выбран CPU, фильтруем МП по сокету
        if (cpu) {
            return allComponents.filter(board => board.socket === cpu.socket);
        }
    } else if (type === 'cpu') {
         // Если выбрана МП, фильтруем CPU по сокету
        if (mb) {
            return allComponents.filter(processor => processor.socket === mb.socket);
        }
    } else if (type === 'ram') {
         // Если выбрана МП, фильтруем RAM по типу памяти
        if (mb) {
            return allComponents.filter(memory => memory.ramType === mb.ramType);
        }
    }
    
    // Для GPU, Storage, PSU, Cooler, Case и случаев, когда связанные компоненты не выбраны, возвращаем весь список.
    return allComponents;
}


/**
 * Вычисляет общую потребляемую мощность сборки.
 */
function calculateTotalPower() {
    let totalPower = 0;
    if (selectedComponents.cpu) totalPower += selectedComponents.cpu.tdp || 0;
    if (selectedComponents.gpu) totalPower += selectedComponents.gpu.power || 0;
    totalPower += 100; // Запас на остальные компоненты
    return totalPower;
}

/**
 * Выполняет все проверки совместимости.
 * @returns {object} {errors: number, warnings: number}
 */
function checkCompatibility() {
    let errors = 0;
    let warnings = 0;
    
    // Сброс всех предупреждений
    componentTypes.forEach(type => {
        document.getElementById(`alert-${type}`)?.classList.remove('danger', 'warning');
        document.getElementById(`alert-${type}`) && (document.getElementById(`alert-${type}`).textContent = '');
    });

    const cpu = selectedComponents.cpu;
    const mb = selectedComponents.motherboard;
    const ram = selectedComponents.ram;
    const psu = selectedComponents.psu;
    const cooler = selectedComponents.cpu_cooler;
    
    const setAlert = (type, message, isError = true) => {
        const alertBox = document.getElementById(`alert-${type}`);
        if (alertBox) {
            alertBox.textContent = message;
            alertBox.classList.add(isError ? 'danger' : 'warning');
            isError ? errors++ : warnings++;
        }
    };
    
    // 1. Проверка сокета CPU и MB
    if (cpu && mb) {
        if (cpu.socket !== mb.socket) {
            setAlert('motherboard', `Ошибка: Сокет CPU (${cpu.socket}) не совпадает с сокетом МП (${mb.socket}).`);
        }
    }

    // 2. Проверка типа RAM и MB
    if (ram && mb) {
        if (ram.ramType !== mb.ramType) {
            setAlert('ram', `Ошибка: Тип RAM (${ram.ramType}) не совпадает с типом, поддерживаемым МП (${mb.ramType}).`);
        }
    }

    // 3. Проверка БП (PSU) и общей мощности
    if (psu) {
        const requiredPower = calculateTotalPower();
        const psuWattage = psu.wattage;
        
        if (requiredPower > psuWattage) {
            setAlert('psu', `Ошибка: Требуемая мощность (~${requiredPower}W) превышает мощность БП (${psuWattage}W).`, true);
        } else if (psuWattage < requiredPower * 1.2) {
            setAlert('psu', `Предупреждение: Рекомендуется БП с запасом мощности. Требуется ~${requiredPower}W.`, false);
        }
    }

    // 4. Проверка Охлаждения CPU (Cooler)
    if (cpu && cooler) {
        const cpuTDP = cpu.tdp || 0;
        const coolerRating = cooler.tdp_rating || 0;
        
        if (cpuTDP > coolerRating) {
            setAlert('cpu_cooler', `Ошибка: Рейтинг охлаждения (${coolerRating}W) ниже TDP процессора (${cpuTDP}W).`, true);
        } else if (coolerRating < cpuTDP * 1.2) {
             setAlert('cpu_cooler', `Предупреждение: Рекомендуется кулер с запасом мощности. TDP процессора: ${cpuTDP}W.`, false);
        }
    }

    // 5. Глобальный статус
    const globalStatusBox = document.getElementById('global-compatibility-status');
    globalStatusBox.className = 'status-box';
    if (errors > 0) {
        globalStatusBox.textContent = `Совместимость: КРИТИЧЕСКИЕ ОШИБКИ (${errors})`;
        globalStatusBox.classList.add('status-error');
    } else if (warnings > 0) {
        globalStatusBox.textContent = `Совместимость: Предупреждения (${warnings})`;
        globalStatusBox.classList.add('status-warning');
    } else {
        globalStatusBox.textContent = 'Совместимость: ОК';
        globalStatusBox.classList.add('status-ok');
    }
    
    return { errors, warnings };
}


// =========================================================
// 4. РЕНДЕРИНГ (ОТРИСОВКА ИТОГОВ И СПИСКОВ)
// =========================================================

/**
 * Отрисовывает элементы списка в выпадающем меню компонента, используя отфильтрованные данные.
 */
function renderSelectOptions(type) {
    const container = document.querySelector(`#select-${type} .select-items`);
    if (!container) return;

    // ИСПОЛЬЗУЕМ ФУНКЦИЮ ПОДБОРА
    const componentsToRender = getCompatibleComponents(type);
    
    container.innerHTML = '';
    const currentSelection = selectedComponents[type];

    if (componentsToRender.length === 0) {
         // Сообщение, если нет совместимых опций
        const noMatchItem = document.createElement('div');
        noMatchItem.className = 'select-item';
        noMatchItem.style.color = 'var(--danger-color)';
        noMatchItem.innerHTML = `<span class="item-name">Нет совместимых опций.</span>`;
        container.appendChild(noMatchItem);
        return;
    }


    componentsToRender.forEach(comp => {
        const item = document.createElement('div');
        item.className = 'select-item';
        item.setAttribute('data-name', comp.name);
        item.setAttribute('data-comp-data', JSON.stringify(comp));

        if (currentSelection && currentSelection.name === comp.name) {
             item.classList.add('selected');
        }

        item.innerHTML = `
            <span class="item-name">${comp.name}</span>
            <span class="item-price">${comp.price} $</span>
        `;
        container.appendChild(item);
    });
}

/**
 * Обновляет правую панель с итоговой сборкой.
 * @returns {number} Общая стоимость сборки.
 */
function renderSummary() {
    const list = document.getElementById('summary-list');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;
    let html = '';

    const componentNames = {
        cpu: 'Процессор', motherboard: 'Материнская плата', ram: 'RAM', 
        gpu: 'Видеокарта', storage: 'Накопитель', psu: 'БП',
        cpu_cooler: 'Охлаждение CPU', case: 'Корпус'
    };

    componentTypes.forEach(type => {
        const item = selectedComponents[type];
        
        html += `<div class="summary-item">`;
        html += `<span class="sum-label">${componentNames[type]}</span>`;

        if (item) {
            html += `<span class="sum-value">${item.name}<span class="sum-price"> (${item.price} $)</span></span>`;
            total += item.price;
        } else {
            html += `<span class="sum-placeholder">Не выбран</span>`;
        }
        html += `</div>`;
    });

    list.innerHTML = html;
    totalPriceElement.textContent = `${total} $`;

    checkCompatibility();
    return total;
}

/**
 * Заполняет данные в модальном окне перед его открытием.
 */
function populateModal() {
    const modalDetails = document.getElementById('modal-order-details');
    const modalTotalPrice = document.getElementById('modal-total-price');
    const confirmButton = document.getElementById('confirm-order-btn');
    const errorMessage = document.getElementById('modal-error-message');
    
    let total = 0;
    let html = '';
    
    const compatibility = checkCompatibility();

    const componentNames = {
        cpu: 'Процессор', motherboard: 'МП', ram: 'RAM', 
        gpu: 'Видеокарта', storage: 'Накопитель', psu: 'БП',
        cpu_cooler: 'Охлаждение CPU', case: 'Корпус'
    };

    componentTypes.forEach(type => {
        const item = selectedComponents[type];
        
        html += `<div class="modal-item">`;
        html += `<span class="modal-item-name">${componentNames[type]}</span>`;

        if (item) {
            html += `<span class="modal-item-price">${item.name} (${item.price} $)</span>`;
            total += item.price;
        } else {
            html += `<span class="modal-item-price">Не выбран</span>`;
        }
        html += `</div>`;
    });

    modalDetails.innerHTML = html;
    modalTotalPrice.textContent = `${total} $`;

    // Управление кнопкой подтверждения и сообщением об ошибке
    if (compatibility.errors > 0) {
        confirmButton.disabled = true;
        errorMessage.textContent = 'КРИТИЧЕСКИЕ ОШИБКИ СОВМЕСТИМОСТИ! Заказ невозможен.';
        errorMessage.style.display = 'block';
    } else {
        confirmButton.disabled = false;
        errorMessage.style.display = 'none';
    }
}


// =========================================================
// 5. ОБРАБОТЧИКИ СОБЫТИЙ
// =========================================================

const customSelects = document.querySelectorAll('.custom-select');
const orderModal = document.getElementById('order-modal');

/**
 * Функция фильтрации при вводе в текстовое поле.
 */
function filterFunction(inputElement) {
    const filter = inputElement.value.toUpperCase();
    const selectItemsContainer = inputElement.closest('.custom-select').querySelector('.select-items');
    const items = selectItemsContainer.querySelectorAll('.select-item');

    items.forEach(item => {
        const nameElement = item.querySelector('.item-name');
        if (!nameElement) return;

        const text = nameElement.textContent;
        // Показываем элемент, если он соответствует фильтру И не является заглушкой "Нет совместимых опций."
        if (text.toUpperCase().includes(filter) && !item.textContent.includes('Нет совместимых опций')) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

/**
 * Обработка выбора элемента из выпадающего списка.
 */
function handleCustomSelection(item, selectContainer) {
    const componentName = item.getAttribute('data-name');
    const componentData = JSON.parse(item.getAttribute('data-comp-data'));
    const inputElement = selectContainer.querySelector('.select-input');
    const type = selectContainer.closest('.component-section').dataset.type;

    // Сохраняем выбранный компонент
    selectedComponents[type] = componentData;
    
    // Обновляем отображение
    inputElement.value = componentName;
    selectContainer.querySelector('.select-items').classList.add('select-hide');
    
    // ПЕРЕРИСОВЫВАЕМ ВСЕ СВЯЗАННЫЕ СПИСКИ!
    renderSummary();
    
    // При выборе CPU/MB/RAM/Cooler, нужно перерисовать остальные, чтобы обновить их опции
    if (['cpu', 'motherboard', 'ram', 'cpu_cooler'].includes(type)) {
         renderSelectOptions('cpu');
         renderSelectOptions('motherboard');
         renderSelectOptions('ram');
         renderSelectOptions('cpu_cooler');
    }
    
    // Перерисовываем текущий список, чтобы обновить класс 'selected'
    renderSelectOptions(type);
}


document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация
    componentTypes.forEach(t => renderSelectOptions(t));
    renderSummary(); 

    customSelects.forEach(selectContainer => {
        const inputElement = selectContainer.querySelector('.select-input');
        const selectItems = selectContainer.querySelector('.select-items');
        const selectSelected = selectContainer.querySelector('.select-selected');

        // Обработка клика по селекту (открытие/закрытие списка)
        selectSelected.addEventListener('click', (e) => {
            if (e.target === inputElement) return;

            document.querySelectorAll('.select-items').forEach(list => {
                if (list !== selectItems) list.classList.add('select-hide');
            });

            const type = selectContainer.closest('.component-section').dataset.type;
            
            // ПЕРЕРИСОВКА ПЕРЕД ОТКРЫТИЕМ (обеспечивает актуальность списка)
            renderSelectOptions(type); 

            selectItems.classList.toggle('select-hide');
            if (!selectItems.classList.contains('select-hide')) {
                inputElement.focus();
                filterFunction(inputElement);
            }
        });

        // Обработка ввода в текстовое поле (фильтрация)
        inputElement.addEventListener('input', () => {
            selectItems.classList.remove('select-hide');
            filterFunction(inputElement);
        });

        // Обработка выбора элемента в списке
        selectItems.addEventListener('click', (e) => {
            const item = e.target.closest('.select-item');
            if (item && item.getAttribute('data-name')) { // Проверяем, что это не заглушка
                handleCustomSelection(item, selectContainer);
            }
        });
    });

    // 2. Закрытие списков при клике вне селекта
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select')) {
            customSelects.forEach(sel => {
                sel.querySelector('.select-items').classList.add('select-hide');
            });
        }
    });
    
    // 3. Обработка модального окна
    const closeButton = document.querySelector('.modal-content .close-button');
    const buyButton = document.querySelector('.buy-button');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');

    // Открытие модального окна
    buyButton.addEventListener('click', () => {
        populateModal();
        orderModal.style.display = 'block';
    });

    // Закрытие модального окна по кнопке X
    closeButton.addEventListener('click', () => {
        orderModal.style.display = 'none';
    });

    // Закрытие модального окна по клику вне его
    window.addEventListener('click', (event) => {
        if (event.target == orderModal) {
            orderModal.style.display = 'none';
        }
    });

    // Обработка кнопки "Подтвердить и Оплатить"
    confirmOrderBtn.addEventListener('click', () => {
        if (!confirmOrderBtn.disabled) {
             const total = renderSummary();
             alert(`Заказ подтвержден! Общая стоимость: ${total} $. Имитация перехода к платежной системе.`);
             orderModal.style.display = 'none';
        }
    });
});
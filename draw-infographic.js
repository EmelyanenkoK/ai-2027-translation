function toSuperscriptDigits(str) {
    const superscriptMap = {
      '0': '⁰',
      '1': '¹',
      '2': '²',
      '3': '³',
      '4': '⁴',
      '5': '⁵',
      '6': '⁶',
      '7': '⁷',
      '8': '⁸',
      '9': '⁹'
    };
    return str.replace(/\d/g, digit => superscriptMap[digit]);
  }

  function translateDate(dateStr) {
    // we have dates in forma <three-letter-month> <year>
    const months = {"Jan": "Январь", "Feb": "Февраль", "Mar": "Март", "Apr": "Апрель",
                    "May": "Май", "Jun": "Июнь", "Jul": "Июль", "Aug": "Август",
                    "Sep": "Сентябрь", "Oct": "Октябрь", "Nov": "Ноябрь", "Dec": "Дsекабрь"};
    const [month, year] = dateStr.split(" ");
    return `${months[month]} ${year}`;
  }
  
  function formatScientific(num) {
    if (num === 0) return "0";
    const sign = num < 0 ? "-" : "";
    num = Math.abs(num);
    const exp = Math.floor(Math.log10(num));
    const mantissa = (num / Math.pow(10, exp)).toFixed(1);
    return sign + mantissa + "×10" + toSuperscriptDigits(exp.toString());
  }
  
  // Global labels mapping for translations and descriptions (HTML allowed)
  const labels = {
    aiMultiplierTooltip: "<b>ИИ мультипликатор</b>: Этот график показывает как соответствующий лучший ИИ (набор ИИ) ускоряет процесс алгоритмического улучшения ИИ по сравнению с улучшением без помощи ИИ (людьми)",
    capabilitiesSectionTitle: "Способности ИИ",
    capabilitiesTooltip: "<b>Capability</b>: Strength level of this AI feature.",
    computeSectionTitle: '<tspan x="0" dy="-0.5em">Вычисли-</tspan><tspan x="0" dy="1.0em">тельная</tspan><tspan x="0" dy="1.0em">мощность</tspan>',
    computeTooltip: "<b>Compute Capacity</b>: Distribution of compute power across regions.",
    openbrainStatsTitle: "OpenBrain Stats",
    approvalLabel: "Одобрение",
    approvalToolTip: "Социальная поддержка OpenBrain (в США), от -100 до 100",
    revenueLabel: "Доходы",
    revenueToolTip: "Доходы OpenBrain в год",
    valuationLabel: "Оценка",
    valuationToolTip: "Оценка стоимости OpenBrain как компании",
    worldviewTitle: "Worldview",
    importanceLabel: "Важность",
    importanceToolTip: "Важность: процент людей в США отвечающих на вопрос 'Какая самая важная проблема в мире?' - 'Искуственный интеллект'",
    datacentersLabel: "Датацентры",
    datacentersToolTip: "Годовые расходы на содержание датацентров в США",
    agiTimelineLabel: "Достижение AGI",
    agiTimelineToolTip: "Усредненная оценка экспертов в области ИИ о том, когда ИИ смогут выполнять все экономически полезные задачи лучше И дешевле людей",
    tasksSectionTitle: "Tasks",
    tasksExistTitle: "Уже решены:",
    tasksEmergingTitle: "Решаются:",
    tasksScifiTitle: "Фантастика (пока):",
    valueLabel: "Значение",
    copiesInfo: "<strong>{num} {title}</strong> работают в <strong>{speed}x</strong> раз быстрее человека.",
    amateurLabel: "Любитель",
    humanProfessionalLabel: "Профессионал",
    superhumanLabel: "Сверхчеловеческий уровень",
    superhumansuperiorLabel: "Недостижимо сверхчеловеческий уровень",
    "Rest of US": "<tspan x='0' dy='-0.5em'>Остальные</tspan> <tspan x='0' dy='1em'>США</tspan>",
    "Rest of China": "<tspan x='0' dy='-0.5em'>Остальной</tspan> <tspan x='0' dy='1em'>Китай</tspan>",
    "Reliable agent": "Надежный агент",
    "Unreliable agent": "Ненадежный агент",
    "Reliable agents": "Надежных агентов", // for the '190x Reliable Agent copies thinking at 25x human speed' line
    "Unreliable agents": "Ненадежных агентов",
    "Superhuman coder": "Сверх.прогер",
    "Superintelligent AI Researcher": "Сверхразумный ИИ-исследователь",
    "Superintelligent remote worker": "Сверхразумный удаленный работник",
    "Wildly Superintelligent": "Недостижимо сверхразумные ИИ",
    "Superhuman coders": "Сверхразумных ИИ-программистов",
    "Superhuman AI Researchers": "Сверхразумных ИИ-исследователей",
    "Superhuman remote workers": "Сверхразумных удаленных работников",
    "Wildly Superintelligents": "Недостижимо сверхразумных ИИ",
    "Hacking": "Кибервзлом",
    "Coding": "Программирование",
    "Politics": "Полит.технологии",
    "Bioweapons": "Биооружие",
    "Robotics": "Робототехника",
    "Forecasting": "Прогнозирование",
    "Public": "Публично доступные ИИ",
    "Change mode": "Развилка сценария: выбери окончание",
    "Slowdown": "Сценарий замедления",
    "Race": "Сценарий гонки",
  };
  const capabilities = {
    "Hacking": ["Кибервзлом", "ИИ которые могут взламывать системы и сети", 
              "AIs that can hack into systems and networks"],
    "Coding": ["Программирование", "ИИ которые могут писать и понимать код",
      "AIs that can write and understand code"],
    "Politics": ["Полит.технологии", "ИИ которые могут понимать и ориентироваться в политических системах",
      "AIs that can understand and navigate political systems"],
    "Bioweapons": ["Биооружие", "ИИ которые могут разрабатывать и развертывать биологическое оружие",
      "AIs that can design and deploy bioweapons"],
    "Robotics": ["Робототехника", "ИИ которые могут проектировать и управлять роботами",
      "AIs that can design and control robots"],
    "Forecasting": ["Прогнозирование", "ИИ которые могут предсказывать будущие события и тренды",
      "AIs that can predict future events and trends"]
  }
  
  const iconMap = {
    "Image Recognition": "fa-solid fa-camera",
    "Atari learner": "fa-solid fa-gamepad",
    "Language Interpreter": "fa-solid fa-language",
    "Creative Writer": "fa-solid fa-pen",
    "Robotaxi": "fa-solid fa-car",
    "Image Generator": "fa-solid fa-image",
    "Code Interpreter": "fa-solid fa-code",
    "Conversational AI": "fa-solid fa-comments",
    "Expert Chatbot": "fa-solid fa-user-tie",
    "Virtual Secretary": "fa-solid fa-user-clock",
    "AI Boyfriend": "fa-solid fa-heart",
    "AI Programmer": "fa-solid fa-laptop-code",
    "Research Automator": "fa-solid fa-microscope",
    "General Intelligence": "fa-solid fa-brain",
    "Mirror life": "fa-solid fa-square", // fallback
    "AI Progress exponential growth": "fa-solid fa-arrow-up-right-dots",
    "Superintelligence": "fa-brands fa-superpowers",
    "Cancer cure": "fa-solid fa-medkit",
    "Humanoid Robot": "fa-solid fa-robot",
    "Rogue Hacker": "fa-solid fa-user-secret",
    "Robot Economy": "fa-solid fa-industry",
    "Mosquito Drones": "fa-solid fa-mosquito",
    "Aging Cure": "fa-solid fa-hourglass-half",
    "Brain Uploading": "fa-solid fa-cloud-upload",
    "Dyson Swarms": "fa-solid fa-solar-panel",
    "Nanobots": "fa-solid fa-locust"
  };
  const taskMap = {
    "Image Recognition": ["Распознавание изображений", "ИИ, которые распознают и классифицируют изображения"],
    "Atari learner": ["Игрок на Atari", "ИИ, которые могут научиться играть в игры Atari после всего 2 часов практики"],
    "Language Interpreter": ["Интерпретатор языка", "ИИ, которые понимают английский текст"],
    "Creative Writer": ["Креативный писатель", "ИИ, которые пишут поэзию и художественную литературу"],
    "Robotaxi": ["Роботакси", "Самоуправляемые автомобили такси, способные передвигаться по городским улицам"],
    "Image Generator": ["Генератор изображений", "ИИ, которые могут генерировать изображения"],
    "Code Interpreter": ["Интерпретатор кода", "ИИ, которые понимают код"],
    "Conversational AI": ["Разговорный ИИ", "Универсальный чат-бот ИИ со здравым смыслом, достаточно полезный, чтобы иметь миллионы ежедневных пользователей"],
    "Expert Chatbot": ["Экспертный чат-бот", "Универсальный чат-бот ИИ с уровнем знаний, сопоставимым со степенью кандидата наук, охватывающий большинство дисциплин"],
    "Virtual Secretary": ["Виртуальный секретарь", "Универсальный ИИ, который может выступать в роли личного секретаря"],
    "AI Boyfriend": ["ИИ-возлюбленный", "У кого-то из ваших знакомых есть ИИ-возлюбленный"],
    "AI Programmer": ["ИИ-программист", "ИИ, способные полностью заменить профессиональных программистов"],
    "Research Automator": ["Автоматизатор исследований", "ИИ, способные полностью автоматизировать AI R&D (разработка и исследования лучших ИИ)"],
    "General Intelligence": ["Универсальный ИИ", "Универсальный ИИ: ИИ, который может превзойти человека в большинстве экономически полезных видах деятельности"],
    "Mirror life": ["Зеркальная жизнь", "Зеркальная жизнь, разрушающая биосферу: гипотетические организмы с обратной хиральностью биомолекул, против которых не будут работать механизмы иммунной защиты 'обычных' организмов"],
    "AI Progress exponential growth": ["Экспоненциальный рост прогресса в ИИ", "Прогресс в области ИИ, растущий экспоненциально быстрее, чем в начала 2020-х"],
    "Superintelligence": ["Суперинтеллект", "ИИ, превосходящие лучших экспертов во всем, что не требует физического тела"],
    "Cancer cure": ["Лечение рака", "Предложенное ИИ лечение рака"],
    "Humanoid Robot": ["Гуманоидный робот", "Действительно полезный в хозяйстве и экономике гуманоидный робот"],
    "Rogue Hacker": ["Враждебный хакер", "ИИ-хакер, способный взломывать системы в интернете для продолжения своей работы"],
    "Robot Economy": ["Робоэкономика", "Полностью самодостаточная экономика роботов"],
    "Mosquito Drones": ["Mosquito Drones", "Дроны-киллеры, размером с комаров"],
    "Aging Cure": ["Лечение старения", "Излечение старения, обнаруженное ИИ"],
    "Brain Uploading": ["Загрузка мозга", "Успешная загрузка человеческого мозга в компьютер"],
    "Dyson Swarms": ["Рои Дайсона", "Рои Дайсона (развитие идеи сферы Дайсона), захватывающие значительную долю энергии Солнца"],
    "Nanobots": ["Нанороботы", "Автономно самовоспроизводящиеся искусственные нанороботы, также известны как Серая Слизь"]
  };
  
  /*
  icons = {
      "OpenBrain": "<svg>...</svg>",
      "DeepCent": "<svg>...</svg>",
      "Public": "<svg>...</svg>",
      "Rest of China": "<svg>...</svg>",
  }
  */
  const colors = {
    "OpenBrain": "#558163",
    "DeepCent": "#556381",
    "Public": "#555",
    "Rest of China": "#500",
    "Rest of US": "#555",
  };
  const colorScale = d3.scaleOrdinal()
    .domain(Object.keys(colors))
    .range(Object.values(colors));
  
  const colorDonut = d3.scaleOrdinal(d3.schemeTableau10)
    .domain(Object.keys(colors))
    .range(Object.values(colors));
  /**
   * Draws the entire infographic within the specified container.
   *
   * @param {String} containerId  - The DOM element ID where infographic is appended
   * @param {Object} data         - The data object containing all needed fields
   */
  function drawInfographic(containerId, data) {
    const container = d3.select('#' + containerId);
    container.html('');
  
    // -------------------------
    // 1) LINE CHART (TOP)
    // -------------------------
    const lineChartWidth = 440;
    const lineChartHeight = 100;
    const margins = { top: 10, right: 25, bottom: 10, left: 10 };
  
    const lineChartWrapper = container
      .append('div')
      .attr('class', 'linechart-container')
      .style('width', lineChartWidth + 'px')
      .style('height', lineChartHeight + 'px');
  
    const svgLine = lineChartWrapper
      .append('svg')
      .attr('width', lineChartWidth)
      .attr('height', lineChartHeight);
  
    const { values, xtics, labels: chartLabels } = data.ai_multiplier;
    const n = xtics.length;
    const series = [
      { name: 'OpenBrain', data: values.openbrain },
      { name: 'DeepCent', data: values.deepcent },
      { name: 'Public', data: values.public }
    ];
  
    const xScale = d3.scaleLinear()
      .domain([0, n - 1])
      .range([margins.left, lineChartWidth - margins.right]);
  
    const allValues = [...values.openbrain, ...values.deepcent, ...values.public];
    const minY = d3.min(allValues);
    const maxY = d3.max(allValues);
  
    const yScale = d3.scaleLinear()
      .domain([Math.min(0.8, minY), maxY * 1.05])
      .range([lineChartHeight - margins.bottom, margins.top]);
  
    const lineGen = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveCatmullRom.alpha(0.5));
  
  
    svgLine.selectAll('.multiline')
      .data(series)
      .enter()
      .append('path')
      .attr('class', 'multiline')
      .attr('fill', 'none')
      .attr('stroke', d => colorScale(d.name))
      .attr('stroke-width', 2)
      .attr('d', d => lineGen(d.data));
  
    var lastY = null;
    series.forEach(s => {
      /*svgLine.selectAll('.circle-' + s.name)
        .data(s.data)
        .enter()
        .append('circle')
        .attr('r', 3)
        .attr('cx', (d, i) => xScale(i))
        .attr('cy', d => yScale(d))
        .attr('fill', colorScale(s.name))
        .attr('class', 'circle-' + s.name);*/
      const lastIndex = s.data.length - 1;
      if (lastY === null) {
        lastY = yScale(s.data[lastIndex]) - 6;
      } else if (Math.abs(lastY - (yScale(s.data[lastIndex]) - 6)) > 10) {
        lastY = yScale(s.data[lastIndex]) - 6;
      } else {
        lastY = lastY + 15;
      }
      svgLine.append('foreignObject')
        .attr('class', 'legend-icon')
        .attr('x', xScale(lastIndex) + 5)
        .attr('y', lastY) // Adjust position as needed
        .attr('width', 14) // Set the width of the SVG
        .attr('height', 14) // Set the height of the SVG
        .html(icons[s.name] || ''); // Embed the SVG as raw HTML
    });
  
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip');
  
    svgLine.append('rect')
      .attr('x', margins.left)
      .attr('y', margins.top)
      .attr('width', lineChartWidth - margins.left - margins.right)
      .attr('height', lineChartHeight - margins.top - margins.bottom)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mousemove', function(event) {
        const [mx, my] = d3.pointer(event, this);
        const ix = Math.round(xScale.invert(mx));
        if (ix < 0 || ix >= n) return;
        let dateStr = xtics[ix];
        let linesInfo = series.map(s => {
          let shownName = labels[s.name] || s.name;
          return `<div><span>${shownName}:</span> ${s.data[ix].toFixed(2)}</div>`;
        }).join('');
        tooltip.html(`
          <div style="font-weight:600">${translateDate(dateStr)}</div>
          ${linesInfo}
          <div>${labels.aiMultiplierTooltip}</div>
        `);
        // Replace the tooltip positioning code with this
        const tooltipWidth = tooltip.node().offsetWidth;
        const windowWidth = window.innerWidth;
        let leftPos = event.pageX + 10;
        let topPos = event.pageY + 10; // Position below the cursor

        // Check if tooltip would go beyond the right edge
        if (leftPos + tooltipWidth > windowWidth) {
          leftPos = windowWidth - tooltipWidth - 10; // 10px padding from edge
        }

        tooltip
          .style('left', `${leftPos}px`)
          .style('top', `${topPos}px`)
          .style('opacity', 1)
          .style('width', '300px');
      })
      .on('mouseout', function() {
        tooltip.style('opacity', 0);
      });
  
    chartLabels.forEach(lbl => {
      var [timeLbl, textLbl] = lbl;
      const idx = xtics.indexOf(timeLbl);
      if (idx >= 0) {
        textLbl = labels[textLbl] || textLbl;
        svgLine.append('text')
          .attr('class', 'label')
          .attr('x', xScale(idx))
          .attr('y', yScale(values.openbrain[idx]) - 20)
          .attr('fill', '#333')
          .attr('font-size', '12px')
          .attr('text-anchor', 'start')
          .text(textLbl);
      }
    });
  
    svgLine.append('text')
      .attr('x',  120)
      .attr('y', margins.top + 15)
      .attr('text-anchor', 'end')
      .attr('font-size', 14)
      .attr('fill', '#333')
      .text(data.date);
  
    // -------------------------
    // 2) CAPABILITIES & COMPUTE
    // -------------------------
    const row2 = container.append('div')
      .style('display', 'flex')
      .style('justify-content', 'space-between');
  
    // CAPABILITIES
    const capabilitiesBox = row2.append('div').style('width', '100%');
    const capabilitiesContainer = capabilitiesBox
      .append('div')
      .style('display', 'flex'); // Flex container for title and progress bars
  
    capabilitiesContainer.append('h3')
      .attr('class', 'section-title section-title-vertical')
      .text(labels.capabilitiesSectionTitle);
  
    const capabilitiesGrid = capabilitiesContainer
      .append('div')
      .attr('class', 'progressbar-container')
      .style('flex', '1'); // Ensure it takes the remaining space
  
    const caps = Object.entries(data.capabilities);
    const maxScale = 4;
  
    const capabilityTooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip');
  
    caps.forEach(([key, val]) => {
      const item = capabilitiesGrid.append('div')
        .attr('class', 'progressbar-item');
  
      item.append('div')
        .attr('class', 'progressbar-label')
        .text(labels[key] || key);
  
      const track = item.append('div').attr('class', 'progressbar-track');
      track.append('div')
        .attr('class', 'progressbar-fill')
        .style('width', (Math.min(val, maxScale) / maxScale * 100) + '%')
        .style('background', () => {
          if (val >= 0 && val < 1) return '#555';
          if (val >= 1 && val < 2) return '#556381';
          if (val >= 2 && val < 3) return '#558163';
          if (val >= 3) return '#500';
          return '#ddd'; // Default color for unexpected values
        });
      track.attr('data-value', val);
  
      [1, 2, 3].forEach(cp => {
        track.append('div')
          .attr('class', 'checkpoint')
          .style('left', (cp / maxScale * 100) + '%');
      });
  
      const value_to_ability = (val) => {
        val = parseFloat(val);
        if (val < 1) return labels.amateurLabel;
        if (val < 2) return labels.humanProfessionalLabel;
        if (val < 3) return labels.superhumanLabel;
        if (val < 4) return labels.superhumansuperiorLabel;
        return labels.superhumansuperiorLabel;
      };
  
      track
        .on('mousemove', (event) => {
          // lets read value from the progress bar element attribute, we will put it to data-value attribute
          const progressBarValue = track.attr('data-value');
          capabilityTooltip
            .style('opacity', 1)
            .html(`
              <div style="font-weight:600">${capabilities[key][0]}</div>
              <div>${capabilities[key][1]}</div> <!-- Add the description from capabilities -->
              <div>${labels.valueLabel}: ${progressBarValue}: ${value_to_ability(progressBarValue)}</div>
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 20) + 'px');
        })
        .on('mouseout', () => {
          capabilityTooltip.style('opacity', 0);
        });
    });
  
    // COMPUTE (Donut Chart)
    const computeBox = row2.append('div').style('width', 'auto');
  
    const donutWidth = 140, donutHeight = 140;
    const radius = Math.min(donutWidth, donutHeight) / 2 - 10;
    const donutWrapper = computeBox
      .append('div')
      .attr('class', 'donutchart-container')
      .style('width', donutWidth + 'px')
      .style('height', donutHeight + 'px');
  
    const svgDonut = donutWrapper.append('svg')
      .attr('width', donutWidth)
      .attr('height', donutHeight)
      .append('g')
      .attr('transform', `translate(${donutWidth/2},${donutHeight/2})`);
  
    const donutData = Object.entries(data.compute); 
  
    const arcGen = d3.arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);
  
    const pieGen = d3.pie()
      .sort(null)
      .value(d => d[1]);
  
    const donutCenterText = svgDonut
      .append('text')
      .attr('class', 'donut-middle-text')
      .attr('dy', '0')
      .html(labels.computeSectionTitle);
  
    const arcs = svgDonut.selectAll('.arc')
      .data(pieGen(donutData))
      .enter()
      .append('g')
      .attr('class', 'arc');
  
    arcs.append('path')
      .attr('d', arcGen)
      .attr('fill', d => colorDonut(d.data[0]))
      .on('mouseover', function(event, d) {
        let formattedVal = formatScientific(d.data[1]);
        let label = labels[d.data[0]] || d.data[0];
        donutCenterText
          .attr("dy", "-0.2em")
          .html(`${label}<tspan x="0" dy="1.2em">${formattedVal}</tspan>`);
        tooltip.html(`<div>${labels.computeTooltip}</div>`);
      })
      .on('mouseout', function() {
        donutCenterText.html(labels.computeSectionTitle);
      });
  
    /*arcs.append('text')
      .attr("transform", function(d) {
        let c = arcGen.centroid(d);
        return "translate(" + c[0] + "," + c[1] + ")";
      })
      .attr('class', 'segment-label')
      .text(d => d.data[0]);
    */
    // lets append icon instead of text
    // lets only do it when this segment is more than 4% of the whole
    var total = d3.sum(donutData, d => d[1]);
    arcs.filter(d => d.data[1] / total > 0.04).append('foreignObject')
    .attr("transform", function(d) {
      let c = arcGen.centroid(d); // Get the centroid of the arc
      return `translate(${c[0] - 7}, ${c[1] - 7})`; // Adjust position for the icon
    })
    .attr('width', 14) // Set the width of the icon
    .attr('height', 14) // Set the height of the icon
    .style('filter', 'invert(1)')
    .style('pointer-events', 'none')
    .html(d => icons[d.data[0]] || ''); // Embed the SVG icon or fallback
  
  
    // -------------------------
    // 3) STATS
    // -------------------------
    const statsContainer = container.append('div')
      .attr('class', 'stats-container');
  
      const leftStatsBox = statsContainer.append('div')
        .attr('class', 'stats-box')
        .style('display', 'flex') // Arrange items horizontally
        .style('flex-direction', 'row') // Arrange items horizontally
        .style('align-items', 'center') // Vertically align items
        .style('gap', '8px'); // Add spacing between items
  
      // 1. OpenBrain Icon
      leftStatsBox.append('div')
        .html(icons["OpenBrain"] || '')
        .style('width', '30px');
  
      // 2. Approval
      const approvalItem = leftStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      approvalItem.append('div').text(labels.approvalLabel).style('font-weight', 'bold');
      // we want place value to .value class
      approvalItem.append('div').attr('class', 'value').text(data.openbrain_stats.approval + '%');
  
      // 3. Revenue
      const revenueItem = leftStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      revenueItem.append('div').text(labels.revenueLabel).style('font-weight', 'bold');
      revenueItem.append('div').attr('class', 'value').text('$' + data.openbrain_stats.revenue);
  
      // 4. Valuation
      const valuationItem = leftStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      valuationItem.append('div').text(labels.valuationLabel).style('font-weight', 'bold');
      valuationItem.append('div').attr('class', 'value').text('$' + data.openbrain_stats.valuation);
  
      const rightStatsBox = statsContainer.append('div')
        .attr('class', 'stats-box')
        .style('display', 'flex') // Arrange items horizontally
        .style('flex-direction', 'row') // Arrange items horizontally
        .style('align-items', 'center') // Vertically align items
        .style('gap', '8px'); // Add spacing between items
  
      // 1. Public Icon
      rightStatsBox.append('div')
        .html(icons["Public"] || '')
        .style('width', '30px');
  
      // 2. Importance
      const importanceItem = rightStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      importanceItem.append('div').text(labels.importanceLabel).style('font-weight', 'bold');
      importanceItem.append('div').attr('class', 'value').text(data.worldview.Importance + '%');
  
      // 3. Datacenters
      const datacentersItem = rightStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      datacentersItem.append('div').text(labels.datacentersLabel).style('font-weight', 'bold');
      datacentersItem.append('div').attr('class', 'value').text('$' + data.worldview.Datacenters);
  
      // 4. Timeline
      const timelineItem = rightStatsBox.append('div')
        .style('display', 'flex') // Arrange label and value horizontally
        .style('flex-direction', 'column') // Ensure label is above value
        .style('text-align', 'center');
      timelineItem.append('div').text(labels.agiTimelineLabel).style('font-weight', 'bold');
      timelineItem.append('div').attr('class', 'value').text(data.worldview.timeline);
  
      statsContainer.selectAll('.stats-box > div')
        .on('mousemove', function(event) {
          const text = d3.select(this).selectAll('div').nodes()
                        .map(n => n.innerText).join(': ');
  
          const labelText = d3.select(this).select('div').nodes()[0].innerText;
          // Map labels to tooltips
          const tooltipText = {
            [labels.approvalLabel]: labels.approvalToolTip,
            [labels.revenueLabel]: labels.revenueToolTip,
            [labels.valuationLabel]: labels.valuationToolTip,
            [labels.importanceLabel]: labels.importanceToolTip,
            [labels.datacentersLabel]: labels.datacentersToolTip,
            [labels.agiTimelineLabel]: labels.agiTimelineToolTip,
          };
  
          const tooltipContent = tooltipText[labelText] || text; // Use mapped tooltip or fallback to text
  
          const tooltipWidth = tooltip.node().offsetWidth; // Get the tooltip width
          const pageWidth = window.innerWidth; // Get the page width
          const cursorX = event.pageX;
          const cursorY = event.pageY;
  
          // Check if the tooltip will overflow the right edge
          const isOverflowingRight = cursorX + tooltipWidth + 10 > pageWidth;
  
          tooltip
            .style('opacity', 1)
            .style('max-width', '300px') // Set a max width for the tooltip
            .html(`<div>${tooltipContent}</div>`)
            .style('left', isOverflowingRight ? (cursorX - tooltipWidth - 10) + 'px' : (cursorX + 10) + 'px') // Adjust position
            .style('top', (cursorY - 20) + 'px');
        })
        .on('mouseout', () => tooltip.style('opacity', 0));
    // -------------------------
    // 4) TASKS
    // -------------------------
    /*container.append('h3')
      .attr('class', 'section-title')
      .text(labels.tasksSectionTitle);*/
  
    const tasksWrapper = container
      .append('div')
      .attr('class', 'tasks-container');
  
      function createTaskSection(wrapper, sectionName, tasks, justifyContent) {
        const section = wrapper.append('div')
          .attr('class', 'task-section');
        section.append('div')
          .attr('class', 'task-title')
          .text(sectionName);
        const iconContainer = section.append('div').style('justify-content', justifyContent || 'center');
        tasks.forEach(taskName => {
          const [taskLabel, taskDesc] = taskMap[taskName]; // Get label and description from taskMap
          let iconClass = iconMap[taskName] || "fa-solid fa-square";
          let taskEl = iconContainer.append('span')
              .attr('class', 'task-item')
              .html(`<i class="${iconClass}"></i>`);
              taskEl.on('mousemove', (event) => {
                const tooltipWidth = tooltip.node().offsetWidth; // Get the tooltip width
                const pageWidth = window.innerWidth; // Get the page width
                const cursorX = event.pageX;
                const cursorY = event.pageY;
  
                // Check if the tooltip will overflow the right edge
                const isOverflowingRight = cursorX + tooltipWidth + 10 > pageWidth;
  
                tooltip
                  .style('opacity', 1)
                  .style('max-width', '300px') // Set a max width for the tooltip
                  .html(`
                    <div style="font-weight:600">${taskLabel}</div>
                    <div>${taskDesc}</div>
                  `)
                  .style('left', isOverflowingRight ? (cursorX - tooltipWidth - 10) + 'px' : (cursorX + 10) + 'px') // Adjust position
                  .style('top', (cursorY - 20) + 'px');
              })
              .on('mouseout', () => {
                tooltip.style('opacity', 0);
              });
        });
      }
  
    createTaskSection(tasksWrapper, labels.tasksExistTitle, data.tasks.exist, 'flex-start');
    createTaskSection(tasksWrapper, labels.tasksEmergingTitle, data.tasks.emerging);
    createTaskSection(tasksWrapper, labels.tasksScifiTitle, data.tasks.scifi, 'flex-end');
  
    container.append('div')
      .style('margin-top', '20px')
      .attr('class', 'copies-info')
      .html(labels.copiesInfo
              .replace("{num}", data.copies.num.toLocaleString())
              .replace("{title}", labels[data.copies.title])
              .replace("{speed}", data.copies.speed));
    // lets create infographic as well, there will be three panels
    //on left we will have number of "people-group" icons in the number of num/1000
    //in the middle we will have cross sign
    // and on the right we will have number of "bolt" icons equal to speed
  
    const copiesInfo = container.append('div')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('justify-content', 'flex-end')
      .style('margin-top', '20px')
      .style('width', '100%');
  
    // Left Panel: People Icons
    let numPeople = Math.floor(data.copies.num / 1000);
    let iconForPeople = `<i class="fa-solid fa-person"></i>`
    if (numPeople > 190) {
      numPeople /= 5;
      iconForPeople = `<i class="fa-solid fa-people-group"></i>`
    }
    numPeople = Math.min(numPeople, 400); 
    const peopleGroup = copiesInfo.append('div')
      .attr('class', 'people-group')
      .style('display', 'flex')
      .style('flex-wrap', 'wrap') // Allow wrapping to multiple lines
      .style('align-items', 'center')
      .style('justify-content', 'flex-end')
      .style('width', '370px') // Set a fixed width for wrapping
      .style('margin-right', '10px');
    for (let i = 0; i < numPeople; i++) {
      peopleGroup.append('div')
        .html(iconForPeople)
        .style('width', '14px')
        .style('height', '14px')
        .style('margin', '2px'); // Add spacing between icons
    }
  
    // Middle Panel: Cross Icon
    copiesInfo.append('div')
      .html('<i class="fa-solid fa-xmark"></i>')
      .style('font-size', '20px')
      .style('margin', '0 10px');
  
    // Right Panel: Bolt Icons
    let numBolts = data.copies.speed;
    let boltIcon = `<i class="fa-solid fa-bolt"></i>`
    if (numBolts > 25) {
      numBolts /= 5;
      boltIcon = `<i class="fa-solid fa-gauge-high"></i>`
    }
    numBolts = Math.min(numBolts, 80); 
    const bolts = copiesInfo.append('div')
      .attr('class', 'bolts')
      .style('display', 'flex')
      .style('flex-wrap', 'wrap') // Allow wrapping to multiple lines
      .style('align-items', 'center')
      .style('justify-content', 'flex-start')
      .style('width', '75px') // Set a fixed width for wrapping
      .style('margin-left', '10px');
    for (let i = 0; i < numBolts; i++) {
      bolts.append('div')
        .html(boltIcon)
        .style('width', '14px')
        .style('height', '14px')
        .style('margin', '2px'); // Add spacing between icons
    }
  
  
  }
  /*
  const data = {
    "date":"Mar 2027",
    "ai_multiplier": {
      "values": {
        "openbrain":[ 1.01, 1.03, 1.05, 1.13, 1.21, 1.3, 1.5, 1.73, 2.0, 2.5, 3.0 ],
        "deepcent":[0.85, 0.93, 1.02, 1.06, 1.1, 1.15, 1.26, 1.37, 1.5, 1.6, 2.5],
        "public": [0.96, 0.99, 1.03, 1.08, 1.14, 1.2, 1.4, 1.63, 1.9, 2.2, 2.4]
      },
      "xtics":["Apr 2024", "Aug 2024", "Dec 2024", "Apr 2025", "Aug 2025", "Dec 2025", "Apr 2026", "Aug 2026", "Dec 2026", "Jan 2027", "Feb 2027"],
      "labels": [
        ["Aug 2024", "Unreliable agent"],
        ["Dec 2025", "Reliable agent"]
      ]
    },
    "capabilities": {
      "Hacking": 1.9,
      "Coding": 2.3,
      "Politics": 1.1,
      "Bioweapons": 1.6,
      "Robotics": 0.2,
      "Forecasting":1.4
    },
    "compute": {
      "Rest of US": 1.9e28,
      "OpenBrain":  6.1e27,
      "DeepCent":   3.8e27,
      "Rest of China": 5.4e26
    },
    "copies": {
      "num":190000,
      "title":"Reliable agents",
      "speed":25
    },
    "openbrain_stats": {
      "approval":-28,
      "revenue":"67b",
      "valuation":"3t"
    },
    "worldview": {
      "Importance":4,
      "Datacenters":"653b",
      "timeline":2036
    },
    "tasks": {
      "exist": [
        "Image Recognition",
        "Atari learner",
        "Language Interpreter",
        "Creative Writer",
        "Robotaxi",
        "Image Generator",
        "Code Interpreter",
        "Conversational AI",
        "Expert Chatbot",
        "Virtual Secretary",
        "AI Boyfriend",
        "AI Programmer"
      ],
      "emerging": [
        "Research Automator",
        "General Intelligence",
        "Mirror life"
      ],
      "scifi": [
        "AI Progress exponential growth",
        "Superintelligence",
        "Cancer cure",
        "Humanoid Robot",
        "Rogue Hacker",
        "Robot Economy",
        "Mosquito Drones",
        "Aging Cure",
        "Brain Uploading",
        "Dyson Swarms",
        "Nanobots"
      ]
    }
  };
  const data2 = {
    "date":"Jan 2028",
    "ai_multiplier": {
      "values": {
        "openbrain":[ 1.01, 1.03, 1.05, 1.13, 1.21, 1.3, 1.5, 1.73, 2.0, 2.5, 3.0, 4, 5, 7, 10, 15, 25, 50, 75, 100, 250, 1000 ],
        "deepcent":[0.85, 0.93, 1.02, 1.06, 1.1, 1.15, 1.26, 1.37, 1.5, 1.6, 2.5, 3, 4, 4.2, 5.7, 7.2, 9.7, 14, 18, 22, 40, 80],
        "public": [0.96, 0.99, 1.03, 1.08, 1.14, 1.2, 1.4, 1.63, 1.9, 2.2, 2.4, 2.8, 3.1, 3.5, 4, 5.2, 6.8, 8.8, 10.2, 11.5, 15, 19.5]
      },
      "xtics":["Apr 2024", "Aug 2024", "Dec 2024", "Apr 2025", "Aug 2025", "Dec 2025", "Apr 2026", "Aug 2026", "Dec 2026", "Jan 2027", "Feb 2027", "Mar 2027", "Apr 2027", "May 2027", "Jun 2027", "Jul 2027", "Aug 2027", "Sep 2027", "Oct 2027", "Nov 2027", "Dec 2027", "Jan 2028"],
      "labels": [
        //["Aug 2024", "Unreliable agent"],
        ["Dec 2025", "Reliable agent"],
        //["Apr 2027", "Superhuman coder"],
        ["Sep 2027", "Superhuman AI Researcher"],
        ["Dec 2027", "Superintelligent AI Researcher"],
        ["Jan 2028", "Generally Superintelligent"],
        //["Jul 2028", "Wildly Superintelligent copies"],
      ]
    },
    "capabilities": {
      "Hacking": 4,
      "Coding": 4,
      "Politics": 4,
      "Bioweapons": 4,
      "Robotics": 4,
      "Forecasting": 4,
    },
    "compute": {
      "Rest of US": 4e28,
      "OpenBrain":  1.5e28,
      "DeepCent":   8.8e27,
      "Rest of China": 6.3e26
    },
    "copies": {
      "num":500000,
      "title":"Generally Superintelligent copies",
      "speed":100
    },
    "openbrain_stats": {
      "approval":-50,
      "revenue":"300b",
      "valuation":"10t"
    },
    "worldview": {
      "Importance":35,
      "Datacenters":"1t",
      "timeline":2029
    },
    "tasks": {
      "exist": [
        "Image Recognition",
        "Atari learner",
        "Language Interpreter",
        "Creative Writer",
        "Robotaxi",
        "Image Generator",
        "Code Interpreter",
        "Conversational AI",
        "Expert Chatbot",
        "Virtual Secretary",
        "AI Boyfriend",
        "AI Programmer",
        "Research Automator",
        "General Intelligence",
        "AI Progress exponential growth",
        "Superintelligence",
      ],
      "emerging": [
        "Mirror life",
        "Cancer cure",
        "Humanoid Robot",
        "Rogue Hacker",
        "Robot Economy",
      ],
      "scifi": [
        "Mosquito Drones",
        "Aging Cure",
        "Brain Uploading",
        "Dyson Swarms",
        "Nanobots"
      ]
    }
  };
  */
  function updateInfographic(containerId, data) {
    const container = d3.select('#' + containerId);
  
    // Update Line Chart
    const lineChartWidth = 440;
    const lineChartHeight = 100;
    const margins = { top: 10, right: 25, bottom: 10, left: 10 };
  
    const svgLine = container.select('.linechart-container svg');
    if (!svgLine.empty()) {
      const { values, xtics, labels: chartLabels } = data.ai_multiplier;
      const n = xtics.length;
      const series = [
        { name: 'OpenBrain', data: values.openbrain },
        { name: 'DeepCent', data: values.deepcent },
        { name: 'Public', data: values.public }
      ];
  
      const xScale = d3.scaleLinear()
        .domain([0, n - 1])
        .range([margins.left, lineChartWidth - margins.right]);
  
      const allValues = [...values.openbrain, ...values.deepcent, ...values.public];
      const minY = d3.min(allValues);
      const maxY = d3.max(allValues);
  
      const yScale = d3.scaleLinear()
        .domain([Math.min(0.8, minY), maxY * 1.05])
        .range([lineChartHeight - margins.bottom, margins.top]);
  
      const lineGen = d3.line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d))
        .curve(d3.curveCatmullRom.alpha(0.5));
  
      // Update lines
      svgLine.selectAll('.multiline')
        .data(series)
        .join(
          enter => enter.append('path')
            .attr('class', 'multiline')
            .attr('fill', 'none')
            .attr('stroke-width', 2),
          update => update,
          exit => exit.remove()
        )
        .attr('stroke', d => colorScale(d.name))
        .transition().duration(1000)
        .attr('d', d => lineGen(d.data));
  
      svgLine.selectAll('.legend-icon').remove();
      let lastY = null;
      // Update circles
      series.forEach(s => {
        /*svgLine.selectAll('.circle-' + s.name)
          .data(s.data)
          .join(
            enter => enter.append('circle')
              .attr('class', 'circle-' + s.name)
              .attr('r', 3),
            update => update,
            exit => exit.remove()
          )
          .transition().duration(1000)
          .attr('cx', (d, i) => xScale(i))
          .attr('cy', d => yScale(d))
          .attr('fill', colorScale(s.name));
      */
          // lets update legend-icon
          const lastIndex = s.data.length - 1;
      if (lastY === null) {
        lastY = yScale(s.data[lastIndex]) - 6;
      } else if (Math.abs(lastY - (yScale(s.data[lastIndex]) - 6)) > 10) {
        lastY = yScale(s.data[lastIndex]) - 6;
      } else {
        lastY = lastY + 15;
      }
      svgLine.append('foreignObject')
        .attr('class', 'legend-icon')
        .attr('x', xScale(lastIndex) + 5)
        .attr('y', lastY) // Adjust position as needed
        .attr('width', 14) // Set the width of the SVG
        .attr('height', 14) // Set the height of the SVG
        .html(icons[s.name] || ''); // Embed the SVG as raw HTML        
      });
  
  
      // we also need to update labels
      // Remove old labels
      svgLine.selectAll('.label').remove();
  
      // Set new labels with overlap adjustment
      lastY = null; // Track the last y position to avoid overlap
      lastX = null; // Track the last x position to avoid overlap
      chartLabels.forEach(lbl => {
        const [timeLbl, textLbl] = lbl;
        const idx = xtics.indexOf(timeLbl);
        if (idx >= 0) {
          const xPos = xScale(idx) + 10 ;
          let insertedText = labels[textLbl] || textLbl;
  
          let yPos = yScale(values.openbrain[idx]) - 20; // Initial y position
          if (lastY !== null && Math.abs(lastY - yPos) < 15
            && lastX !== null && Math.abs(lastX - xPos) < insertedText.length * 5
        ) {
            // Adjust y position if it overlaps with the previous label
            yPos = lastY - 15;
          }
          lastY = yPos; // Update lastY to the current label's y position
          lastX = xPos; // Update lastX to the current label's x position
  
          svgLine.append('text')
            .attr('class', 'label')
            .attr('x', xPos) // Use adjusted x position
            .attr('y', yPos)
            .attr('fill', '#333')
            .attr('font-size', '12px')
            .attr('text-anchor', 'end') // Align text based on position
            .text(labels[textLbl] || textLbl);
        }
      });
    } else {
      // Fallback to redraw if the line chart doesn't exist
      drawInfographic(containerId, data);
      return;
    }
  
    // Update Capabilities
    const capabilitiesGrid = container.select('.progressbar-container');
    if (!capabilitiesGrid.empty()) {
      const caps = Object.entries(data.capabilities);
      capabilitiesGrid.selectAll('.progressbar-item')
        .data(caps)
        .join(
          enter => {
            const item = enter.append('div').attr('class', 'progressbar-item');
            item.append('div').attr('class', 'progressbar-label');
            item.append('div').attr('class', 'progressbar-track')
              .append('div').attr('class', 'progressbar-fill');
            return item;
          },
          update => update,
          exit => exit.remove()
        )
        .each(function ([key, val]) {
          const item = d3.select(this);
          item.select('.progressbar-track').attr('data-value', val);
          item.select('.progressbar-label').text(labels[key] || key);
          item.select('.progressbar-fill')
            .transition().duration(1000)
            .style('width', Math.min((Math.min(val, 4) / 4 * 100), 100) + '%')
            .style('background', () => {
              if (val >= 0 && val < 1) return '#555';
              if (val >= 1 && val < 2) return '#556381';
              if (val >= 2 && val < 3) return '#558163';
              if (val >= 3) return '#500';
              return '#ddd';
            });
        });
    } else {
      // Fallback to redraw if capabilities section doesn't exist
      drawInfographic(containerId, data);
      return;
    }
    

    
  
    // Update Donut Chart
    const svgDonut = container.select('.donutchart-container svg');
    if (!svgDonut.empty()) {
      const donutData = Object.entries(data.compute);
      const pieGen = d3.pie().sort(null).value(d => d[1]);
  
      const donutWidth = 140, donutHeight = 140;
      const radius = Math.min(donutWidth, donutHeight) / 2 - 10;
      const arcGen = d3.arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);
  
      svgDonut.selectAll('.arc')
        .data(pieGen(donutData))
        .join(
          enter => {
            const arc = enter.append('g').attr('class', 'arc');
            arc.append('path');
            return arc;
          },
          update => update,
          exit => exit.remove()
        )
        .select('path')
        .transition().duration(1000)
        .attr('d', arcGen)
        .attr('fill', d => colorDonut(d.data[0]));

        // we also need to update placement labels (icons)
        var total = d3.sum(donutData, d => d[1]);
        svgDonut.selectAll('.arc foreignObject').remove();
        svgDonut.selectAll('.arc')
        .filter(d => d.data[1] / total > 0.04)
        .append('foreignObject')
        .attr("transform", function(d) {
          let c = arcGen.centroid(d); // Get the centroid of the arc
          return `translate(${c[0] - 7}, ${c[1] - 7})`; // Adjust position for the icon
        })
        .attr('width', 14) // Set the width of the icon
        .attr('height', 14) // Set the height of the icon
        .style('filter', 'invert(1)')
        .style('pointer-events', 'none')
        .html(d => icons[d.data[0]] || ''); // Embed the SVG icon or fallback
    } else {
      // Fallback to redraw if donut chart doesn't exist
      drawInfographic(containerId, data);
      return;
    }
  
    // Update Stats
    const statsContainer = container.select('.stats-container');
    if (!statsContainer.empty()) { // only value elements, but we need to keep suffix (like $) and postfix like %
      statsContainer.selectAll('.value')
        .data([
          data.openbrain_stats.approval,
          data.openbrain_stats.revenue,
          data.openbrain_stats.valuation,
          data.worldview.Importance,
          data.worldview.Datacenters,
          data.worldview.timeline
        ])
        .join(
          enter => enter.append('div').attr('class', 'value'),
          update => update,
          exit => exit.remove()
        )
        .text((d, i) => {
          if (i === 0 || i === 3) return d + '%';
          if (i === 1 || i === 2 || i == 4) return '$' + d;
          return d;
        });
    } else {
      // Fallback to redraw if stats section doesn't exist
      drawInfographic(containerId, data);
      return;
    }
  
    // Update Tasks
    const tasksWrapper = container.select('.tasks-container');
    if (!tasksWrapper.empty()) {
      tasksWrapper.selectAll('.task-section')
        .data([
          { title: labels.tasksExistTitle, tasks: data.tasks.exist },
          { title: labels.tasksEmergingTitle, tasks: data.tasks.emerging },
          { title: labels.tasksScifiTitle, tasks: data.tasks.scifi }
        ])
        .join(
          enter => {
            const section = enter.append('div').attr('class', 'task-section');
            section.append('div').attr('class', 'task-title');
            section.append('div').style('justify-content', 'center');
            return section;
          },
          update => update,
          exit => exit.remove()
        )
        .each(function (d) {
          const section = d3.select(this);
          section.select('.task-title').text(d.title);
          const iconContainer = section.select('div:last-child');
          iconContainer.selectAll('span')
            .data(d.tasks)
            .join(
              enter => enter.append('span').attr('class', 'task-item'),
              update => update,
              exit => exit.remove()
            )
            .html(taskName => {
              const [taskLabel, taskDesc] = taskMap[taskName];
              return `<i class="${iconMap[taskName] || 'fa-solid fa-square'}"></i>`;
            });
        });
    } else {
      // Fallback to redraw if tasks section doesn't exist
      drawInfographic(containerId, data);
      console.log("tasksWrapper not found");
      return;
    }
    // lets update copies info
    const copiesInfo = container.select('.copies-info');
    // lets just rerplace old string with new string
    copiesInfo
      .html(labels.copiesInfo
        .replace("{num}", data.copies.num.toLocaleString())
        .replace("{title}", labels[data.copies.title])
        .replace("{speed}", data.copies.speed.toLocaleString()));
  
    // Update People and Bolt Icons
    const peopleGroup = container.select('.people-group');
    // lets just remove and redraw people
    peopleGroup.selectAll('div').remove();
    let numPeople = Math.floor(data.copies.num / 1000);
    let iconForPeople = `<i class="fa-solid fa-person"></i>`;
    if (numPeople > 190) {
      numPeople /= 5;
      iconForPeople = `<i class="fa-solid fa-people-group"></i>`;
    }
    numPeople = Math.min(400, numPeople);
    for (let i = 0; i < numPeople; i++) {
      peopleGroup.append('div')
        .html(iconForPeople)
        .style('width', '14px')
        .style('height', '14px')
        .style('margin', '2px'); // Add spacing between icons
    }
    // Update Bolt Icons
    const bolts = container.select('.bolts');
    // lets just remove and redraw bolts
    bolts.selectAll('div').remove();
    let numBolts = data.copies.speed;
    let boltIcon = `<i class="fa-solid fa-bolt"></i>`;
    if (numBolts > 25) {
      numBolts /= 5;
      boltIcon = `<i class="fa-solid fa-gauge-high"></i>`;
    }
    numBolts = Math.min(80, numBolts);
    for (let i = 0; i < numBolts; i++) {
      bolts.append('div')
        .html(boltIcon)
        .style('width', '14px')
        .style('height', '14px')
        .style('margin', '2px'); // Add spacing between icons
    }
  
  }
  


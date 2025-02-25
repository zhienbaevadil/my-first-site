document.addEventListener('DOMContentLoaded', () => { // Бет толық жүктелген кезде орындалады
  console.log('Страница загружена!'); // Консольге "Страница загружена!" деген хабарламаны шығарады
  
  // Intersection Observer қолдану мысалы, секцияларды анимациялау үшін
  const sections = document.querySelectorAll('section'); // Барлық <section> элементтерін таңдайды
  const options = { threshold: 0.1 }; // Нысан көріністің 10%-ына кіргенде іске қосылады
  
  const observer = new IntersectionObserver((entries, observer) => { // Бақылаушы объектіні жасайды
    entries.forEach(entry => { // Әрбір бақыланатын элементке арналған цикл
      if (entry.isIntersecting) { // Егер элемент көрінсе
        entry.target.style.opacity = '1'; // Ашықтықты 1-ге орнатады
        entry.target.style.transform = 'translateY(0)'; // Жоғарыдан анимация арқылы түсіреді
        observer.unobserve(entry.target); // Бұл элементті бақылаудан шығарады
      }
    });
  }, options);
  
  sections.forEach(section => { // Әрбір <section> элементін бақылауға қосады
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => { // Бет жүктелгенде код іске қосылады
  const sections = document.querySelectorAll('section'); // Барлық <section> элементтерін таңдайды

  const options = { threshold: 0.1 }; // 10% көрінгенде триггер іске қосылады

  const observer = new IntersectionObserver((entries, observer) => { // Бақылаушыны анықтайды
    entries.forEach(entry => { // Әр элементке арналған цикл
      if (entry.isIntersecting) { // Егер элемент көрініс аймағына кірсе
        entry.target.style.opacity = '1'; // Ашықтықты толық етеді
        entry.target.style.transform = 'translateY(0)'; // Жоғарыдан төмен түсу анимациясын қосады
        observer.unobserve(entry.target); // Бақылаудан шығарады
      }
    });
  }, options);

  sections.forEach(section => { // Әрбір <section> элементін бақылайды
    observer.observe(section);
  });
});
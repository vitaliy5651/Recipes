class HashStorage{
    constructor(){
        this.store = {};
    }
    addValue(key, value) {
        this.store[key] = value 
    }
    getValue(key){
        return this.store[key]
    }
    deleteValue(key){
        if(!(key in this.store)){
            return false
        }
        return delete this.store[key]
    }
    getKeys(){
        return Object.keys(this.store)
    }
}
const coctailsStorage = new HashStorage()
coctailsStorage.addValue('Маргарита', {name:'Маргарита', alcahol: 'да', ingridients:'Водка Finlandia 50мл; Кофейный ликер 25мл; Лед в кубиках 120 г', recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'})
coctailsStorage.addValue('Пеликан', {name:'Пеликан', alcahol: 'нет', ingridients:'Гренадин Monin 10мл; Клубничный сироп Monin 10мл; Персиковый сок 150мл; Лимонный сок 15мл; Банан 110г; Клубника 50г; Дробленый лед 60г', recipe:'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'})

const addButton = document.getElementById("addRecipe");
addButton.addEventListener('click', () => {
    const name = window.prompt('Введите название коктеля:')
    const alcohol = window.prompt('Напиток алкогольный?')
    const ingridients = window.prompt('Введите список необходимых ингридиентов:')
    const recipe = window.prompt('Введите рецепт приготовления напитка:')
    coctailsStorage.addValue(name, {name, alcohol, ingridients, recipe})
    console.log('Coctail was added', coctailsStorage.getValue(name))
    console.log(coctailsStorage)
});

const recipeButton = document.getElementById("recipeCoctails");
recipeButton.addEventListener('click', () => {
    const name = window.prompt('Введите название напитка по которому хотите получить информацию')
    if(!coctailsStorage.getValue(name)){
        console.log('Вы ввели неверное имя напитка, либо вы не добавили его в список напитков, добавьте напиток и повторите попытку')
    }else{
        console.log('Рецепт напитка: ', coctailsStorage.getValue(name))
    }
})

const deleteButton = document.getElementById("deleteRecipe");
deleteButton.addEventListener('click', () => {
    const name = window.prompt('Введите название напитка который хотите удалить');
    console.log('Удален следующий рецепт', coctailsStorage.getValue(name))
    coctailsStorage.deleteValue(name)
})

const viewButton = document.getElementById("viewAllRecipes");
viewButton.addEventListener('click', () => {
    console.log('Список всех рецептов: ', coctailsStorage.getKeys())
})

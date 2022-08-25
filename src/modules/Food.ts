class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        //获取页面中的food的元素赋值给element
        this.element = document.getElementById('food')!;

    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    //修改食物位置的
    change() {

        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px'
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px'
    }
}
export default Food
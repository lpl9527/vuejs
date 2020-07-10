const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2020-06',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2020-01',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2020-07',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2020-08',
                price: 128.00,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice(){       //这里印证了一个很重要的问题：computed依赖于data中的数据，只有与它依赖的数据发生改变时就会重新求值。
            let totalPrice = 0;
            //1.方式一，普通遍历：
            /*for(let i=0; i<this.books.length; i++){
                totalPrice += this.books[i].price * this.books[i].count;
            }*/
            //方式二，拿到下标：
            /*for (let i in this.books){  //注意：这个i不是books的每一项，而是每一项的索引
                totalPrice += this.books[i].price * this.books[i].count;
            }*/
            //方式三，拿到项：
            /*for (let book of this.books){
                totalPrice += book.price * book.count;
            }*/
            //方式四：使用高阶函数reduce
            totalPrice = this.books.reduce(function (previousValue, book) {
                return previousValue + book.price * book.count;
            }, 0);

            return totalPrice;
        }
    },
    methods: {
        decrement: function (index) {    //减少购买数量
            if (this.books[index].count > 1){   //书的数量最少为1
                this.books[index].count--;
            }
        },
        increment: function (index) {    //增加购买数量
            this.books[index].count++;
        },
        removeBook: function (index) {
            this.books.splice(index, 1);  //移除index下标的数组元素，因为数组下标从0开始，splice下标从1开始且不移除当前元素，所以开始下标为index
        }
    },
    filters: {      //过滤器，可以对指定数据进行处理，使用方式： 数据 | 过滤器名称
        showPrice(price){
            return '￥' + price.toFixed(2);      //保留两位小数
        }
    }

});
var app = new Vue(
    {
    el: '#root',
    data: {  
        active: false,
    }, 
    methods: {
        dropdown() {

            this.active = !this.active;
            console.log(this.active)
        }
    },
    mounted() {

    }
});

